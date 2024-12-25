import React from 'react';
import { Download, Lock } from 'lucide-react';
import type { Wallpaper } from '../types';

interface WallpaperGridProps {
  wallpapers: Wallpaper[];
}

export default function WallpaperGrid({ wallpapers }: WallpaperGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {wallpapers.map((wallpaper) => (
        <div key={wallpaper.id} className="group relative rounded-lg overflow-hidden shadow-sm bg-white">
          <img
            src={wallpaper.imageUrl}
            alt={wallpaper.title}
            className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-sm font-medium text-white line-clamp-1">{wallpaper.title}</h3>
              <p className="text-xs text-gray-300">{wallpaper.resolution}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-300">{wallpaper.downloadCount.toLocaleString()}</span>
                <button
                  className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                    wallpaper.isPremium
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      : 'bg-blue-500'
                  }`}
                >
                  {wallpaper.isPremium ? (
                    <>
                      <Lock className="h-3 w-3" />
                      <span>Premium</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-3 w-3" />
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}