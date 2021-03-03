using CS.Domain.Entities;
using CS.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CS.Infrastructure.Services
{
    public class InMemoryCarDataService : IInMemoryCarDataService
    {
        List<Car> cars;
        public InMemoryCarDataService()
        {
            cars = new List<Car>
            {
                new Car {
                    Id=1,
                    VehicleType = VehicleType.Car,
                    Make = "Honda",
                    Model = "Jazz",
                    Engine="1497cc",
                    Doors=5,
                    Wheels=4,
                    BodyType=BodyType.HatchBack
                }
            };
        }

        public IEnumerable<Car> GetCars()
        {
            return cars;
        }

        public Car Add(Car car)
        {
            cars.Add(car);
            car.Id = cars.Max(c => c.Id) + 1;
            return car;
        }
    }
}
