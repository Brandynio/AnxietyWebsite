using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serenity.Models
{
    public class ActivityListModel
    {
        public List<ActivityModel> Activities { get; set; }

        public ActivityListModel(List<ActivityModel> activities)
        {
            Activities = activities;
        }
    }
}