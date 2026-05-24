import React from 'react';
import { CONFIG_LINKS } from '../data/coachingData';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#07070a]/85 backdrop-blur-xl border-b border-[var(--color-line)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-1.5 text-white no-underline font-semibold text-lg tracking-tight">
          lifestyle medicine <span className="display text-xl text-[var(--color-lime)]">// chronic pain conditions</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6 mono text-[11px] text-[var(--color-text-2)] uppercase tracking-wider">
          <a href="#approach" className="no-underline hover:text-white transition-colors">[ Approach ]</a>
          <a href="#programs" className="no-underline hover:text-white transition-colors">[ Programs ]</a>
          <a href="#contact" className="no-underline hover:text-white transition-colors">[ Consult ]</a>
        </nav>

        <a 
          href={CONFIG_LINKS.calendly} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-lime text-xs font-semibold py-2 px-5"
        >
          Book Free Call →
        </a>
      </div>
    </header>
  );
}