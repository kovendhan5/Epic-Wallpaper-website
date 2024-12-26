/*
  # Wallpapers Schema Setup

  1. New Tables
    - `wallpapers`
      - `id` (uuid, primary key)
      - `title` (text)
      - `image_url` (text)
      - `device_category` (text)
      - `category` (text)
      - `is_premium` (boolean)
      - `download_count` (integer)
      - `resolution` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)
      - `storage_path` (text)
  
  2. Security
    - Enable RLS
    - Add policies for public read access
    - Add policies for admin write access
*/

CREATE TABLE wallpapers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  device_category text NOT NULL,
  category text NOT NULL,
  is_premium boolean DEFAULT false,
  download_count integer DEFAULT 0,
  resolution text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  storage_path text NOT NULL
);

ALTER TABLE wallpapers ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public can view wallpapers"
  ON wallpapers
  FOR SELECT
  TO public
  USING (true);

-- Function to increment download count
CREATE OR REPLACE FUNCTION increment_download_count(wallpaper_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE wallpapers
  SET download_count = download_count + 1
  WHERE id = wallpaper_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;