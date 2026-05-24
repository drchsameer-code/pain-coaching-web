"use client";

import React from 'react';
import { CHRONIC_CONDITIONS } from '../data/coachingData';

// Custom, clean anatomical vectors with glowing acid-lime pinpoint hotspots
const SilhouetteVectors = [
  // 1. Low Back Pain
  <svg key="1" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22C54 22 57 18 57 14C57 10 54 6 50 6C46 6 43 10 43 14C43 18 46 22 50 22Z M36 30C42 28 58 28 64 30L68 55L62 90L66 135M36 30L32 55L38 90L34 135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="50" cy="82" r="7" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="50" cy="82" r="2" fill="var(--color-lime)"/>
  </svg>,
  // 2. Fibromyalgia (Symmetric Widespread Sensitization)
  <svg key="2" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22C54 22 57 18 57 14C57 10 54 6 50 6C46 6 43 10 43 14C43 18 46 22 50 22Z M36 30C42 28 58 28 64 30L68 55L62 90L66 135M36 30L32 55L38 90L34 135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="34" cy="38" r="3" fill="var(--color-lime)" className="animate-ping"/>
    <circle cx="66" cy="38" r="3" fill="var(--color-lime)" className="animate-ping"/>
    <circle cx="50" cy="62" r="3" fill="var(--color-lime)"/>
    <circle cx="38" cy="90" r="3" fill="var(--color-lime)"/>
    <circle cx="62" cy="90" r="3" fill="var(--color-lime)"/>
  </svg>,
  // 3. Cervicogenic Migraines / Neck
  <svg key="3" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22C54 22 57 18 57 14C57 10 54 6 50 6C46 6 43 10 43 14C43 18 46 22 50 22Z M36 30C42 28 58 28 64 30L68 55M36 30L32 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="50" cy="14" r="8" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="50" cy="14" r="2" fill="var(--color-lime)"/>
  </svg>,
  // 4. Reactive Knee / Hip Joint Friction
  <svg key="4" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22M36 30L44 65L40 105L44 155M54 65L58 105L52 155" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="40" cy="105" r="6" stroke="var(--color-lime)" strokeWidth="1.5" className="animate-pulse" fill="rgba(214,255,61,0.1)"/>
    <circle cx="40" cy="105" r="2" fill="var(--color-lime)"/>
  </svg>,
  // 5. Sciatica Nerve Root Compression Path
  <svg key="5" width="56" height="90" viewBox="0 0 100 160" fill="none" className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
    <path d="M50 22M36 30C42 28 58 28 64 30L66 78L60 118L56 155" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M52 75Q60 98 57 125T55 155" stroke="var(--color-lime)" strokeWidth="2" strokeDasharray="3 3" className="animate-pulse"/>
  </svg>,
  // 6. Complex Regional Pain (CRPS Localized Microvascular Shock)
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