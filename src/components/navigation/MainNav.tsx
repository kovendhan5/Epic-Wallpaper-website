import React, { useState } from 'react';
import { Monitor, Laptop, Smartphone, Layout, Search } from 'lucide-react';

const categories = [
  'Nature', 'Anime', 'Waterfalls', 'Abstract', 'Space',
  'Animals', 'City', 'Minimal', 'Dark', 'Cars'
];

export default function MainNav() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = categories.filter(c => 
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3 gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <a href="#desktop" className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105">
              <Monitor className="h-5 w-5" />
              <span className="text-sm font-medium">Desktop</span>
            </a>
            <a href="#laptop" className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105">
              <Laptop className="h-5 w-5" />
              <span className="text-sm font-medium">Laptop</span>
            </a>
            <a href="#mobile" className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105">
              <Smartphone className="h-5 w-5" />
              <span className="text-sm font-medium">Mobile</span>
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105">
                <Layout className="h-5 w-5" />
                <span className="text-sm font-medium">Categories</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-xl py-2 hidden group-hover:block z-50 transition-all duration-300">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search wallpapers..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="w-full py-2 px-4 pr-10 rounded-full bg-white/10 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition-all placeholder-white/70"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/70" />
            {showSuggestions && searchQuery && suggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-xl py-2 z-50">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}