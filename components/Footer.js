import React from 'react';
import { CONFIG_LINKS } from '../data/coachingData';

export default function Footer() {
  // URL-encode a standard, warm welcoming message for inbound pain coaching inquiries
  const whatsappWelcomeMessage = encodeURIComponent("Hello Dr. Ahmed, I would like to learn more about the Chronic Pain Free lifestyle medicine tracks.");
  const whatsappApiUrl = `https://wa.me/${CONFIG_LINKS.phone.replace('+', '')}?text=${whatsappWelcomeMessage}`;

  return (
    <footer className="border-t border-[var(--color-line)] bg-[#07070a] py-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8">
        
        {/* Communication Nodes Alignment */}
        <div className="flex flex-col md:flex-row justify-end items-start md:items-center gap-6 pb-4">
          <div className="flex flex-wrap gap-6 items-center mono text-xs text-[var(--color-text-2)]">
            
            {/* Instagram Link node */}
            <a href={CONFIG_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-lime)] transition-colors no-underline group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="text-white border-b border-transparent group-hover:border-[var(--color-lime)] pb-0.5">@drchahmed</span>
            </a>

            {/* Email Secure Desk */}
            <a href={`mailto:${CONFIG_LINKS.email}`} className="flex items-center gap-2 hover:text-[var(--color-lime)] transition-colors no-underline group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span className="text-white border-b border-transparent group-hover:border-[var(--color-lime)] pb-0.5">{CONFIG_LINKS.email}</span>
            </a>

            {/* WhatsApp Telemetry Chat Route */}
            <a href={whatsappApiUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-lime)] transition-colors no-underline group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-none">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9 8.5 8.5 0 0 1 8.5 8.5z" stroke="currentColor" />
                <path d="M16 13c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0A5.6 5.6 0 0 1 10 11.2a6.2 6.2 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1 0-.3 0-.4L9 7c-.1-.4-.3-.4-.4-.4h-.4c-.2 0-.4.1-.6.3A2.8 2.8 0 0 0 6 9c0 1.1.5 2.2 1.2 3.1A11.4 11.4 0 0 0 12 16c2.5.9 2.5.6 3 .6a2.6 2.6 0 0 0 1.7-1.2c.2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3z" fill="currentColor" />
              </svg>
              <span className="text-white border-b border-transparent group-hover:border-[var(--color-lime)] pb-0.5">{CONFIG_LINKS.phone}</span>
            </a>

          </div>
        </div>

        {/* Lower Legal Disclaimer Strip */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mono text-[10px] text-[var(--color-text-3)] tracking-wider pt-4 border-t border-[var(--color-line)]">
          <div>© {new Date().getFullYear()} LIFESTYLE MEDICINE INTERVENTIONS. TRADESYNC PROTOCOL ADAPTATION.</div>
          <div className="text-center lg:text-right max-w-2xl leading-normal">
            DISCLAIMER: BEHAVIOURAL PROTOCOLS ARE DESIGNED FOR ACTIVE HABIT NEUROREHABILITATION WORK AND PATTERN COACHING; THEY DO NOT CONSTITUTE ACUTE MEDICAL PRESCRIPTIONS, DIAGNOSES, OR SURGICAL INTERVENTIONS.
          </div>
        </div>
      </div>
    </footer>
  );
}