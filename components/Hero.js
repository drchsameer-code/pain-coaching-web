import React from 'react';
import { CONFIG_LINKS } from '../data/coachingData';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-b border-[var(--color-line)]">
      <div className="eyebrow mb-10">Clinical Framework · Evidence-Based Practice</div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tightest leading-[0.93] m-0 text-white">
            Beyond the <br/>
            <span className="display text-[var(--color-lime)]">prescription</span> <br/>
            pad mechanisms.
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
            <a 
              href={CONFIG_LINKS.calendly} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-lime text-base py-3.5 px-7"
            >
              Book Free 40-Min Call →
            </a>
            <a href="#approach" className="btn btn-ghost text-base py-3.5 px-7">
              The Methodology
            </a>
          </div>
        </div>

        <div className="lg:mb-2">
          <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">§ Pathological Reality</div>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-2)] m-0">
            Chronic pain is not a simple structural or chemical based tissue problem —it is also a learned output from a nervous system due to initial injury or insult. Most chronic pain conditions e.g., Chronic regional pain syndrome, fibromyalgias, whiplash injury, chronic pelvic pain, etc, etc., are very debilitating and can make any individual to function below the basic threshold of physical movement required for even day to day activities.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-2)] mt-5 m-0">
            We leverage lifestyle medicine to address physical movement through different exercise regimens, central regulation, retraining of over-sensitized pain pathways, and systematically build a permanent functional resilience that leads to recovery from chronic pain.
          </p>
        </div>
      </div>
    </section>
  );
}