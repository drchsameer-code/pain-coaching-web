"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONFIG_LINKS } from '../../data/coachingData';

export default function AboutPage() {
  return (
    <div className="bg-[#07070a] text-[#f4f4f8] antialiased">
      
      {/* ── ABOUT EDITORIAL HUB SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* Eyebrow Label Tag */}
        <div className="eyebrow mb-12">BIOGRAPHY // CLINICAL BACKGROUND STATE</div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Visual Media Presentation Frame */}
          <div className="relative border border-[var(--color-line)] bg-[#0c0c12]/40 p-3 group rounded-xl">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg border border-[var(--color-line-2)] bg-[#11111a]">
              <Image 
                src="/dr-ahmed.jpg"
                alt="Dr. Ahmed Profile Photo"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 450px"
                className="object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Context Technical Stamp Data Overlay */}
            <div className="mt-4 px-2 flex justify-between items-center mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider">
              <span>DESIGNATION: INTDESK_01</span>
              <span>VERIFIED PROFILE SECURITY</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Typographical Text Content Grid */}
          <div className="flex flex-col justify-center">
            
            <span className="mono text-[11px] text-[var(--color-lime)] tracking-widest uppercase block mb-3">
              § THE CLINICIAN AND THE SURVIVOR
            </span>
            
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white m-0">
              Hi, I’m <span className="display text-[var(--color-lime)] not-italic">Dr. Ahmed</span>
            </h1>

            {/* Sub-Header Designation Block */}
            <div className="mono text-xs md:text-sm text-[var(--color-text-2)] uppercase tracking-wide mt-4 pb-6 border-b border-[var(--color-line)] leading-relaxed">
              Medical Doctor <span className="text-[var(--color-text-3)]">//</span> Certified Lifestyle Medicine Coach <span className="text-[var(--color-text-3)]">//</span> Clinical Pharmacologist
            </div>

            {/* Main Narrative Block Elements */}
            <div className="text-base md:text-lg text-[var(--color-text-2)] leading-relaxed space-y-6 mt-8 font-normal">
              
              <p className="m-0">
                But more than that, I am someone who truly understands chronic pain—<strong className="text-white font-medium">because I lived it.</strong>
              </p>

              <p className="m-0">
                In January 2020, a severe car accident turned my life upside down, leaving me pinned down by chronic pain. It took <span className="text-white font-medium">four years of grit, resilience,</span> and consistent physical workout routines, deep emotional reframing, and precise systemic lifestyle modifications to achieve recovery.
              </p>

              <p className="m-0">
                As a physician, I know the intricate underlying <span className="text-[var(--color-lime)] font-medium">mechanisms of chronic pain</span> architecture and the stark real-world limitations of relying solely on temporary medication containment strategies. As a survivor, I understand the deep mental and physical toll it takes on your daily functional freedom.
              </p>

              <p className="m-0">
                Today, I combine my clinical expertise with my personal battle-tested recovery blueprint to coach individuals struggling with persistent, chronic pain presentations. My mission is simple: to help you look past temporary fixes and build a sustainable, structured path back to a vibrant, pain-free life.
              </p>

              <p className="display text-2xl md:text-3xl text-white/95 leading-snug tracking-wide pt-2 italic">
                “Let’s sync your lifestyle with your recovery and get you back on a pain-free track.”
              </p>

            </div>

            {/* Interactive Call To Actions Layout Linkage */}
            <div className="mt-10 pt-8 border-t border-[var(--color-line)] flex flex-wrap gap-4">
              <a 
                href={CONFIG_LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime text-base py-3.5 px-8 font-semibold tracking-wide no-underline"
              >
                Schedule Free Assessment call →
              </a>
              <Link 
                href="/#programs" 
                className="btn btn-ghost text-base py-3.5 px-8 font-medium tracking-wide no-underline"
              >
                Explore Coaching Tracks
              </Link>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}