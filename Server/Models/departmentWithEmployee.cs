using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class departmentWithEmployee
    {
        public int depId { get; set; }
        public string name { get; set; }
        public int manager { get; set; }
        public int departmentId { get; set; }
    }
}