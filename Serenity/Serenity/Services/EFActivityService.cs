using Serenity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serenity.Services
{
    public class EFActivityService
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
            
            using(var context = new SerenityDatabaseEntities())
            {
                var activityEntity = context.Activities.SingleOrDefault(a => a.ActivityId == id);

                ActivityModel activity = new ActivityModel()
                {
                    ActivityId = activityEntity.ActivityId,
                    ActivityName = activityEntity.ActivityName,
                    ScriptUrl = activityEntity.ScriptUrl,
                    Rating = activityEntity.Raiting
                };
                return activity;
            }
        }

        public void UpdateActivity(ActivityModel activity)
        {
            using(var context = new SerenityDatabaseEntities())
            {
                Activity act = new Activity()
                {
                    ActivityId = activity.ActivityId,
                    ActivityName = activity.ActivityName,
                    ScriptUrl = activity.ScriptUrl,
                    Raiting = activity.Rating
                };
                context.Activities.Add(act);
                context.Entry(GetActivityById(act.ActivityId)).State = System.Data.Entity.EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}