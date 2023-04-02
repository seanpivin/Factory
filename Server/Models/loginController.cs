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
    public class loginController : ApiController
    {
        private static loginBLL lbll = new loginBLL();
        // GET: api/login
        public IEnumerable<users> Get()
        {
            return lbll.getAllUsers();
        }

        // GET: api/login/5
        public users Get(string userName)
        {
            return lbll.getUserById(userName);
        }

        // POST: api/login
        public string Post(users user)
        {
             lbll.addUser(user);
            return "User added";
        }
       

        // PUT: api/login/5
        public void Put(string u)
        {
             lbll.updateUserCounter(u);


        }

        // DELETE: api/login/5
        public string Delete(int id)
        {
            lbll.deleteUser(id);
            return "User deleted";
        }
    }
}
