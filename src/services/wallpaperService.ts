import { supabase } from './supabaseClient';
import type { Wallpaper } from '../types';

export const wallpaperService = {
  async getWallpapers(): Promise<Wallpaper[]> {
    const { data, error } = await supabase
      .from('wallpapers')
      .select('*')
      .order('downloadCount', { ascending: false });

    if (error) {
      console.error('Error fetching wallpapers:', error);
      throw error;
    }

    return data || [];
  },

  async incrementDownloadCount(wallpaperId: string) {
    const { error } = await supabase.rpc('increment_download_count', {
      wallpaper_id: wallpaperId
    });

    if (error) {
      console.error('Error incrementing download count:', error);
      throw error;
    }
  },

  async downloadWallpaper(wallpaperId: string): Promise<string> {
    const { data, error } = await supabase
      .storage
      .from('wallpapers')
      .createSignedUrl(`wallpapers/${wallpaperId}`, 300); // 5 minutes expiry

    if (error) {
      console.error('Error generating download URL:', error);
      throw error;
    }

    await this.incrementDownloadCount(wallpaperId);
    return data.signedUrl;
  }
};