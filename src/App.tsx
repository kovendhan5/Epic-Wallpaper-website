import React, { useState, useEffect } from 'react';
import TopBar from './components/navigation/TopBar';
import MainNav from './components/navigation/MainNav';
import TopCategories from './components/TopCategories';
import WallpaperGrid from './components/WallpaperGrid';
import PremiumBanner from './components/PremiumBanner';
import FeaturedWallpaper from './components/FeaturedWallpaper';
import Footer from './components/Footer';
import AuthModal from './components/auth/AuthModal';
import { wallpapers as initialWallpapers } from './data/wallpapers';

export default function App() {
  const [wallpapers] = useState(initialWallpapers);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const featuredWallpaper = wallpapers.find(w => w.featured);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <TopBar 
        onAuthClick={() => setIsAuthModalOpen(true)} 
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />
      <MainNav />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <TopCategories />
          {featuredWallpaper && <FeaturedWallpaper wallpaper={featuredWallpaper} />}
          <div className="mt-6">
            <WallpaperGrid wallpapers={wallpapers} />
          </div>
        </div>
        <PremiumBanner />
      </main>
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}