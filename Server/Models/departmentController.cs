using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FactoryFinalProject.Models;
namespace FactoryFinalProject.Models
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class departmentController : ApiController
    {
        private static departmentBLL departmentBLL = new departmentBLL();
        // GET: api/department
        public IEnumerable<department> Get()
        {
            return departmentBLL.getAllDepartments();
        }

        // GET: api/department/5
        public department Get(int id)
        {
            return departmentBLL.getDepartmentById(id);
        }

        // POST: api/department
        public string Post(department dep)
        {
            departmentBLL.addDepartment(dep);
            return "Department added";
        }

        // PUT: api/department/5
        public string Put(int id,department dep)
        {
            departmentBLL.updateDepartment(id, dep);
            return "Department updated";
        }

        // DELETE: api/department/5
        public string Delete(int id)
        {
            departmentBLL.deleteDepartment(id);
            return "Department deleted";
        }
    }
}
