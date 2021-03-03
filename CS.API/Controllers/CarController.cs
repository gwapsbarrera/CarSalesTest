using CS.API.Models;
using CS.Domain.Entities;
using CS.Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ILogger<CarController> _logger;
        private readonly IInMemoryCarDataService _carDataService;

        public CarController(ILogger<CarController> logger,IInMemoryCarDataService carDataService)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _carDataService = carDataService ?? throw new ArgumentNullException(nameof(carDataService));
        }

        [HttpGet()]
        public ActionResult<IEnumerable<CarDto>> GetCars()
        {
            return Ok(_carDataService.GetCars());
        }

        [HttpPost]
        public ActionResult<CarDto> CreateCar(CarForCreationDto car)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var newCar = new Car()
                {
                    VehicleType = car.VehicleType,
                    Make = car.Make,
                    Model = car.Model,
                    Engine = car.Engine,
                    Doors = car.Doors,
                    Wheels = car.Wheels,
                    BodyType = car.BodyType
                };

                _carDataService.Add(newCar);

                return Ok(newCar);
            }
            catch(Exception ex)
            {
                _logger.LogCritical($"Exception was thrown", ex);
                return StatusCode(500, "A problem happened while handling your request");
            }

        }
    }
}
