import React from 'react';
import { Wallpaper, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-200 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Wallpaper className="h-6 w-6" />
            <span className="text-xl font-bold">Epic Wallpaper</span>
          </div>
          <p className="text-sm text-center">
            Made with <Heart className="h-4 w-4 inline-block text-red-400" /> for wallpaper enthusiasts
          </p>
          <div className="text-sm text-purple-400">
            © {new Date().getFullYear()} Epic Wallpaper. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}