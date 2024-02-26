using App.Handlers;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConverterController : ControllerBase
    {
        private readonly VideoHandler _videoHandler;
        public ConverterController(VideoHandler videoHandler)
        { _videoHandler = videoHandler; }

        [HttpGet]
        public async Task<IActionResult> ConverterVideo(string videoLink)
        {
            try
            {
                var memoryStream = await _videoHandler.GetAudioStream(videoLink);

                return new FileStreamResult(memoryStream, "audio/mp3")
                {
                    FileDownloadName = "audio.mp3"
                };
            }
            catch (Exception err) 
            { return BadRequest(err.Message); }
        }
    }
}
