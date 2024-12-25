import React from 'react';
import { Crown, Check } from 'lucide-react';

export default function PremiumBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Crown className="h-12 w-12 text-yellow-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Upgrade to Premium - <span className="text-yellow-400">90% OFF!</span>
        </h2>
        <p className="text-xl mb-6">
          Only ₹10 / <span className="line-through opacity-75">₹100</span>{' '}
          <span className="text-sm">($0.12 USD)</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-green-400" />
            <span>Access All Premium Wallpapers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-green-400" />
            <span>Ad-free Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-green-400" />
            <span>Priority Downloads</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition shadow-lg">
          Get Premium Now
        </button>
      </div>
    </div>
  );
}