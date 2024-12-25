import React from 'react';
import { Monitor, Laptop, Smartphone, Layout } from 'lucide-react';

const categories = [
  'Nature', 'Anime', 'Waterfalls', 'Abstract', 'Space',
  'Animals', 'City', 'Minimal', 'Dark', 'Cars'
];

export default function MainNav() {
  return (
    <nav className="bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <a href="#desktop" className="flex items-center space-x-2 text-purple-200 hover:text-white transition">
              <Monitor className="h-5 w-5" />
              <span>Desktop</span>
            </a>
            <a href="#laptop" className="flex items-center space-x-2 text-purple-200 hover:text-white transition">
              <Laptop className="h-5 w-5" />
              <span>Laptop</span>
            </a>
            <a href="#mobile" className="flex items-center space-x-2 text-purple-200 hover:text-white transition">
              <Smartphone className="h-5 w-5" />
              <span>Mobile</span>
            </a>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-purple-200 hover:text-white transition">
              <Layout className="h-5 w-5" />
              <span>Categories</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}