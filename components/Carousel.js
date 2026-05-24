"use client";

import { useState, useRef } from "react";
import { CAROUSEL_PILLARS } from "../data/coachingData";

export default function Carousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const dragStart = useRef(null);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(CAROUSEL_PILLARS.length - 1, a + 1));

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

  const p = CAROUSEL_PILLARS[active];

  return (
    <div className="relative border-t border-b border-[var(--color-line)] lg:border-none w-full">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--color-line)] z-10">
        <div
          className="h-full transition-all duration-500"
          style={{
            background: p.accent,
            width: `${((active + 1) / CAROUSEL_PILLARS.length) * 100}%`,
          }}
        />
      </div>

      <div
        ref={trackRef}
        className="carousel-track grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] min-h-[480px] w-full"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-line)] p-8 md:p-14 flex flex-col justify-between gap-12">
          <div>
            <div className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.12em] uppercase mb-8">
              {p.index} / {String(CAROUSEL_PILLARS.length).padStart(2, "0")}
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

        <div className="p-8 md:p-14 flex flex-col justify-between gap-12">
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-2)] max-w-xl m-0">
            {p.body}
          </p>

          <div className="flex items-center justify-between pt-8 border-t border-[var(--color-line)] w-full">
            <div className="flex gap-2 items-center">
              {CAROUSEL_PILLARS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 6,
                    background: i === active ? p.accent : "var(--color-line-2)",
                  }}
                  aria-label={`Pillar step ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3 items-center" style={{ minWidth: "96px" }}>
              <button
                onClick={prev}
                disabled={active === 0}
                className="w-11 h-11 rounded-full border border-[var(--color-line-2)] bg-transparent text-white disabled:text-[var(--color-text-3)] disabled:border-[var(--color-line)] disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:bg-white/5"
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={active === CAROUSEL_PILLARS.length - 1}
                className="w-11 h-11 rounded-full font-bold flex items-center justify-center disabled:cursor-not-allowed transition-all duration-300"
                style={{
                  background: active === CAROUSEL_PILLARS.length - 1 ? "transparent" : p.accent,
                  border: active === CAROUSEL_PILLARS.length - 1 ? "1px solid var(--color-line)" : "1px solid transparent",
                  color: active === CAROUSEL_PILLARS.length - 1 ? "var(--color-text-3)" : "#07070a",
                  opacity: active === CAROUSEL_PILLARS.length - 1 ? 0.3 : 1
                }}
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