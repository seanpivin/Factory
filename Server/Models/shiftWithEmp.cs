using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class shiftWithEmp
    {
        public int sid { get; set; }
        public System.DateTime date { get; set; }
        public int startTime { get; set; }
        public int endTime { get; set; }

        public string fNmae { get; set; }
        public string lName { get; set; }

        public int employeeId { get; set; }
        public int shiftId { get; set; }
    }
}