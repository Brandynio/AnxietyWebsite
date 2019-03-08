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
                var activityEntities = context.Activities.ToList();
                
                    if(activityEntities != null)
                    {
                        foreach(var activity in activityEntities)
                        {
                            activityList.Activities.Add(new ActivityModel()
                            {
                                ActivityId = activity.ActivityId,
                                ActivityName = activity.ActivityName,
                                Rating = activity.Raiting,
                                ScriptUrl = activity.ScriptUrl
                            });
                        }
                    }
            }
               

            return activityList;
        }

        public ActivityModel GetActivityById(int id)
        {
            ActivityModel activity = null;
            using(var context = new SerenityDatabaseEntities())
            {
                var activityEntity = context.Activities.SingleOrDefault(a => a.ActivityId == id);

                activity = new ActivityModel()
                {
                    ActivityId = activityEntity.ActivityId,
                    ActivityName = activityEntity.ActivityName,
                    ScriptUrl = activityEntity.ScriptUrl,
                    Rating = activityEntity.Raiting
                };
            }
            return activity;
        }

        public void UpdateActivity(ActivityModel activity)
        {
            using(var context = new SerenityDatabaseEntities())
            {
                context.Activities.Add(activity);
                context.Entry(activity).State = System.Data.Entity.EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}