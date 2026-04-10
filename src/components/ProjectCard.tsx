import { Link } from 'react-router-dom';
import { Project } from '../types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/project/${project.id}`} className="block group relative overflow-hidden bg-neutral-900 border border-neutral-800">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-500 brightness-75 group-hover:brightness-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-newsroom-dark/95 via-newsroom-dark/20 to-transparent pointer-events-none" />
        
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-newsroom-crimson text-white text-xs font-bold uppercase tracking-widest shadow-lg">
            {project.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-col gap-1 text-white">
            <h3 className="text-3xl md:text-4xl font-display font-black leading-tight uppercase tracking-tighter">{project.title}</h3>
            
            <div className="font-sans text-sm tracking-widest uppercase font-bold text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 flex items-center space-x-2 mt-2">
              <span>{project.date}</span>
              <span className="w-1.5 h-1.5 bg-newsroom-crimson rounded-full" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
