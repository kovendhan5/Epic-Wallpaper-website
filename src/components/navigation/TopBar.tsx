import React from 'react';
import { Wallpaper } from 'lucide-react';

interface TopBarProps {
  onAuthClick: () => void;
}

export default function TopBar({ onAuthClick }: TopBarProps) {
  return (
    <div className="bg-white shadow-sm py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Wallpaper className="h-6 w-6 text-purple-600" />
          <h1 className="text-xl font-bold text-gray-800">Epic Wallpaper</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onAuthClick}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Sign In
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition shadow-sm">
            Go Premium
          </button>
        </div>
      </div>
    </div>
  );
}