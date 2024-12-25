import React from 'react';
import { Image, Monitor, Smartphone, Star, TrendingUp, Shuffle, FolderHeart } from 'lucide-react';

interface CategoryButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function CategoryButton({ active, children, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all ${
        active
          ? 'bg-purple-600 text-white'
          : 'bg-white text-purple-600 hover:bg-purple-50'
      }`}
    >
      {children}
    </button>
  );
}

export default function CategoryBar() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="container mx-auto py-6">
        <div className="flex flex-col space-y-6">
          {/* Main Categories */}
          <div className="flex space-x-4 pb-4 border-b border-gray-200">
            <CategoryButton active>
              <Star className="w-4 h-4" />
              <span>Featured</span>
            </CategoryButton>
            <CategoryButton>
              <TrendingUp className="w-4 h-4" />
              <span>Popular</span>
            </CategoryButton>
            <CategoryButton>
              <Shuffle className="w-4 h-4" />
              <span>Random</span>
            </CategoryButton>
            <CategoryButton>
              <FolderHeart className="w-4 h-4" />
              <span>Collections</span>
            </CategoryButton>
          </div>

          {/* Device Categories */}
          <div className="flex space-x-4 pb-4 border-b border-gray-200">
            <CategoryButton>
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </CategoryButton>
            <CategoryButton>
              <Image className="w-4 h-4" />
              <span>Laptop</span>
            </CategoryButton>
            <CategoryButton>
              <Smartphone className="w-4 h-4" />
              <span>Mobile</span>
            </CategoryButton>
          </div>

          {/* Content Categories */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {['Nature', 'Anime', 'Waterfalls', 'Abstract', 'Space', 'Animals', 'City', 'Minimal', 'Dark', 'Cars'].map((category) => (
              <CategoryButton key={category}>
                <span>{category}</span>
              </CategoryButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}