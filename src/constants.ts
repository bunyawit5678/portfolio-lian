import { Project, PhotographerInfo } from './types';

export const PHOTOGRAPHER: PhotographerInfo = {
  name: "Bunyawit",                           // เปลี่ยนเป็นชื่อจริงของคุณ
  role: "Hybrid Photojournalist & Videographer",
  bio: "ช่างภาพและนักทำวิดีโอสาย Documentary และ eSports ถ่ายทอดเรื่องราวผ่านเลนส์ด้วยความรวดเร็วและแม่นยำ พร้อมทักษะการประสานงานระดับโปรเจกต์",
  location: "Bangkok, Thailand",
  email: "hello@bunyawit.com",               // เปลี่ยนเป็นอีเมลคุณ
  resumeUrl: "/resume-bunyawit.pdf",          // เตรียมไฟล์ PDF ไว้ในโฟลเดอร์ public
  socials: {
    instagram: "@your_ig",
    linkedin: "your-linkedin-id",
    youtube: "@your_channel"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "wan-ploy-sua",
    title: "เทศกาลวันปล่อยเสือ",
    category: "Event & Action",
    context: "Who: วัยรุ่นและนักดนตรี. What: บันทึกบรรยากาศและพลังงานของเทศกาลดนตรี. Where: Bangkok, Thailand. When: 2024. Why: จับจังหวะ Decisive Moment ท่ามกลางแสงสีและฝูงชน",
    role: "Lead Photographer",
    location: "Bangkok, Thailand",
    gear: "Sony A7IV | 24-70mm f/2.8 GM",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // ใส่ลิงก์วิดีโอถ้ามี
    date: "2024",
    exifData: {
      camera: "Sony A7 IV",
      lens: "24-70mm f/2.8 GM",
      aperture: "f/2.8",
      shutterSpeed: "1/500s",
      iso: "3200"
    },
    coverImage: "https://images.unsplash.com/photo-1540039155732-d68a183b3c3b?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540039155732-d68a183b3c3b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "pak-nam-pho",
    title: "ตรุษจีนปากน้ำโพ",
    category: "Documentary",
    context: "Who: ชาวไทยเชื้อสายจีนในนครสวรรค์. What: สารคดีภาพถ่ายทอดวัฒนธรรมงานแห่มังกร. Where: Nakhon Sawan, Thailand. When: 2023. Why: บันทึกความเชื่อ ศิลปะ และความศรัทธาที่สืบทอดมายาวนาน",
    role: "Photojournalist",
    location: "Nakhon Sawan, Thailand",
    gear: "Sony A7III | 35mm f/1.4",
    date: "2023",
    exifData: {
      camera: "Sony A7 III",
      lens: "35mm f/1.4",
      aperture: "f/1.4",
      shutterSpeed: "1/250s",
      iso: "1600"
    },
    coverImage: "https://images.unsplash.com/photo-1542125555-d147d3c5fdf6?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542125555-d147d3c5fdf6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551392505-f4056032826e?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "esports-grand-final",
    title: "VCT Pacific Grand Final",
    category: "eSports",
    context: "Who: ทีมแข่ง eSports ระดับภูมิภาค. What: จับภาพอารมณ์ความกดดัน ความผิดหวัง และชัยชนะ. Where: Seoul, South Korea. When: 2024. Why: บันทึกประวัติศาสตร์ของ eSports เอเชีย",
    role: "Stage Videographer",
    location: "Seoul, South Korea",
    gear: "FX3 | 70-200mm f/2.8 GM II",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    date: "2024",
    exifData: {
      camera: "Sony FX3",
      lens: "70-200mm f/2.8 GM II",
      aperture: "f/2.8",
      shutterSpeed: "1/800s",
      iso: "6400"
    },
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "ukraine-crisis",
    title: "Frontlines of Kyiv",
    category: "Breaking News",
    context: "Who: Local residents & military. What: Documenting the immediate aftermath of urban conflict. Where: Kyiv, Ukraine. When: February 2022. Why: To capture the resilience and reality of the frontline.",
    role: "Photojournalist",
    location: "Kyiv, Ukraine",
    gear: "Leica SL2 | 35mm Summilux",
    date: "Feb 24, 2022",
    exifData: {
      camera: "Leica SL2",
      lens: "35mm Summilux",
      aperture: "f/1.4",
      shutterSpeed: "1/1000s",
      iso: "400"
    },
    coverImage: "https://images.unsplash.com/photo-1646247345635-c343f721ea7f?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1646247345635-c343f721ea7f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1646633658245-c7e44aeca7c2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1647416410313-2d12e84ece5c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1541416409890-a3528b7891bb?auto=format&fit=crop&q=80&w=1200",
    ]
  },
  {
    id: "amazon-documentary",
    title: "Life on the River",
    category: "Documentary",
    context: "Who: Indigenous communities. What: Documenting the daily life and ecological changes. Where: The Amazon Basin, Brazil. When: August 2023. Why: To raise awareness of deforestation impacts on local life.",
    role: "Documentary Photographer",
    location: "Amazonas, Brazil",
    gear: "Canon EOS R5 | RF 24-70mm f/2.8",
    date: "Aug 12, 2023",
    exifData: {
      camera: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8",
      aperture: "f/4.0",
      shutterSpeed: "1/400s",
      iso: "800"
    },
    coverImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1440508053641-6972418b7f8c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1501651817551-76cd970d4fcb?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1518182170546-076616fd61fd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1545624734-7546e8c71ccf?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "urban-solitude",
    title: "Neon Echoes",
    category: "Photo Essay",
    context: "Who: Night shift workers and wanderers. What: A visual exploration of solitude in neon-lit metropolitan streets. Where: Tokyo, Japan. When: October 2022. Why: Exploring isolation inherent in massive populations.",
    role: "Photographer",
    location: "Tokyo, Japan",
    gear: "Fujifilm GFX 100S | GF 63mm f/2.8",
    date: "Oct 5, 2022",
    exifData: {
      camera: "Fujifilm GFX 100S",
      lens: "GF 63mm f/2.8",
      aperture: "f/2.8",
      shutterSpeed: "1/125s",
      iso: "1600"
    },
    coverImage: "https://images.unsplash.com/photo-1493606371202-6275828f90f3?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1493606371202-6275828f90f3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542051812871-705d1bb9c07e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1472304193557-4b7261a8efdc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1574341951918-62dbb5059bb2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];
