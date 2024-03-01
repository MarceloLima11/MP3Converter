using App.ScheduledTasks;
using Microsoft.Extensions.Hosting;

namespace App.Services
{
    internal class VideoCleanerBackgroundService : BackgroundService
    {
        private readonly VideoCleaner _videoCleaner;
        public VideoCleanerBackgroundService(VideoCleaner videoCleaner)
        { _videoCleaner = videoCleaner; }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _videoCleaner.CleanOldVideos();

                await Task.Delay(TimeSpan.FromHours(24), stoppingToken);
            }
        }
    }
}
