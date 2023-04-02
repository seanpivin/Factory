using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class EmployeeShiftBLL
    {
        private FactoryFinalProjectDBEntities db = new FactoryFinalProjectDBEntities();
        public List<employeeWithShift> getEmployeeShifts()
        {

            List<employeeWithShift> empShifts = new List<employeeWithShift>();

            foreach (employee emp in db.employee)
            {
                employeeWithShift empShift = new employeeWithShift();
                empShift.empId = emp.empId;
                empShift.fNmae = emp.fNmae;
                empShift.lName = emp.lName;
                empShift.startWorkYear = emp.startWorkYear;
                empShift.departmentId = emp.departmentId;

                empShift.empShifts = new List<shift>();

                var shifts = db.shift.Where(x => x.sid == emp.empId);



                foreach (var s in shifts)
                {
                    empShift.empShifts.Add(s);
                }

                empShifts.Add(empShift);
            }
            return empShifts;
        }

        public employee getEmployee(int id)
        {
           return db.employee.Where(x => x.empId == id).First();

        }
        public void addEmployee(employee e)
        {
            db.employee.Add(e);
            db.SaveChanges();
        }
        public void deleteEmployee(int id)
        {
            employee e = db.employee.Where(x => x.empId == id).First();
            db.employee.Remove(e);
            db.SaveChanges();
        }
        public void updateEmployee(int id, employee e)
        {
            employee emp = db.employee.Where(x => x.empId == id).First();
            emp.fNmae = e.fNmae;
            emp.lName = e.lName;
            emp.startWorkYear = e.startWorkYear;
            emp.departmentId = e.departmentId;
            db.SaveChanges();
        }

    }
}