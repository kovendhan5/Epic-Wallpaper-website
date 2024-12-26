import { supabase } from '../supabaseClient';
import { validateFileType, validateFileSize } from '../../utils/validation';
import { WallpaperError, handleServiceError } from '../../utils/errorHandling';

export const storageService = {
  async getSignedUrl(path: string): Promise<string> {
    try {
      const { data, error } = await supabase
        .storage
        .from('wallpapers')
        .createSignedUrl(path, 300);

      if (error) throw error;
      return data.signedUrl;
    } catch (error) {
      handleServiceError(error);
    }
  },

  async validateFile(path: string): Promise<void> {
    try {
      const { data, error } = await supabase
        .storage
        .from('wallpapers')
        .getPublicUrl(path);

      if (error) throw error;

      const response = await fetch(data.publicUrl, { method: 'HEAD' });
      const type = response.headers.get('content-type');
      const size = Number(response.headers.get('content-length'));

      if (!type || !validateFileType(type)) {
        throw new WallpaperError(
          'Invalid file type',
          'INVALID_FILE_TYPE',
          400
        );
      }

      if (!validateFileSize(size)) {
        throw new WallpaperError(
          'File too large',
          'FILE_TOO_LARGE',
          400
        );
      }
    } catch (error) {
      handleServiceError(error);
    }
  }
};