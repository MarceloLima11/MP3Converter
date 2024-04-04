using App.DTOs;
using Common;
using System.Diagnostics;
using YoutubeExplode;
using YoutubeExplode.Converter;
using YoutubeExplode.Videos.Streams;

namespace App.Handlers
{
    public class VideoHandler
    {
        public VideoHandler()
        { }

        public async Task<VideoInfoRecord> GetVideoInfo(string link)
        {
            string[] streamSizes = new string[5];
            var youtube = new YoutubeClient();
            try
            {
                var video = await youtube.Videos.GetAsync(link);

                var streamManifest = await youtube.Videos.Streams.GetManifestAsync(link);
                var audioStreams = streamManifest.GetAudioStreams()
                    .Where(x => x.Bitrate.BitsPerSecond > 64000).OrderByDescending(x => x.Bitrate.BitsPerSecond);

                for (int index = 0; index < audioStreams.Count(); index++)
                {
                    streamSizes[index] = audioStreams.ToList()[index].Size.ToString();
                }

                var videoInfo = new VideoInfoRecord(video.Title, video.Thumbnails[0].Url, streamSizes);

                return videoInfo;
            }
            catch
            { throw; }
        }

        public async Task<string> GetAudioStream(string videoLink)
        {
            var youtube = new YoutubeClient();
            try
            {
                var videoInfo = await youtube.Videos.GetAsync(videoLink);
                var streamManifest = await youtube.Videos.Streams.GetManifestAsync(videoLink);

                var audioStream = streamManifest.GetAudioStreams().GetWithHighestBitrate();

                var streamInfos = new IStreamInfo[] { audioStream };
                var conversionRequest = new ConversionRequestBuilder($"{Consts.SAVE_FILES_PATH}{videoInfo.Title}.mp3")
                    .SetPreset(ConversionPreset.UltraFast)
                    .SetFFmpegPath(Consts.FFMPEG_PATH)
                    .Build();

                await youtube.Videos.DownloadAsync(streamInfos, conversionRequest);

                return conversionRequest.OutputFilePath;
            }
            catch
            { throw; }
        }
    }
}
