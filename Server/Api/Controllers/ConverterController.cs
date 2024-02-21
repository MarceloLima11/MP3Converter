using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConverterController : ControllerBase
    {
        [HttpGet]
        public IActionResult ConverterVideo(string videoLink)
        {
            try
            {
                return Ok();
            }
            catch (Exception err) 
            { return BadRequest(err.Message); }
        }
    }
}
