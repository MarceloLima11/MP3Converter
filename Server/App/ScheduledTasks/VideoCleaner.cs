﻿using Common;
using System.Diagnostics;

namespace App.ScheduledTasks
{
    internal class VideoCleaner 
    {
        public VideoCleaner()
        { }

        internal void CleanOldVideos()
        {
            try
            {
                var files = Directory.GetFiles(Consts.SAVE_FILES_PATH);

                foreach (var filePath in files)
                {
                    var fileInfo = new FileInfo(filePath);

                    if (DateTime.Now - fileInfo.CreationTime > TimeSpan.FromHours(1))
                        File.Delete(filePath);
                }
            }
            catch 
            { throw; }
        }
    }
}