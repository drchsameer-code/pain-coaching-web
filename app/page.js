import React from 'react';
import TickerMarquee from '../components/TickerMarquee';
import Hero from '../components/Hero';
import ConditionsGrid from '../components/ConditionsGrid';
import Carousel from '../components/Carousel';
import ProgramsSection from '../components/ProgramsSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Ticker ribbon strip */}
      <TickerMarquee />

      {/* Hero Clinical Callout Frame */}
      <Hero />

      {/* Mapped Pain Conditions 3x2 Matrix Card Grid */}
      <ConditionsGrid />

      {/* Interactive Strategic Carousel (3 Pillars Map) */}
      <section id="approach" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 border-b border-[var(--color-line)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="eyebrow mb-4">Functional Disciplines</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter m-0 text-white">
              Structural intervention <span className="display">pillars</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[var(--color-text-2)] leading-relaxed max-w-sm m-0">
            Three synchronized behavioral, neural, and physical pathways engineered to safely downregulate long-term system sensitization loops.
          </p>
        </div>
        <Carousel />
      </section>

      {/* Subscription Architecture Timelines */}
      <ProgramsSection />

      {/* Secure Lead Generation Framework */}
      <ContactForm />
    </>
  );
}