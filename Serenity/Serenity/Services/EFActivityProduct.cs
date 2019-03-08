using Serenity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serenity.Services
{
    public class EFActivityProduct
    {
        public ActivityListModel GetAllActivities()
        {
            List<ActivityModel> activities = new List<ActivityModel>();
            ActivityListModel activityList = new ActivityListModel(activities);

            using(var context = new SerenityDatabaseEntities())
            {
                
            }
        }
    }
}