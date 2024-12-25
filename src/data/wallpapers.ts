import { Wallpaper } from '../types';

export const wallpapers: Wallpaper[] = [
  {
    id: '1',
    title: 'Misty Mountain Peaks',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    deviceCategory: 'desktop',
    category: 'Nature',
    isPremium: true,
    downloadCount: 1234,
    resolution: '3840 x 2160',
    featured: true
  },
  {
    id: '2',
    title: 'Serene Ocean Waves',
    imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e',
    deviceCategory: 'mobile',
    category: 'Nature',
    isPremium: false,
    downloadCount: 856,
    resolution: '1080 x 2400',
    isPopular: true
  },
  {
    id: '3',
    title: 'City Lights',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    deviceCategory: 'laptop',
    category: 'City',
    isPremium: true,
    downloadCount: 2345,
    resolution: '2560 x 1440',
    featured: true
  },
  // Add more wallpapers for each device category
  {
    id: '4',
    title: 'Anime Street Scene',
    imageUrl: 'https://images.unsplash.com/photo-1553949345-eb786bb3f7ba',
    deviceCategory: 'mobile',
    category: 'Anime',
    isPremium: true,
    downloadCount: 1567,
    resolution: '1080 x 2400'
  },
  {
    id: '5',
    title: 'Minimal Workspace',
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705',
    deviceCategory: 'desktop',
    category: 'Minimal',
    isPremium: false,
    downloadCount: 3421,
    resolution: '3840 x 2160'
  },
  {
    id: '6',
    title: 'Abstract Art',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
    deviceCategory: 'laptop',
    category: 'Abstract',
    isPremium: true,
    downloadCount: 892,
    resolution: '2560 x 1440'
  },
  {
    id: '7',
    title: 'Mountain Lake',
    imageUrl: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0',
    deviceCategory: 'desktop',
    category: 'Nature',
    isPremium: false,
    downloadCount: 2789,
    resolution: '3840 x 2160'
  },
  {
    id: '8',
    title: 'Night City',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    deviceCategory: 'mobile',
    category: 'City',
    isPremium: true,
    downloadCount: 1432,
    resolution: '1080 x 2400'
  }
];