using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class employeeWithShift
    {
        public int empId { get; set; }
        public string fNmae { get; set; }
        public string lName { get; set; }
        public int startWorkYear { get; set; }
        public int departmentId { get; set; }

        public List<shift> empShifts { get; set; }


    }
}