using YoutubeExplode;
using YoutubeExplode.Videos.Streams;

namespace App.Handler
{
    public class VideoHandler
    {
        public VideoHandler()
        {}

        public async Task GetVideo(string videoLink)
        {
            var youtube = new YoutubeClient();

            var streamManifest = await youtube.Videos.Streams.GetManifestAsync(videoLink);
            var audio = streamManifest.GetAudioOnlyStreams().GetWithHighestBitrate();
            try
            {
                if(audio is null) {
                    throw new Exception("MESSAGE");
                }
            }
            catch 
            { }
        }
    }
}
