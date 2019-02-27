using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Activities.Models
{
	public class ActivityModel
	{
		public string ScriptUrl { get; set; }
		public String ActivityName { get; set; }
		public int ActivityId { get; set; }
		public int Raiting { get; set; }
	}
}