import React from 'react';
import { MARQUEE_ITEMS } from '../data/coachingData';

export default function TickerMarquee() {
  // Triple items list arrays to fill wide desktop view boundaries cleanly
  const aggregateTickerList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-b border-[var(--color-line)] bg-[var(--color-bg-2)] overflow-hidden py-3.5 select-none">
      <div className="animate-marquee-loop gap-16 uppercase mono text-[11px] tracking-widest text-[var(--color-text-2)]">
        {aggregateTickerList.map((text, i) => (
          <span key={i} className="flex items-center gap-4">
            {text} <span className="text-[var(--color-lime)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}