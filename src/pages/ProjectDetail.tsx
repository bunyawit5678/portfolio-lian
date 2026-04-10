import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PROJECTS } from '../constants';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) return <div className="p-20 text-center text-white">Story not found.</div>;

  const paginate = (newDirection: number) => {
    if (lightboxIndex === null) return;
    let nextIndex = lightboxIndex + newDirection;
    if (nextIndex < 0) nextIndex = project.images.length - 1;
    if (nextIndex >= project.images.length) nextIndex = 0;
    setLightboxIndex(nextIndex);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <Link to="/" className="inline-flex items-center text-newsroom-crimson hover:text-white transition-colors mb-10 uppercase tracking-widest font-bold text-sm">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Feed
      </Link>

      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-display font-black leading-tight uppercase tracking-tighter text-white mb-6">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
          <span className="bg-newsroom-crimson text-white px-3 py-1 shadow-sm">{project.category}</span>
          <span>{project.date}</span>
          <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
          <span>{project.location}</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-serif text-neutral-300 leading-relaxed mb-6">
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-200 border-l-4 border-newsroom-crimson pl-6 py-2">
            {project.context}
          </p>
        </div>
        
        {/* EXIF Data Bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-6 py-4 bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-10 w-full md:max-w-max rounded-sm">
          <span className="flex items-center"><span className="text-neutral-600 mr-2">Cam</span> <span className="text-white font-bold">{project.exifData.camera}</span></span>
          <span className="flex items-center"><span className="text-neutral-600 mr-2">Lens</span> <span className="text-white font-bold">{project.exifData.lens}</span></span>
          <span className="flex items-center"><span className="text-neutral-600 mr-2">Aperture</span> <span className="text-white font-bold">{project.exifData.aperture}</span></span>
          <span className="flex items-center"><span className="text-neutral-600 mr-2">Shutter</span> <span className="text-white font-bold">{project.exifData.shutterSpeed}</span></span>
          <span className="flex items-center"><span className="text-neutral-600 mr-2">ISO</span> <span className="text-white font-bold">{project.exifData.iso}</span></span>
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {project.images.map((img, i) => (
          <div 
            key={i} 
            className="break-inside-avoid cursor-zoom-in group overflow-hidden relative border border-neutral-800 rounded-sm"
            onClick={() => setLightboxIndex(i)}
          >
            <img 
              src={img} 
              alt={`${project.title} - ${i + 1}`} 
              loading="lazy" 
              decoding="async" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-110"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-newsroom-dark/95 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)} // Close when clicking background
          >
            <button 
              className="absolute top-6 right-6 text-neutral-400 hover:text-white z-[110] transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            >
              <X className="w-10 h-10" />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white z-[110] hidden md:block"
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white z-[110] hidden md:block"
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.img
              key={lightboxIndex}
              src={project.images[lightboxIndex]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="max-h-[90vh] max-w-[90vw] object-contain cursor-grab active:cursor-grabbing z-[105]"
              alt="Lightbox Fullscreen"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 font-mono text-sm tracking-widest z-[110]">
              {lightboxIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
