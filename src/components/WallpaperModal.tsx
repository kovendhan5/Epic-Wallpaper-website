import React, { useState } from 'react';
import { Download, X, Heart, Expand } from 'lucide-react';
import type { Wallpaper } from '../types';
import FullScreenView from './FullScreenView';

interface WallpaperModalProps {
  wallpaper: Wallpaper;
  onClose: () => void;
}

export default function WallpaperModal({ wallpaper, onClose }: WallpaperModalProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = wallpaper.imageUrl;
    link.download = `${wallpaper.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isFullScreen) {
    return <FullScreenView wallpaper={wallpaper} onClose={() => setIsFullScreen(false)} />;
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh]">
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button
            onClick={() => setIsFullScreen(true)}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all"
          >
            <Expand className="h-5 w-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 relative">
            <img
              src={wallpaper.imageUrl}
              alt={wallpaper.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-80 p-6 flex flex-col dark:text-white">
            <h2 className="text-2xl font-bold mb-4">{wallpaper.title}</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Resolution</span>
                <span className="text-sm font-medium">{wallpaper.resolution}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Category</span>
                <span className="text-sm font-medium">{wallpaper.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Downloads</span>
                <span className="text-sm font-medium">{wallpaper.downloadCount.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-2 rounded-lg hover:shadow-lg transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
              <button className="p-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <Heart className="h-5 w-5 text-accent-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}