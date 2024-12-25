import React from 'react';
import { Star, TrendingUp, Shuffle, FolderHeart } from 'lucide-react';

export default function TopCategories() {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
      <div className="grid grid-cols-4 divide-x divide-gray-100">
        <a href="#featured" className="group">
          <div className="p-3 text-center hover:bg-purple-50 transition-all">
            <Star className="h-5 w-5 mx-auto mb-1 text-purple-600" />
            <h3 className="text-sm font-medium text-gray-800">Featured</h3>
          </div>
        </a>
        <a href="#popular" className="group">
          <div className="p-3 text-center hover:bg-purple-50 transition-all">
            <TrendingUp className="h-5 w-5 mx-auto mb-1 text-purple-600" />
            <h3 className="text-sm font-medium text-gray-800">Popular</h3>
          </div>
        </a>
        <a href="#random" className="group">
          <div className="p-3 text-center hover:bg-purple-50 transition-all">
            <Shuffle className="h-5 w-5 mx-auto mb-1 text-purple-600" />
            <h3 className="text-sm font-medium text-gray-800">Random</h3>
          </div>
        </a>
        <a href="#collections" className="group">
          <div className="p-3 text-center hover:bg-purple-50 transition-all">
            <FolderHeart className="h-5 w-5 mx-auto mb-1 text-purple-600" />
            <h3 className="text-sm font-medium text-gray-800">Collections</h3>
          </div>
        </a>
      </div>
    </div>
  );
}