using CS.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace CS.Domain.Entities
{
    public class Car : Vehicle
    {
        public string Engine { get; set; }
        public int Doors { get; set; }
        public int Wheels { get; set; }
        public BodyType BodyType { get; set; }
    }
}
