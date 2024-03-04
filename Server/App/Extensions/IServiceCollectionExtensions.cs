using App.Services;
using App.ScheduledTasks;
using Microsoft.Extensions.DependencyInjection;
using App.Handlers;

namespace App.Extensions
{
    public static class IServiceCollectionExtensions
    {
        public static void AddAppLayer(this IServiceCollection services)
        { 
            services.AddScheduled();
            services.AddHandlers();
        }

        private static void AddScheduled(this IServiceCollection services)
        {
            services.AddTransient<VideoCleaner>();
            services.AddHostedService<VideoCleanerBackgroundService>();
        }

        private static void AddHandlers(this IServiceCollection services) 
            => services.AddTransient<VideoHandler>();
    }
}
