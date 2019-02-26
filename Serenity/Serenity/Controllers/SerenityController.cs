using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Serenity.Controllers
{
    public class SerenityController : Controller
    {
        // GET: Serenity
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult NameAnimalsAlphabetically()
		{
			return View();
		}

		public ActionResult QuestionYourThoughts()
		{
			return View();
		}

	}
}