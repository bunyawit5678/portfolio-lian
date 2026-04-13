import { Link } from 'react-router-dom';
import { Camera, Instagram, Linkedin, Youtube, Twitter, Mail } from 'lucide-react';
import { PHOTOGRAPHER } from '../constants';

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram className="w-4 h-4" />,
  twitter:   <Twitter   className="w-4 h-4" />,
  linkedin:  <Linkedin  className="w-4 h-4" />,
  youtube:   <Youtube   className="w-4 h-4" />,
};

const socialHrefs: Record<string, (handle: string) => string> = {
  instagram: (h) => `https://instagram.com/${h.replace('@', '')}`,
  twitter:   (h) => `https://twitter.com/${h.replace('@', '')}`,
  linkedin:  (h) => `https://linkedin.com/in/${h}`,
  youtube:   (h) => `https://youtube.com/${h}`,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = PHOTOGRAPHER.socials;

  return (
    <footer className="border-t border-neutral-800 bg-newsroom-dark mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <Camera className="w-6 h-6 text-newsroom-crimson group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display font-black text-xl tracking-tighter text-white uppercase">Focus</span>
          </Link>

          {/* Social links — pulled from PHOTOGRAPHER.socials */}
          <div className="flex items-center gap-4">
            {(Object.keys(socials) as Array<keyof typeof socials>).map((platform) => {
              const handle = socials[platform];
              if (!handle) return null;
              const icon = socialIcons[platform];
              const href = socialHrefs[platform]?.(handle) ?? '#';
              return (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${PHOTOGRAPHER.name} on ${platform}`}
                  className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200 rounded-sm"
                >
                  {icon}
                </a>
              );
            })}
            <a
              href={`mailto:${PHOTOGRAPHER.email}`}
              aria-label="Send email"
              className="p-2 text-neutral-500 hover:text-newsroom-crimson hover:bg-neutral-800 transition-all duration-200 rounded-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest">
            © {year} {PHOTOGRAPHER.name} Pawarophat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
