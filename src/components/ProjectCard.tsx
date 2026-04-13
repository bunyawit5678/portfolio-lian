import { Link } from 'react-router-dom';
import { Project } from '../types';
import { MapPin, Calendar, Aperture } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/project/${project.id}`} className="block group relative overflow-hidden bg-neutral-900 border border-neutral-800">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-700 brightness-75 group-hover:brightness-100 group-hover:scale-105"
        />

        {/* Gradient scrim — always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-newsroom-dark/95 via-newsroom-dark/30 to-transparent pointer-events-none" />

        {/* Category badge — top-left */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-newsroom-crimson text-white text-xs font-bold uppercase tracking-widest shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Bottom content block: slides up on hover */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          {/* Title — always visible */}
          <h3 className="text-3xl md:text-4xl font-display font-black leading-tight uppercase tracking-tighter text-white mb-3">
            {project.title}
          </h3>

          {/* Metadata row — slides in and fades on hover */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {project.role && (
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-newsroom-crimson">
                <Aperture className="w-3 h-3 shrink-0" />
                {project.role}
              </span>
            )}
            <span className="w-px h-3 bg-neutral-600 hidden sm:block" />
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-300">
              <Calendar className="w-3 h-3 shrink-0" />
              {project.date}
            </span>
            <span className="w-px h-3 bg-neutral-600 hidden sm:block" />
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-300">
              <MapPin className="w-3 h-3 shrink-0" />
              {project.location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
