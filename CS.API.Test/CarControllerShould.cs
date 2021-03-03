using CS.API.Controllers;
using CS.API.Models;
using CS.Domain.Entities;
using CS.Domain.Enums;
using CS.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using Xunit;
using System.Linq;

namespace CS.API.Test
{
    public class CarControllerShould
    {
        private readonly Mock<ILogger<CarController>> _mockLogger;
        private readonly InMemoryCarDataService _dataCarSerive;
        private readonly CarController _carController;

        public CarControllerShould()
        {
            _mockLogger = new Mock<ILogger<CarController>>();
            _dataCarSerive = new InMemoryCarDataService();
            _carController = new CarController(_mockLogger.Object, _dataCarSerive);
        }
        [Fact]
        public void Return_List_Of_Car()
        {
            //Arrange

            //Act       
            var actionResult = _carController.GetCars();

            //Assert
            var result = Assert.IsType<OkObjectResult>(actionResult.Result);
            var model = Assert.IsAssignableFrom<IEnumerable<Car>>(result.Value);
            
            Assert.True(model.Count() > 0);            
        }

        [Fact]
        public void BadRequest_When_InvalidModel()
        {
            //Arrange
            _carController.ModelState.AddModelError("x", "Test Error");

            var model = new CarForCreationDto();

            //Act       
            var actionResult = _carController.CreateCar(model);

            //Assert
            Assert.IsType<BadRequestObjectResult>(actionResult.Result);

        }

        [Fact]
        public void Ok_When_ValidModel()
        {
            //Arrange
            var model = new CarForCreationDto()
            {
                Make = "Honda",
                Model = "Jazz",
                BodyType = BodyType.HatchBack,
                Doors = 4,
                Wheels = 4,
                Engine = "Ph14",
                VehicleType = VehicleType.Car
            };

            //Act       
            var actionResult = _carController.CreateCar(model);

            //Assert
            var result = Assert.IsType<OkObjectResult>(actionResult.Result);
            var returnedModel = Assert.IsAssignableFrom<Car>(result.Value);

            Assert.Equal("Honda", returnedModel.Make);

        }

    }
}
