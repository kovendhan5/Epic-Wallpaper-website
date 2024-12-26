export const validateFileType = (type: string): boolean => {
  const allowedTypes = JSON.parse(import.meta.env.VITE_ALLOWED_FILE_TYPES || '[]');
  return allowedTypes.includes(type);
};

export const validateFileSize = (size: number): boolean => {
  const maxSize = Number(import.meta.env.VITE_MAX_DOWNLOAD_SIZE || 0);
  return size <= maxSize;
};