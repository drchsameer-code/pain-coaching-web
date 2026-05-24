"use client";

import { useState } from "react";
import { CONFIG_LINKS } from "../data/coachingData";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", diagnosis: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(CONFIG_LINKS.formspreeEndpoint, {
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
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <div className="mono text-[11px] text-[var(--color-text-3)] uppercase tracking-wider mb-2">§ INITIAL TRIAGE</div>
        <h2 className="text-4xl font-normal tracking-tight m-0 text-white">Initiate your intake review</h2>
        <p className="text-sm text-[var(--color-text-2)] mt-3">Provide your system history indicators below to isolate your primary biological bottlenecks.</p>
      </div>

      {submitted ? (
        <div className="border border-[var(--color-line)] bg-[var(--color-surface)] p-12 text-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-lime)]/10 text-[var(--color-lime)] flex items-center justify-center mx-auto mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
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
            <input type="text" name="diagnosis" placeholder="e.g. Fibromyalgia, chronic regional pain syndrome, low back pain, chronic pelvic pain,..." value={formData.diagnosis} onChange={handleChange} className="field-input"/>
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
  );
}