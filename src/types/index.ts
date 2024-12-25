export interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  deviceCategory: 'mobile' | 'laptop' | 'desktop';
  category: string;
  isPremium: boolean;
  downloadCount: number;
  resolution: string;
  featured?: boolean;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}