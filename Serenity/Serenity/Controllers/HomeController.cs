using Serenity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Serenity.Controllers
{
    public class HomeController : Controller
    {
        ActivityListModel activities = new ActivityListModel()
        {
            Activities = new List<ActivityModel>()
            {
                new ActivityModel()
                {
                    ActivityName = "Bubble Popping",
                    ActivityId = 0,
                    Rating = 0,
                    ScriptUrl = "~/Scripts/bubbles.js"
                },
                new ActivityModel()
                {
                    ActivityName = "Five Things Grounding",
                    ActivityId = 1,
                    Rating = 0,
                    ScriptUrl = "~/Scripts/fiveThings.js"
                },
                new ActivityModel()
                {
                    ActivityName = "Question Your Thoughts",
                    ActivityId = 2,
                    Rating = 0,
                    ScriptUrl = "~/Scripts/fiveThings.js"
                },
                new ActivityModel()
                {
                    ActivityName = "Name Animals",
                    ActivityId = 3,
                    Rating = 0,
                    ScriptUrl = "~/Scripts/fiveThings.js"
                },
                new ActivityModel() {
                    ActivityId = 4,
                    ActivityName = "Belly Breathing",
                    Rating = 0,
                    ScriptUrl = "~/Scripts/Script_Belly.js"
                },
                new ActivityModel()
                {
                    ActivityId = 5,
                    ActivityName = "Personal Activity",
                    Rating = 0,
                    ScriptUrl = "~/Scripts/script_personal.js"
                }
            }
        };

        public ActionResult Index()
        {
            return View();
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
            return View(activities);
        }
        
        public ActionResult Activity(int id)
        {
            
            foreach(ActivityModel a in activities.Activities)
            {
                if (a.ActivityId == id)
                {
                    ActivityModel act = a;
                    return View(act);
                }
            }
            return View("Activities");
        }
    }
}