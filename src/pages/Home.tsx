import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <header className="mb-16 border-b border-neutral-800 pb-12">
        <h1 className="text-6xl md:text-8xl font-display font-black mb-4 uppercase text-white tracking-tighter">
          The <span className="text-newsroom-crimson">Frontline</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-sans tracking-tight max-w-3xl">
          Unfiltered perspectives from the world's most critical moments. Photojournalism, documentary, and pure reality.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
