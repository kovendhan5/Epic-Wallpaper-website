export interface WallpaperDownload {
  url: string;
  expiresAt: Date;
}

export interface WallpaperStats {
  totalDownloads: number;
  popularCategories: Array<{
    category: string;
    count: number;
  }>;
}