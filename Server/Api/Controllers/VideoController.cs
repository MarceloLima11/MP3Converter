using App.Handlers;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VideoController : ControllerBase
    {
        private readonly VideoHandler _videoHandler;
        public VideoController(VideoHandler videoHandler)
        { _videoHandler = videoHandler; }


        [HttpGet]
        public async Task<IActionResult> GetVideoInfo(string videoLink)
        {
            try
            {
                var result = await _videoHandler.GetVideoInfo(videoLink.Trim());
                return Ok(result);
            }
            catch (Exception err)
            { return BadRequest(err.Message); }
        }
    }
}
