export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      wallpapers: {
        Row: {
          id: string
          title: string
          image_url: string
          device_category: string
          category: string
          is_premium: boolean
          download_count: number
          resolution: string
          featured: boolean
          created_at: string
          storage_path: string
        }
        Insert: {
          id?: string
          title: string
          image_url: string
          device_category: string
          category: string
          is_premium?: boolean
          download_count?: number
          resolution: string
          featured?: boolean
          storage_path: string
        }
        Update: {
          id?: string
          title?: string
          image_url?: string
          device_category?: string
          category?: string
          is_premium?: boolean
          download_count?: number
          resolution?: string
          featured?: boolean
          storage_path?: string
        }
      }
    }
    Functions: {
      increment_download_count: {
        Args: {
          wallpaper_id: string
        }
        Returns: void
      }
    }
  }
}