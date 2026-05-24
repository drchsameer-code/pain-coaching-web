"use client";

import { useState, useRef } from "react";

const pillars = [
  {
    index: "01",
    title: "Movement\nMapping",
    short: "ACTIVE REHAB",
    body: "Avoidance of movement reinforces maladaptive neural pain maps and accelerates biological deconditioning. Through graded exposure frameworks and individualized movement mapping—including precise strength metrics and custom mobility drills—we systematically expand your pain-free baseline. This methodically restores tissue tolerance and rebuilds deep proprioceptive confidence without triggering protective inflammatory flare-ups.",
    stat: "↑ Functional mobility scores 3× average",
    accent: "var(--lime)",
  },
  {
    index: "02",
    title: "Neuroplasticity\n& Pain Education",
    short: "NEURAL REWIRING",
    body: "Chronic pain states often cross over into learned central nervous sensitization—where the brain continues to output real defensive messages long after tissues have stabilized. By applying modern pain neuroscience metrics, we consciously retrain the central threat-detection filters. Clients learn to distinguish true tissue damage indicators from safe neurological echoes, downregulating baseline sensitivity.",
    stat: "↓ 38% central sensitization in 12 weeks",
    accent: "var(--violet)",
  },
  {
    index: "03",
    title: "Lifestyle\nOptimization",
    short: "SYSTEMIC BALANCING",
    body: "Persistent pain alters global autonomic and metabolic baselines, leaving the immune loop in a hyper-reactive state. By systematically mapping biological variable inputs—anchoring broken sleep architectures to recover deep-wave stages, reducing sustained hypothalamic-pituitary-adrenal (HPA) axis overdrive, and applying anti-inflammatory metabolic nutrition—we create the necessary internal chemistry for recovery.",
    stat: "↑ 45% biological recovery & resilience index",
    accent: "var(--coral)",
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const dragStart = useRef(null);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(pillars.length - 1, a + 1));

  const onPointerDown = (e) => {
    dragStart.current = e.clientX;
    trackRef.current?.setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    dragStart.current = null;
  };

  const p = pillars[active];

  return (
    <div className="relative border-t border-b border-[var(--line)] lg:border-none w-full">
      {/* Progress bar tracking line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--line)] z-10">
        <div
          className="h-full transition-all duration-500"
          style={{
            background: p.accent,
            width: `${((active + 1) / pillars.length) * 100}%`,
          }}
        />
      </div>

      {/* Split panel workspace layout */}
      <div
        ref={trackRef}
        className="carousel-track grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] min-h-[480px] w-full"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* Left Side Info Panel */}
        <div className="border-b lg:border-b-0 lg:border-r border-[var(--line)] p-8 md:p-14 flex flex-col justify-between gap-12">
          <div>
            <div className="mono text-[11px] text-[var(--text-3)] tracking-[0.12em] uppercase mb-8">
              {p.index} / {String(pillars.length).padStart(2, "0")}
            </div>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] m-0 whitespace-pre-line text-white">
              {p.title.split("\n")[0]}
              <br />
              <span className="display transition-colors duration-500" style={{ color: p.accent }}>
                {p.title.split("\n")[1]}
              </span>
            </h3>
          </div>

          <div>
            <div className="tag mb-4 transition-all duration-500" style={{ borderColor: p.accent, color: p.accent }}>
              § {p.short}
            </div>
            <div className="mono text-xs md:text-sm font-medium transition-colors duration-500" style={{ color: p.accent }}>
              {p.stat}
            </div>
          </div>
        </div>

        {/* Right Side Content Block */}
        <div className="p-8 md:p-14 flex flex-col justify-between gap-12">
          <p className="text-base md:text-lg leading-relaxed text-[var(--text-2)] max-w-xl m-0">
            {p.body}
          </p>

          {/* Navigation Controls Hub */}
          <div className="flex items-center justify-between pt-8 border-t border-[var(--line)] w-full">
            {/* Slide dot matrices */}
            <div className="flex gap-2 items-center">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 6,
                    background: i === active ? p.accent : "var(--line-2)",
                  }}
                  aria-label={`Jump to structural step ${i + 1}`}
                />
              ))}
            </div>

            {/* High Visibility Navigation Buttons */}
            <div className="flex gap-3 items-center" style={{ minWidth: "96px" }}>
              <button
                onClick={prev}
                disabled={active === 0}
                className="w-11 h-11 rounded-full border border-[var(--line-2)] bg-transparent text-white disabled:text-[var(--text-3)] disabled:border-[var(--line)] disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:bg-white/5"
                aria-label="Previous core item"
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={active === pillars.length - 1}
                className="w-11 h-11 rounded-full font-bold flex items-center justify-center disabled:cursor-not-allowed transition-all duration-300"
                style={{
                  background: active === pillars.length - 1 ? "transparent" : p.accent,
                  border: active === pillars.length - 1 ? "1px solid var(--line)" : "1px solid transparent",
                  color: active === pillars.length - 1 ? "var(--text-3)" : "#07070a",
                  opacity: active === pillars.length - 1 ? 0.3 : 1
                }}
                aria-label="Next core item"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}