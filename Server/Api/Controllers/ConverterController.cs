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

        [HttpGet()]
        public async Task<IActionResult> ConverterVideo(string videoLink)
        {
            try
            {
                var filePath = await _videoHandler.GetAudioStream(videoLink);

                var fileBytes = await System.IO.File.ReadAllBytesAsync(filePath);
                var fileStream = new MemoryStream(fileBytes);

                return File(fileStream, "audio/mpeg", Path.GetFileName(filePath));
            }
            catch (Exception err) 
            { return BadRequest(err.Message); }
        }
    }
}
