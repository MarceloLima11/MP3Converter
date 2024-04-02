using App.DTOs;
using Common;
using System.Diagnostics;
using YoutubeExplode;
using YoutubeExplode.Converter;
using YoutubeExplode.Videos;
using YoutubeExplode.Videos.Streams;

namespace App.Handlers
{
    public class VideoHandler
    {
        public VideoHandler()
        { }

        public async Task<VideoInfoRecord> GetVideoInfo(string link)
        {
            var youtube = new YoutubeClient();
            try
            {
                var video = await youtube.Videos.GetAsync(link);
                var videoInfo = new VideoInfoRecord(video.Title, video.Thumbnails[0].Url);

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

                #region
                var audioStreamTestList = streamManifest.GetAudioStreams();
                foreach (var audioStreamTest in audioStreamTestList)
                {
                    Debug.WriteLine($"Formato: {audioStreamTest.AudioCodec} | Bitrate: {audioStreamTest.Bitrate}bps");
                }
                #endregion 


                var audioStream = streamManifest.GetAudioStreams().GetWithHighestBitrate()
                    ?? throw new Exception("Audio stream not found");

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
