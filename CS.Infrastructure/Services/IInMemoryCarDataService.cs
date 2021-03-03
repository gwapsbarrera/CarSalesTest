using CS.Domain.Entities;
using System.Collections.Generic;

namespace CS.Infrastructure.Services
{
    public interface IInMemoryCarDataService
    {
        IEnumerable<Car> GetCars();
        Car Add(Car car);
    }
}