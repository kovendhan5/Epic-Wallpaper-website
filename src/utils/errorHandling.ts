export class WallpaperError extends Error {
  constructor(
    message: string,
    public code: string,
    public status: number = 500
  ) {
    super(message);
    this.name = 'WallpaperError';
  }
}

export const handleServiceError = (error: unknown): never => {
  if (error instanceof WallpaperError) {
    throw error;
  }
  
  throw new WallpaperError(
    'An unexpected error occurred',
    'INTERNAL_ERROR',
    500
  );
};