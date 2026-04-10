import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-newsroom-dark/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Camera className="w-8 h-8 text-newsroom-crimson group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">Focus</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Feed</Link>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">About</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
