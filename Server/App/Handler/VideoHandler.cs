using YoutubeExplode;

namespace App.Handler
{
    public class VideoHandler
    {
        public VideoHandler()
        {}

        public async void GetVideo(string videoLink)
        {
            var youtube = new YoutubeClient();

            var video = await youtube.Videos.GetAsync(videoLink);
        }
    }
}
