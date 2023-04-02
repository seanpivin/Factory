using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FactoryFinalProject.Models;
using System.Web.Http.Cors;
namespace FactoryFinalProject.Models
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class employeeController : ApiController
    {
        private static EmployeeShiftBLL empShiftBLL = new EmployeeShiftBLL();
        // GET: api/employee
        public IEnumerable<employeeWithShift> Get()
        {
            return empShiftBLL.getEmployeeShifts();
        }

        // GET: api/employee/5
        public employee Get(int id)
        {
            return empShiftBLL.getEmployee(id);
        }

        // POST: api/employee
        public string Post(employee e)
        {
            empShiftBLL.addEmployee(e);
            return "Employee added";
        }

        // PUT: api/employee/5
        public string Put(int id, employee e)
        {
            empShiftBLL.updateEmployee(id, e);
            return "Employee updated";
        }
       

        // DELETE: api/employee/5
        public string Delete(int id)
        {
            empShiftBLL.deleteEmployee(id);
            return "Employee deleted";

        }
    }
}
