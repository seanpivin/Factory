using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class departmentBLL
    {
        private FactoryFinalProjectDBEntities db = new FactoryFinalProjectDBEntities();

        public List<department> getAllDepartments()
        {
            return db.department.ToList();
        }

        public department getDepartmentById(int id)
        {
            return db.department.Where(x => x.depId == id).First();
        }

        public void addDepartment(department dep)
        {
            db.department.Add(dep);
            db.SaveChanges();
        }
        public void updateDepartment(int id ,department dep)
        {
            department d = db.department.Where(x => x.depId == dep.depId).First();
            d.name = dep.name;
            d.manager = dep.manager;
           
            db.SaveChanges();
        }
        public void deleteDepartment(int id)
        {
            department d = db.department.Where(x => x.depId == id).First();
            db.department.Remove(d);
            db.SaveChanges();
        }
    }
}