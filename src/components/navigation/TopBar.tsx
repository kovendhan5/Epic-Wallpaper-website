import React from 'react';
import { Wallpaper, UserCircle2, Sun, Moon } from 'lucide-react';

interface TopBarProps {
  onAuthClick: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function TopBar({ onAuthClick, isDarkMode, onThemeToggle }: TopBarProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg animate-gradient">
            <Wallpaper className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text">
            Epic Wallpaper
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500 animate-float" />
            ) : (
              <Moon className="h-5 w-5 text-primary-600 animate-float" />
            )}
          </button>
          <button
            onClick={onAuthClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg transition-all duration-300"
          >
            <UserCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
}