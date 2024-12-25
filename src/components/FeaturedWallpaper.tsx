import React from 'react';
import { Download, Lock } from 'lucide-react';
import type { Wallpaper } from '../types';

interface FeaturedWallpaperProps {
  wallpaper: Wallpaper;
}

export default function FeaturedWallpaper({ wallpaper }: FeaturedWallpaperProps) {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden">
      <img
        src={wallpaper.imageUrl}
        alt={wallpaper.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">{wallpaper.title}</h2>
            <div className="flex items-center space-x-4 text-white mb-6">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {wallpaper.category}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {wallpaper.resolution}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {wallpaper.downloadCount.toLocaleString()} downloads
              </span>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition flex items-center space-x-2">
              {wallpaper.isPremium ? (
                <>
                  <Lock className="h-5 w-5" />
                  <span>Premium Download</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}