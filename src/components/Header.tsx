import React, { useState } from 'react';
import { Search, Menu, X, Wallpaper, Monitor, Laptop, Smartphone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    'Nature Wallpapers',
    'Dark Theme',
    'Minimal Desktop',
    'Anime Mobile',
    'Abstract Laptop'
  ].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b border-purple-700/30">
          <div className="flex items-center space-x-3">
            <Wallpaper className="h-8 w-8 text-purple-300" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 text-transparent bg-clip-text">
              Epic Wallpaper
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search wallpapers..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="py-2 px-4 pr-10 rounded-full bg-purple-700/30 focus:bg-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-300 w-64 text-sm transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-purple-300" />
              {showSuggestions && searchQuery && (
                <div className="absolute top-full mt-2 w-full bg-purple-800 rounded-lg shadow-xl py-2 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 hover:bg-purple-700 text-sm text-purple-200"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="bg-gradient-to-r from-purple-400 to-purple-500 px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition shadow-lg">
              Go Premium
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Device Navigation */}
        <nav className="hidden md:flex items-center justify-center py-3 space-x-12">
          <a href="#desktop" className="flex items-center space-x-2 text-purple-200 hover:text-white transition group">
            <Monitor className="h-5 w-5 group-hover:text-purple-300" />
            <span>Desktop</span>
          </a>
          <a href="#laptop" className="flex items-center space-x-2 text-purple-200 hover:text-white transition group">
            <Laptop className="h-5 w-5 group-hover:text-purple-300" />
            <span>Laptop</span>
          </a>
          <a href="#mobile" className="flex items-center space-x-2 text-purple-200 hover:text-white transition group">
            <Smartphone className="h-5 w-5 group-hover:text-purple-300" />
            <span>Mobile</span>
          </a>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search wallpapers..."
                  className="w-full py-2 px-4 pr-10 rounded-full bg-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-purple-300" />
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#desktop" className="flex items-center space-x-2 text-purple-200 hover:text-white transition p-2">
                  <Monitor className="h-5 w-5" />
                  <span>Desktop</span>
                </a>
                <a href="#laptop" className="flex items-center space-x-2 text-purple-200 hover:text-white transition p-2">
                  <Laptop className="h-5 w-5" />
                  <span>Laptop</span>
                </a>
                <a href="#mobile" className="flex items-center space-x-2 text-purple-200 hover:text-white transition p-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Mobile</span>
                </a>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-400 to-purple-500 px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition shadow-lg">
                Go Premium
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}