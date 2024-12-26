import { supabase } from '../supabaseClient';
import { storageService } from '../storage/storageService';
import type { Wallpaper } from '../../types';
import type { WallpaperDownload, WallpaperStats } from './types';
import { handleServiceError } from '../../utils/errorHandling';

export const wallpaperService = {
  async getWallpapers(): Promise<Wallpaper[]> {
    try {
      const { data, error } = await supabase
        .from('wallpapers')
        .select('*')
        .order('downloadCount', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      handleServiceError(error);
    }
  },

  async getWallpaperStats(): Promise<WallpaperStats> {
    try {
      const { data, error } = await supabase
        .from('wallpapers')
        .select('category, download_count');

      if (error) throw error;

      const totalDownloads = data.reduce((sum, w) => sum + w.download_count, 0);
      const categoryCount = data.reduce((acc, w) => {
        acc[w.category] = (acc[w.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const popularCategories = Object.entries(categoryCount)
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      return { totalDownloads, popularCategories };
    } catch (error) {
      handleServiceError(error);
    }
  },

  async downloadWallpaper(wallpaperId: string): Promise<WallpaperDownload> {
    try {
      const { data: wallpaper, error } = await supabase
        .from('wallpapers')
        .select('storage_path')
        .eq('id', wallpaperId)
        .single();

      if (error) throw error;

      await storageService.validateFile(wallpaper.storage_path);
      const url = await storageService.getSignedUrl(wallpaper.storage_path);
      
      await this.incrementDownloadCount(wallpaperId);

      return {
        url,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
      };
    } catch (error) {
      handleServiceError(error);
    }
  },

  private async incrementDownloadCount(wallpaperId: string): Promise<void> {
    try {
      const { error } = await supabase.rpc('increment_download_count', {
        wallpaper_id: wallpaperId
      });

      if (error) throw error;
    } catch (error) {
      handleServiceError(error);
    }
  }
};