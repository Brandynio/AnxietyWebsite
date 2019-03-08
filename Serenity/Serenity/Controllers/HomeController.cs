using Serenity.Models;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Serenity.Controllers
{
    public class HomeController : Controller
    {
        EFActivityService service = new EFActivityService();

        public ActionResult Index()
        {
            return View(service.GetAllActivities());
        }

        public ActionResult About()
        {
            ViewBag.Message = "";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";

            return View();
        }

        public ActionResult Activities()
        {
            return View(service.GetAllActivities());
        }
        
        public ActionResult Activity(int id)
        {
            ActivityModel act = service.GetActivityById(id);
            return View(act);
        }

        public ActionResult RateActivity(int id)
        {
            foreach (ActivityModel a in service.GetAllActivities().Activities)
            {
                if (a.ActivityId == id)
                {
                    ActivityModel act = a;
                    return View(act);
                }
            }
            return View("Activities");
        }

        [HttpPost]
        public ActionResult RateActivity(ActivityModel activity)
        {
            if (ModelState.IsValid)
            {
                ActivityModel act = activity;
                act.Rating = (act.Rating + act.newRating) / 2;
                service.UpdateActivity(act);
            }
            return View("Index");
        }
    }
}