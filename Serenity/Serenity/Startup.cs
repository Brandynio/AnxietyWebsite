using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Serenity.Startup))]
namespace Serenity
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
