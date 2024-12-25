import { google } from 'googleapis';
import type { Wallpaper } from '../types';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const FOLDER_ID = '1EVyzDDFFu1kL7uU2FHm7YN9yPufHiMPW';

export class DriveService {
  private static instance: DriveService;
  private drive;

  private constructor() {
    this.drive = google.drive({ version: 'v3', auth: this.getAuth() });
  }

  static getInstance() {
    if (!DriveService.instance) {
      DriveService.instance = new DriveService();
    }
    return DriveService.instance;
  }

  private getAuth() {
    // Initialize auth client (you'll need to set up OAuth2 credentials)
    return new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
  }

  async getWallpapers(): Promise<Partial<Wallpaper>[]> {
    try {
      const response = await this.drive.files.list({
        q: `'${FOLDER_ID}' in parents and mimeType contains 'image/'`,
        fields: 'files(id, name, webContentLink, parents)',
      });

      return response.data.files?.map(file => ({
        id: file.id,
        title: file.name?.replace(/\.[^/.]+$/, ''),
        imageUrl: file.webContentLink,
        // We'll need to determine these from the folder structure
        deviceCategory: this.getDeviceCategory(file.parents?.[0]),
        category: this.getCategory(file.parents?.[0]),
      })) || [];
    } catch (error) {
      console.error('Error fetching from Drive:', error);
      return [];
    }
  }

  private getDeviceCategory(parentId: string | undefined): 'mobile' | 'laptop' | 'desktop' {
    // Implementation to determine device category from folder structure
    return 'desktop'; // Default value
  }

  private getCategory(parentId: string | undefined): string {
    // Implementation to determine category from folder structure
    return 'Uncategorized';
  }
}