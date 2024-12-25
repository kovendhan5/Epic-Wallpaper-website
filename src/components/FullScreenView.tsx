import React from 'react';
import { X, Download, Heart, Share2 } from 'lucide-react';
import type { Wallpaper } from '../types';

interface FullScreenViewProps {
  wallpaper: Wallpaper;
  onClose: () => void;
}

export default function FullScreenView({ wallpaper, onClose }: FullScreenViewProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = wallpaper.imageUrl;
    link.download = `${wallpaper.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
        <button
          onClick={handleDownload}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          title="Download"
        >
          <Download className="h-6 w-6" />
        </button>
        <button
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          title="Like"
        >
          <Heart className="h-6 w-6" />
        </button>
        <button
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          title="Share"
        >
          <Share2 className="h-6 w-6" />
        </button>
        <button
          onClick={onClose}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          title="Close"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <img
          src={wallpaper.imageUrl}
          alt={wallpaper.title}
          className="max-h-screen max-w-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{wallpaper.title}</h2>
        <div className="flex items-center space-x-4 text-white/80">
          <span>{wallpaper.resolution}</span>
          <span>•</span>
          <span>{wallpaper.category}</span>
          <span>•</span>
          <span>{wallpaper.downloadCount.toLocaleString()} downloads</span>
        </div>
      </div>
    </div>
  );
}