using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FactoryFinalProject.Models
{
    public class shiftBLL
    {
        private FactoryFinalProjectDBEntities db = new FactoryFinalProjectDBEntities();

        public List<shiftWithEmp> getAllShifts()
        {
            var result = from s in db.shift
                         join e in db.employee on s.sid equals e.empId
                         select new shiftWithEmp
                         {
                             sid = s.sid,
                             date = s.date,
                             startTime = s.startTime,
                             endTime = s.endTime,
                             fNmae = e.fNmae,
                             lName = e.lName
                         };
            return result.ToList();
        }
        public shiftWithEmp getShift(int id)
        {
            var result = from s in db.shift
                         join e in db.employee on s.sid equals e.empId
                         select new shiftWithEmp
                         {
                             sid = s.sid,
                             date = s.date,
                             startTime = s.startTime,
                             endTime = s.endTime,
                             fNmae = e.fNmae,
                             lName = e.lName
                         };
            return result.Where(x => x.sid == id).First();
        }

        public void addShift(shift s)
        {
            db.shift.Add(s);
            db.SaveChanges();
        }

        public void deleteShift(int id)
        {
            shift s = db.shift.Where(x => x.sid == id).First();
            db.shift.Remove(s);
            db.SaveChanges();
        }
        public void updateShift(int id,shift s)
        {
            shift shift = db.shift.Where(x => x.sid == s.sid).First();
            shift.date = s.date;
            shift.startTime = s.startTime;
            shift.endTime = s.endTime;
            shift.sid = s.sid;
            db.SaveChanges();
        }
    }
}