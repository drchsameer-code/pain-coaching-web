import React from 'react';
import Link from 'next/link';
import { INCLUSIONS_6_MONTH, INCLUSIONS_4_MONTH } from '../data/coachingData';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-[var(--color-lime)] mt-0.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-[var(--color-bg-2)] border-b border-[var(--color-line)] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="eyebrow mb-4">Coaching Paths</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter m-0 text-white">
            Structured programs for <span className="display">durable change</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* TRACK 01: 6-MONTH CLASSIFIED ECOSYSTEM */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-lime)] p-8 md:p-12 relative flex flex-col justify-between min-h-[720px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-lime)] text-[#0a0a0a] mono text-[10px] font-bold tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
              RECOMMENDED TIMELINE · $100 INTRODUCTORY DISCOUNT
            </div>
            <div>
              <div className="flex justify-between items-start border-b border-[var(--color-line)] pb-6 mb-6">
                <div>
                  <span className="tag text-[9px] mb-2">MODULE A</span>
                  <h3 className="text-2xl font-bold tracking-tight m-0 text-white">6-Month Coaching Track</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <span className="mono text-sm text-white/40 line-through font-medium">$450</span>
                    <span className="mono text-3xl font-bold text-[var(--color-lime)]">$350</span>
                  </div>
                  <span className="mono text-[10px] text-[var(--color-text-3)] block uppercase mt-1">Enrollment Base Fee</span>
                </div>
              </div>
              
              {/* Progress map timeline module */}
              <div className="mb-8 pt-2">
                <div className="mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">Subscription Progress Map & Pricing Model</div>
                <div className="relative flex justify-between items-center w-full mb-4">
                  <div className="absolute left-0 right-0 h-[1px] bg-[var(--color-line-2)] z-0" />
                  <div className="z-10 bg-[var(--color-surface)] pr-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--color-lime)] shadow-[0_0_10px_var(--color-lime)]" />
                    <span className="mono text-xs text-white font-semibold">Month 1: Onboarding ($350)</span>
                  </div>
                  <div className="z-10 bg-[var(--color-surface)] pl-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--color-line-2)]" />
                    <span className="mono text-xs text-white/70 font-semibold">Months 2-6: Support ($180/mo)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mono pt-1 border-b border-[var(--color-line)] pb-4 mb-4">
                  <div className="text-white font-medium leading-relaxed">
                    → Initial programmatic setup & complete clinical baseline mapping
                  </div>
                  <div className="text-white font-medium text-right leading-relaxed">
                    → 5 subsequent automated recurring monthly tracking statements
                  </div>
                </div>
                <div className="p-3.5 bg-[#07070a]/60 border border-[var(--color-line)] flex justify-between items-center">
                  <span className="mono text-[11px] text-[var(--color-text-2)] font-medium">TOTAL PROTOCOL INVESTMENT:</span>
                  <div className="flex items-center gap-2">
                    <span className="mono text-xs text-white/40 line-through">$1350</span>
                    <span className="mono text-lg font-bold text-[var(--color-lime)]">$1250 Aggregate</span>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-2)] text-sm leading-relaxed mb-8">
                Embark on a structured, six-month journey designed to transform your daily habits, improve your well-being, and sustain long-term lifestyle goals. This program combines intensive onboarding with consistent support to stabilize neuro-immune baselines.
              </p>
              <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">Track Inclusions:</div>
              <ul className="space-y-4 text-sm text-[var(--color-text-2)] list-none p-0 m-0 mb-10">
                {INCLUSIONS_6_MONTH.map(([title, desc]) => (
                  <li key={title} className="flex gap-3 items-start">
                    <CheckIcon />
                    <div><strong className="text-white font-medium">{title}:</strong> {desc}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link href="/subscribe?plan=6-month" className="btn btn-lime w-full font-bold py-4 text-center block no-underline tracking-wide">
                Subscribe to 6-Month Coaching Track
              </Link>
            </div>
          </div>

          {/* TRACK 02: 4-MONTH CLASSIFIED ECOSYSTEM */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-8 md:p-12 flex flex-col justify-between min-h-[720px]">
            <div>
              <div className="flex justify-between items-start border-b border-[var(--color-line)] pb-6 mb-6">
                <div>
                  <span className="tag text-[9px] mb-2">MODULE B</span>
                  <h3 className="text-2xl font-bold tracking-tight m-0 text-white">4-Month Coaching Track</h3>
                </div>
                <div className="text-right">
                  <span className="mono text-3xl font-bold text-white">$450</span>
                  <span className="mono text-[10px] text-[var(--color-text-3)] block uppercase mt-1">Enrollment Base Fee</span>
                </div>
              </div>

              {/* Progress map timeline module */}
              <div className="mb-8 pt-2">
                <div className="mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">Subscription Progress Map & Pricing Model</div>
                <div className="relative flex justify-between items-center w-full mb-4">
                  <div className="absolute left-0 right-0 h-[1px] bg-[var(--color-line-2)] z-0" />
                  <div className="z-10 bg-[var(--color-surface)] pr-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    <span className="mono text-xs text-white font-semibold">Month 1: Onboarding ($450)</span>
                  </div>
                  <div className="z-10 bg-[var(--color-surface)] pl-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--color-line-2)]" />
                    <span className="mono text-xs text-white/70 font-semibold">Months 2-4: Support ($150/mo)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mono pt-1 border-b border-[var(--color-line)] pb-4 mb-4">
                  <div className="text-white font-medium leading-relaxed">
                    → Deep diagnostic intake consult & target path strategy alignment
                  </div>
                  <div className="text-white font-medium text-right leading-relaxed">
                    → 3 subsequent automated recurring monthly tracking statements
                  </div>
                </div>
                <div className="p-3.5 bg-[#07070a]/40 border border-[var(--color-line)] flex justify-between items-center">
                  <span className="mono text-[11px] text-[var(--color-text-2)] font-medium">TOTAL PROTOCOL INVESTMENT:</span>
                  <span className="mono text-base font-bold text-white">$900 Aggregate over 4 Months</span>
                </div>
              </div>

              <p className="text-[var(--color-text-2)] text-sm leading-relaxed mb-8">
                Embark on a structured, four-month journey designed to transform your daily habits, improve your well-being, and sustain long-term lifestyle goals. This track builds robust structural foundational shifts.
              </p>
              <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">Track Inclusions:</div>
              <ul className="space-y-4 text-sm text-[var(--color-text-2)] list-none p-0 m-0 mb-10">
                {INCLUSIONS_4_MONTH.map(([title, desc]) => (
                  <li key={title} className="flex gap-3 items-start">
                    <CheckIcon />
                    <div><strong className="text-white font-medium">{title}:</strong> {desc}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link href="/subscribe?plan=4-month" className="btn btn-ghost w-full font-bold py-4 text-center block no-underline tracking-wide">
                Subscribe to 4-Month Coaching Track
              </Link>
            </div>
          </div>

        </div>

        {/* Dynamic Architectural Policy Cards */}
        <div className="mt-12 p-6 bg-[var(--color-bg)] border border-[var(--color-line)] grid grid-cols-1 md:grid-cols-3 gap-6 mono text-[11px] text-[var(--color-text-3)] leading-relaxed">
          <div>
            <span className="text-[var(--color-lime)] font-semibold block mb-1">§ BILLING MATRIX</span>
            The initial investment fee is authorized upon enrollment. Future recurring statements process automatically on the corresponding calendar date of each cycle track.
          </div>
          <div>
            <span className="text-[var(--color-lime)] font-semibold block mb-1">§ CALENDAR ALLOCATION</span>
            All collaborative sessions require advance scheduling allocations. Reserved windows are bounded to protect clinical resource pacing and maintain client behavioral consistency.
          </div>
          <div>
            <span className="text-[var(--color-lime)] font-semibold block mb-1">§ CANCELLATION MATRIX</span>
            Clients hold complete tracking autonomy. Subscriptions can be terminated at any choice boundary. Written notification must drop 5 business days prior to your next statement date to prevent automated billing.
          </div>
        </div>
      </div>
    </section>
  );
}