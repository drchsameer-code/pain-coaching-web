"use client";

import React from 'react';
import { CHRONIC_CONDITIONS } from '../data/coachingData';

// Custom, background-free anatomical vectors with glowing acid-lime pinpoint hotspots
const SilhouetteVectors = [
  // 1. Low Back Pain
  <svg key="1" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22C54 22 57 18 57 14C57 10 54 6 50 6C46 6 43 10 43 14C43 18 46 22 50 22Z M36 30C42 28 58 28 64 30L68 55L62 90L66 135M36 30L32 55L38 90L34 135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="50" cy="82" r="7" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="50" cy="82" r="2" fill="var(--color-lime)"/>
  </svg>,
  
  // 2. Fibromyalgia Syndrome
  <svg key="2" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22C54 22 57 18 57 14C57 10 54 6 50 6C46 6 43 10 43 14C43 18 46 22 50 22Z M36 30C42 28 58 28 64 30L68 55L62 90L66 135M36 30L32 55L38 90L34 135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="34" cy="38" r="3" fill="var(--color-lime)" className="animate-ping"/>
    <circle cx="66" cy="38" r="3" fill="var(--color-lime)" className="animate-ping"/>
    <circle cx="50" cy="62" r="3" fill="var(--color-lime)"/>
    <circle cx="38" cy="90" r="3" fill="var(--color-lime)"/>
    <circle cx="62" cy="90" r="3" fill="var(--color-lime)"/>
  </svg>,
  
  // 3. Cervicogenic Pain, Whiplash & Migraine Headaches (Whiplash Arc + Cranial Aura)
  <svg key="3" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    {/* Whiplash deceleration neck curve silhouette */}
    <path d="M48 24C53 23 56 18 55 13C54 8 49 5 44 6C40 7 38 12 39 16C40 20 43 23 47 24Z M32 34C37 31 51 34 56 38L58 65L52 98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M32 34C28 42 24 60 26 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Concentric Cranio-Cervical Shock Hotspot */}
    <circle cx="45" cy="14" r="10" stroke="var(--color-lime)" strokeWidth="1.2" strokeDasharray="3 2" className="animate-spin" style={{ animationDuration: '8s' }}/>
    <circle cx="46" cy="24" r="6" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="46" cy="24" r="2" fill="var(--color-lime)"/>
  </svg>,
  
  // 4. Chronic Pelvic Pain (Visceral Torso Loop)
  <svg key="4" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    {/* Midriff and Pelvis outline profile */}
    <path d="M34 20C38 32 36 50 32 75L26 120L30 155M66 20C62 32 64 50 68 75L74 120L70 155" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M32 75C42 80 58 80 68 75M26 120C36 125 64 125 74 120" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
    {/* Centered Pelvic Visceral Guarding Hotspot */}
    <circle cx="50" cy="102" r="8" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="50" cy="102" r="2" fill="var(--color-lime)"/>
  </svg>,
  
  // 5. Tension Headache Syndrome (Cranial Ring Band)
  <svg key="5" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    {/* Focused Head and Upper Cervical profile */}
    <path d="M50 36C58 36 64 30 64 20C64 10 58 4 50 4C42 4 36 10 36 20C36 30 42 36 50 36Z M34 52C40 48 60 48 66 52L70 90M34 52L30 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M44 36L44 48" stroke="currentColor" strokeWidth="1.5"/>
    {/* Transtemporal Tension Constriction Band */}
    <path d="M34 20Q50 12 66 20" stroke="var(--color-lime)" strokeWidth="2" strokeLinecap="round" className="animate-pulse"/>
    <circle cx="36" cy="20" r="2.5" fill="var(--color-lime)"/>
    <circle cx="64" cy="20" r="2.5" fill="var(--color-lime)"/>
  </svg>,
  
  // 6. Complex Regional Pain (CRPS)
  <svg key="6" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 40C45 40 40 35 40 25L44 65M50 40L56 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M30 85L36 65L44 100" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="30" cy="85" r="6" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="30" cy="85" r="2" fill="var(--color-lime)"/>
  </svg>
];

export default function ConditionsGrid() {
  return (
    <section id="conditions" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[var(--color-line)]">
      <div className="mb-14">
        <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-2">§ CLINICAL SPECIALIZATIONS</div>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight m-0 text-white">
          Symptom architectures targeted <span className="display">in current practice</span>
        </h2>
      </div>

      {/* Asymmetric Editorial 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHRONIC_CONDITIONS.map((c, idx) => (
          <div key={idx} className="group border border-[var(--color-line)] bg-[#0c0c12]/30 p-6 flex items-start gap-6 hover:border-[var(--color-line-2)] transition-all duration-300 rounded-lg">
            
            {/* Background-Free Silhouette Vector Container */}
            <div className="flex-shrink-0 bg-[#07070a]/80 border border-[var(--color-line)] rounded-lg p-2.5 flex items-center justify-center min-w-[76px] min-h-[114px]">
              {SilhouetteVectors[idx]}
            </div>
            
            {/* Context Content Box */}
            <div className="flex-1 min-w-0 pt-1">
              <span className="mono text-[9px] text-[var(--color-text-3)] tracking-wider block mb-1 uppercase">{c.meta}</span>
              <h4 className="text-base font-bold text-white tracking-tight m-0 mb-2 group-hover:text-[var(--color-lime)] transition-colors">{c.title}</h4>
              <p className="text-xs text-[var(--color-text-2)] leading-relaxed m-0">{c.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}