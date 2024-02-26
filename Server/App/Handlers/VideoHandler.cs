using YoutubeExplode;
using YoutubeExplode.Videos.Streams;

namespace App.Handlers
{
    public class VideoHandler
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public VideoHandler(IHttpClientFactory httpClientFactory)
        { _httpClientFactory = httpClientFactory; }

        public async Task<MemoryStream> GetAudioStream(string videoLink)
        {
            var youtube = new YoutubeClient();

            var streamManifest = await youtube.Videos.Streams.GetManifestAsync(videoLink);
            var audioStream = streamManifest.GetAudioOnlyStreams().GetWithHighestBitrate();
            try
            {
                if(audioStream is null) {
                    throw new Exception("Audio stream not found");
                }

                using var httpClient = _httpClientFactory.CreateClient();
                var audioBytes = await httpClient.GetByteArrayAsync(audioStream.Url);

                var audioMemoryStream = new MemoryStream(audioBytes);
                return audioMemoryStream;
            }
            catch 
            { throw; }
        }
    }
}
