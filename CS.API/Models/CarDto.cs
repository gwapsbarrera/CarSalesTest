using CS.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CS.API.Models
{
    public class CarDto
    {
        public int Id { get; set; }
        public VehicleType VehicleType { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Engine { get; set; }
        public int Doors { get; set; }
        public int Wheels { get; set; }
        public BodyType BodyType { get; set; }
    }
}
