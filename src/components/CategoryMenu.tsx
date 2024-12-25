import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layout } from 'lucide-react';

const categories = [
  'Nature', 'Anime', 'Waterfalls', 'Abstract', 'Space',
  'Animals', 'City', 'Minimal', 'Dark', 'Cars', 'Landscapes',
  'Technology', 'Art', 'Fantasy', 'Architecture'
];

export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <Layout className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">Categories</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 w-full md:w-64 bg-white rounded-lg shadow-lg py-2 grid grid-cols-2 gap-1">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}