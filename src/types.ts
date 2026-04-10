export interface ExifData {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Breaking News' | 'Documentary' | 'eSports' | 'Photo Essay';
  context: string;
  exifData: ExifData;
  date: string;
  location: string;
  coverImage: string;
  images: string[];
}
