"use client";

import { useState } from "react";
import Carousel from "../components/Carousel";

const Icons = {
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>,
  check: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  quote: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
};

const MARQUEE = [
  "LIFESTYLE MEDICINE", "NEUROPLASTIC RECOVERY", "PAIN NEUROSCIENCE EDUCATION",
  "ANTI-INFLAMMATORY PROTOCOLS", "GRADED MOVEMENT EXPOSURE", "METABOLIC OPTIMISATION"
];

const INCLUSIONS_6 = [
  ["Initial Assessment & Blueprint", "A deep-dive session in Month 1 to identify your current pain points, define clear objectives, and build a customized action plan."],
  ["Monthly Check-ins", "Regular sessions to review progress, troubleshoot challenges, and refine your approach for the month ahead."],
  ["Ongoing Support", "Messaging and voice notes support between formal mapping sessions throughout months for questions or mini tracking discussions."]
];

const INCLUSIONS_4 = [
  ["Initial Assessment & Blueprint", "A detailed strategy architecture workspace run in Month 1 to map sensory patterns, identify biological drivers, and isolate custom behavioral modifications."],
  ["Monthly Check-ins", "Regular 1-hour focus session every month to evaluate functional status, troubleshoot challenges, and safely step up loading structures."],
  ["Ongoing Support", "Asynchronous secure desk app messaging and audio voice note support check-ins for rapid responses during flare-ups across all program weeks."]
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", diagnosis: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      // NOTE: Swap YOUR_FORMSPREE_ID with your Formspree hash token post-launch
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (_) {
      alert("Form submission routing paused. Please book your discovery call directly via the scheduling anchors above.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      
      {/* ── HIGH-END ARCHITECTURAL TOP NAV ── */}
      <header className="sticky top-0 z-50 bg-[#07070a]/85 backdrop-blur-xl border-b border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-1.5 text-white no-underline font-semibold text-lg tracking-tight">
            lifestyle medicine <span className="display text-xl text-[var(--color-lime)]">// chronic pain conditions</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 mono text-[11px] text-[var(--color-text-2)] uppercase tracking-wider">
            <a href="#approach" className="no-underline hover:text-white transition-colors">[ Approach ]</a>
            <a href="#programs" className="no-underline hover:text-white transition-colors">[ Programs ]</a>
            {/* Testimonials link safely hidden out of sight for later structural expansion tracks
            <a href="#results" className="no-underline hover:text-white transition-colors">[ Metrics ]</a>
            */}
            <a href="#contact" className="no-underline hover:text-white transition-colors">[ Consult ]</a>
          </nav>

          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-lime text-xs font-semibold py-2 px-5">
            Book Free Call →
          </a>
        </div>
      </header>

      {/* ── MARQUEE SYSTEM TICKER STRIP ── */}
      <div className="border-b border-[var(--color-line)] bg-[var(--color-bg-2)] overflow-hidden py-3.5 select-none">
        <div className="animate-marquee-loop gap-16 uppercase mono text-[11px] tracking-widest text-[var(--color-text-2)]">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((text, i) => (
            <span key={i} className="flex items-center gap-4">
              {text} <span className="text-[var(--color-lime)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── EDITORIAL CLINICAL HERO PAGE WRAP ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-b border-[var(--color-line)]">
        <div className="eyebrow mb-10">Clinical Framework · Evidence-Based Practice</div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tightest leading-[0.93] m-0">
              Beyond the <br/>
              <span className="display text-[var(--color-lime)]">prescription</span> <br/>
              pad mechanisms.
            </h1>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-lime text-base py-3.5 px-7">
                Book Free 45-Min Call →
              </a>
              <a href="#approach" className="btn btn-ghost text-base py-3.5 px-7">
                The Methodology
              </a>
            </div>
          </div>

          <div className="lg:mb-2">
            <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">§ Pathological Reality</div>
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-2)] m-0">
              Chronic pain is rarely a simple structural or chemical tissue issue—it is a learned output from a nervous system adapted to over-respond to normal sensory signals.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-2)] mt-5 m-0">
              We leverage lifestyle modification medicine to address central regulation, retrain over-sensitized threat paths, and systematically build permanent functional resilience.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE METHODOLOGY INTERACTIVE GRID HUB ── */}
      <section id="approach" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[var(--color-line)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="eyebrow mb-4">Functional Disciplines</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter m-0">
              Structural intervention <span className="display">pillars</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[var(--color-text-2)] leading-relaxed max-w-sm m-0">
            Three synchronized behavioral, neural, and physical pathways engineered to safely downregulate long-term system sensitization loops.
          </p>
        </div>
        <Carousel />
      </section>

      {/* ── PROGRAM SUBSCRIPTION ARCHITECTURES (TIMELINE LAYOUT) ── */}
      <section id="programs" className="bg-[var(--color-bg-2)] border-b border-[var(--color-line)] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="eyebrow mb-4">Coaching Paths</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter m-0">
              Structured programs for <span className="display">durable change</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* CARD 01: 6-MONTH CLASSIFIED ECOSYSTEM */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-lime)] p-8 md:p-12 relative flex flex-col justify-between min-h-[720px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-lime)] text-[#0a0a0a] mono text-[10px] font-bold tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                RECOMMENDED STRUCTURAL TIMELINE
              </div>
              <div>
                <div className="flex justify-between items-start border-b border-[var(--color-line)] pb-6 mb-6">
                  <div>
                    <span className="tag text-[9px] mb-2">MODULE A</span>
                    <h3 className="text-2xl font-bold tracking-tight m-0 text-white">6-Month Coaching Track</h3>
                  </div>
                </div>
                
                {/* Visual Checkpoint Timeline Engine */}
                <div className="mb-8 pt-2">
                  <div className="mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider mb-3">Subscription Progress Map & Pricing Model</div>
                  <div className="relative flex justify-between items-center w-full mb-2">
                    <div className="absolute left-0 right-0 h-[1px] bg-[var(--color-line-2)] z-0" />
                    <div className="z-10 bg-[var(--color-surface)] pr-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-lime)]" />
                      <span className="mono text-xs text-white">Month 1: Onboarding ($450)</span>
                    </div>
                    <div className="z-10 bg-[var(--color-surface)] pl-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-line-2)]" />
                      <span className="mono text-xs text-[var(--color-text-2)]">Months 2-6: Support ($180/mo)</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[11px] text-[var(--color-text-3)] mono mt-1">
                    <span>Initial setup assessment baseline</span>
                    <span>5 recurring installments automated</span>
                  </div>
                  <div className="mt-4 p-3 bg-[#07070a]/40 border border-[var(--color-line)] flex justify-between items-center">
                    <span className="mono text-[11px] text-[var(--color-text-2)]">AGGAREGATE CLINICAL INVESTMENT:</span>
                    <span className="mono text-base font-medium text-[var(--color-lime)]">$1350 Total over 6 Months</span>
                  </div>
                </div>

                <p className="text-[var(--color-text-2)] text-sm leading-relaxed mb-8">
                  Embark on a structured, six-month journey designed to transform your daily habits, improve your well-being, and sustain long-term lifestyle goals. This program combines intensive onboarding with consistent support to stabilize neuro-immune baselines.
                </p>
                <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">Track Inclusions:</div>
                <ul className="space-y-4 text-sm text-[var(--color-text-2)] list-none p-0 m-0 mb-10">
                  {INCLUSIONS_6.map(([title, desc]) => (
                    <li key={title} className="flex gap-3 items-start">
                      <span className="text-[var(--color-lime)] font-bold">{Icons.check}</span>
                      <div><strong>{title}:</strong> {desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-lime w-full font-semibold py-4 text-center">
                  Subscribe to 6-Month Coaching Track
                </a>
              </div>
            </div>

            {/* CARD 02: 4-MONTH CLASSIFIED ECOSYSTEM */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-8 md:p-12 flex flex-col justify-between min-h-[720px]">
              <div>
                <div className="flex justify-between items-start border-b border-[var(--color-line)] pb-6 mb-6">
                  <div>
                    <span className="tag text-[9px] mb-2">MODULE B</span>
                    <h3 className="text-2xl font-bold tracking-tight m-0 text-white">4-Month Coaching Track</h3>
                  </div>
                </div>

                {/* Visual Checkpoint Timeline Engine */}
                <div className="mb-8 pt-2">
                  <div className="mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider mb-3">Subscription Progress Map & Pricing Model</div>
                  <div className="relative flex justify-between items-center w-full mb-2">
                    <div className="absolute left-0 right-0 h-[1px] bg-[var(--color-line-2)] z-0" />
                    <div className="z-10 bg-[var(--color-surface)] pr-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span className="mono text-xs text-white">Month 1: Onboarding ($350)</span>
                    </div>
                    <div className="z-10 bg-[var(--color-surface)] pl-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-line-2)]" />
                      <span className="mono text-xs text-[var(--color-text-2)]">Months 2-4: Support ($150/mo)</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[11px] text-[var(--color-text-3)] mono mt-1">
                    <span>Diagnostic mapping conversation</span>
                    <span>3 recurring installments automated</span>
                  </div>
                  <div className="mt-4 p-3 bg-[#07070a]/40 border border-[var(--color-line)] flex justify-between items-center">
                    <span className="mono text-[11px] text-[var(--color-text-2)]">AGGAREGATE CLINICAL INVESTMENT:</span>
                    <span className="mono text-base font-medium text-white">$800 Total over 4 Months</span>
                  </div>
                </div>

                <p className="text-[var(--color-text-2)] text-sm leading-relaxed mb-8">
                  Embark on a structured, four-month journey designed to transform your daily habits, improve your well-being, and sustain long-term lifestyle goals. This track builds robust structural foundational shifts.
                </p>
                <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-4">Track Inclusions:</div>
                <ul className="space-y-4 text-sm text-[var(--color-text-2)] list-none p-0 m-0 mb-10">
                  {INCLUSIONS_4.map(([title, desc]) => (
                    <li key={title} className="flex gap-3 items-start">
                      <span className="text-[var(--color-text-2)] font-bold">{Icons.check}</span>
                      <div><strong>{title}:</strong> {desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full font-semibold py-4 text-center">
                  Subscribe to 4-Month Coaching Track
                </a>
              </div>
            </div>

          </div>

          {/* SHARED CLINICAL MATRIX DISCLOSURE LEGAL FLAGS */}
          <div className="mt-12 p-6 bg-[var(--color-bg)] border border-[var(--color-line)] grid grid-cols-1 md:grid-cols-3 gap-6 mono text-[11px] text-[var(--color-text-3)] leading-relaxed">
            <div>
              <span className="text-[var(--color-lime)] font-semibold block mb-1">§ BILLING POLICY</span>
              The initial investment allocation is authorized immediately at setup configuration. Recurring monthly statements deduct automatically on the corresponding cycle date.
            </div>
            <div>
              <span className="text-[var(--color-lime)] font-semibold block mb-1">§ TERMINATION SPACE</span>
              Subscriptions can be disconnected at any choice boundary. Written notification must clear via our system 5 business days prior to the next statement date to prevent processing.
            </div>
            <div>
              <span className="text-[var(--color-lime)] font-semibold block mb-1">§ REFUND MATRIX</span>
              All processing thresholds remain strictly non-refundable due to instantaneous down-stream allocation of active clinical scheduling assets.
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTORABLE RECOVERY EVALUATIONS GRID ──
      <section id="results" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[var(--color-line)]">
        <div className="mb-16">
          <div className="eyebrow mb-4">Case Evaluations</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter m-0">
            Monitored functional <span className="display">progress histories</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-line)] p-8 flex flex-col justify-between gap-8 rounded-lg">
              <div>
                <span className="text-[var(--color-lime)] opacity-60 block mb-4">{Icons.quote}</span>
                <p className="text-[var(--color-text)] text-[15px] leading-relaxed m-0 font-normal">"{t.quote}"</p>
              </div>
              <div className="pt-5 border-t border-[var(--color-line)]">
                <div className="mono text-xs text-[var(--color-lime)] font-medium mb-1">{t.metric}</div>
                <div className="text-sm font-semibold tracking-tight text-white">{t.name}</div>
                <div className="mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider mt-0.5">{t.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* ── CASE INTAKE TRIAGE FRAMEWORK ── */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-2">§ INITIAL TRIAGE</div>
          <h2 className="text-4xl font-normal tracking-tight m-0 text-white">Initiate your intake review</h2>
          <p className="text-sm text-[var(--color-text-2)] mt-3">Provide your system history indicators below to isolate your primary biological bottlenecks.</p>
        </div>

        {submitted ? (
          <div className="border border-[var(--color-line)] bg-[var(--color-surface)] p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--color-lime)]/10 text-[var(--color-lime)] flex items-center justify-center mx-auto mb-4">{Icons.check}</div>
            <h3 className="text-xl font-bold tracking-tight m-0 mb-2 text-white">Case file compiled successfully</h3>
            <p className="text-sm text-[var(--color-text-2)] m-0">Your systemic data has cleared encryption. Expect response coordination parameters within 24 business hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <label className="mono text-[11px] text-[var(--color-text-2)] uppercase tracking-widest block mb-1">Full Name</label>
              <input type="text" name="name" required placeholder="Identity confirmation" value={formData.name} onChange={handleChange} className="field-input"/>
            </div>
            <div>
              <label className="mono text-[11px] text-[var(--color-text-2)] uppercase tracking-widest block mb-1">Email Address</label>
              <input type="email" name="email" required placeholder="Secure destination node" value={formData.email} onChange={handleChange} className="field-input"/>
            </div>
            <div>
              <label className="mono text-[11px] text-[var(--color-text-2)] uppercase tracking-widest block mb-1">Primary Diagnosis</label>
              <input type="text" name="diagnosis" placeholder="e.g. Fibromyalgia, Sensitization, Lumbar Pathologies..." value={formData.diagnosis} onChange={handleChange} className="field-input"/>
            </div>
            <div>
              <label className="mono text-[11px] text-[var(--color-text-2)] uppercase tracking-widest block mb-1">Somatic History / Backstory</label>
              <textarea name="message" rows={4} required placeholder="Detail current tracking boundaries, limitations, and historical therapeutic modalities tried..." value={formData.message} onChange={handleChange} className="field-input"/>
            </div>
            <button type="submit" disabled={sending} className="btn btn-lime w-full text-center py-4 uppercase mono text-xs tracking-widest font-bold mt-4">
              {sending ? "Transmitting Profile..." : "Transmit Strategic Intake Protocol ⌁"}
            </button>
          </form>
        )}
      </section>

      {/* ── FOOTER MANDATE & SYSTEM DISCLOSURES ── */}
      <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg-2)] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 mono text-[10px] text-[var(--color-text-3)] tracking-wider">
          <div>© {new Date().getFullYear()} LIFESTYLE MEDICINE INTERVENTIONS. TRADESYNC SYSTEM ADAPTATION.</div>
          <div className="text-center md:text-right">DISCLAIMER: COACHING BLUEPRINTS ACT SOLELY AS BEHAVIORAL PATTERN MODIFICATIONS, NOT CONSTITUTING ACUTE MEDICAL OR PRESCRIPTION ANCHORS.</div>
        </div>
      </footer>

    </div>
  );
}