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
  category: 'Breaking News' | 'Documentary' | 'eSports' | 'Photo Essay' | 'Event & Action';
  context: string;
  exifData: ExifData;
  date: string;
  location: string;
  coverImage: string;
  images: string[];
  role?: string;      // หน้าที่ในงานนั้น เช่น Lead Videographer, Photojournalist
  videoUrl?: string;  // ลิงก์ YouTube/Vimeo สำหรับงานวิดีโอ
  gear?: string;      // อุปกรณ์ที่ใช้ (HR/บก.ภาพ ชอบดู)
}

export interface PhotographerInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl?: string; // ลิงก์สำหรับให้ดาวน์โหลด Resume PDF
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string; // ช่องทางสำหรับสายวิดีโอ
  };
}
