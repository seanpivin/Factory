using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class departmentWithEmpBLL
    {
        private FactoryFinalProjectDBEntities db = new FactoryFinalProjectDBEntities();

        public List<departmentWithEmployee> getDepartmentWithEmployee()
        {
            var query = from d in db.department
                        join e in db.employee on d.depId equals e.empId
                        select new departmentWithEmployee
                        {
                            depId = d.depId,
                            name = d.name,
                            manager = d.manager,
                            departmentId = e.departmentId
                        };
            return query.ToList();
        }
        public departmentWithEmployee getDepartmentWithEmployeeById(int id)
        {
            var query = from d in db.department
                        join e in db.employee on d.depId equals e.empId
                        select new departmentWithEmployee
                        {
                            depId = d.depId,
                            name = d.name,
                            manager = d.manager,
                            departmentId = e.departmentId
                        };

            return query.Where(x => x.depId == id).First();
        }
        public void addDepartmentWithEmployee(department dep)
        {
            db.department.Add(dep);
            db.SaveChanges();
        }
        public void updateDepartmentWithEmployee(int id, department dep)
        {
            department d = db.department.Where(x => x.depId == dep.depId).First();
            d.name = dep.name;
            d.manager = dep.manager;

            db.SaveChanges();
        }
        public void deleteDepartmentWithEmployee(int id)
        {
            department d = db.department.Where(x => x.depId == id).First();
            db.department.Remove(d);
            db.SaveChanges();
        }
    }
}