import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Epic Wallpaper. All rights reserved.</p>
      </div>
    </footer>
  );
}