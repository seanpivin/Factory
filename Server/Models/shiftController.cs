using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FactoryFinalProject.Models
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class shiftController : ApiController
    {

        private static shiftBLL shiftBLL = new shiftBLL();
        // GET: api/shift
        public IEnumerable<shiftWithEmp> Get()
        {
            return shiftBLL.getAllShifts();
        }

        // GET: api/shift/5
        public shiftWithEmp Get(int id)
        {
            return shiftBLL.getShift(id);
        }

        // POST: api/shift
        public string Post( shift s)
        {
            shiftBLL.addShift(s);
            return "Shift Added!";
        }
        

        // PUT: api/shift/5
        public string Put(int id,shift s)
        {
            shiftBLL.updateShift(id, s);
            return "Shift Updated";
        }

        // DELETE: api/shift/5
        public string Delete(int id)
        {
            shiftBLL.deleteShift(id);
            return "Shift Deleted";
        }
    }
}
