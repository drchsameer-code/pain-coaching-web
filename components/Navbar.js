"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CONFIG_LINKS } from '../data/coachingData';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-[#07070a]/85 backdrop-blur-xl border-b border-[var(--color-line)] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        
        {/* Brand Core Identity with Scaled Logo Asset */}
        <Link href="/" className="flex items-center gap-3 text-white no-underline font-semibold text-lg tracking-tight group">
          {/* Increased dimensional footprint bounds from w-6 h-6 to w-9 h-9 for prominence */}
          <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.png"
              alt="Chronic Pain Free Platform Logo" 
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="capitalize tracking-tight font-bold">
            {CONFIG_LINKS.siteName} <span className="display text-xl text-[var(--color-lime)] normal-case font-normal">// lifestyle medicine</span>
          </span>
        </Link>
        
        {/* Persistent Pathing Controller */}
        <nav className="hidden md:flex items-center gap-6 mono text-[11px] text-[var(--color-text-2)] uppercase tracking-wider">
          {isHome ? (
            <>
              <a href="#approach" className="no-underline hover:text-white transition-colors">[ Approach ]</a>
              <a href="#programs" className="no-underline hover:text-white transition-colors">[ Programs ]</a>
              <Link href="/about" className="no-underline hover:text-white transition-colors">[ About Me ]</Link>
              <a href="#contact" className="no-underline hover:text-white transition-colors">[ Consult ]</a>
            </>
          ) : (
            <>
              <Link href="/#approach" className="no-underline hover:text-white transition-colors">[ Approach ]</Link>
              <Link href="/#programs" className="no-underline hover:text-white transition-colors">[ Programs ]</Link>
              <Link href="/about" className={`no-underline hover:text-white transition-colors ${pathname === '/about' ? 'text-[var(--color-lime)] font-bold' : ''}`}>[ About Me ]</Link>
              <Link href="/#contact" className="no-underline hover:text-white transition-colors">[ Consult ]</Link>
            </>
          )}
        </nav>

        {/* Global Primary Consultation Routing */}
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