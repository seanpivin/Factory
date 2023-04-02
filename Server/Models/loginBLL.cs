using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class loginBLL
    {
        private FactoryFinalProjectDBEntities db = new FactoryFinalProjectDBEntities();

        public List<users> getAllUsers()
        {
            return db.users.ToList();
        }
        public users getUserById(string userName)
        {
            return db.users.Find(userName);
        }
        public void addUser(users user)
        {
            db.users.Add(user);
            db.SaveChanges();
        }
        public void updateUserCounter(string user)
        {
            users u = db.users.Where(x => x.userName == user).First();
            u.numerOfactions -= 1;

            db.SaveChanges();
        }

        public void deleteUser(int id)
        {
            users u = db.users.Where(x => x.userid == id).First();
            db.users.Remove(u);
            db.SaveChanges();
        }
    }
}