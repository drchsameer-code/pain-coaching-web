"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CONFIG_LINKS, BANK_DETAILS } from '../../data/coachingData';

function SubscriptionFormContent() {
  const searchParams = useSearchParams();
  const planSelected = searchParams.get('plan') === '4-month' ? '4-Month Intensive Track' : '6-Month Transformation Track';
  const structuralAmount = searchParams.get('plan') === '4-month' ? '$450 Initial Enrollment' : '$350 Initial Enrollment';

  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-16">
        
        {/* Header Block */}
        <div className="border-b border-[var(--color-line)] pb-8 mb-12">
          <div className="mono text-[11px] text-[var(--color-lime)] tracking-widest uppercase mb-2">§ ENROLLMENT GATEWAY</div>
          <h1 className="text-4xl font-normal tracking-tight m-0 text-white">
            Complete your <span className="display">track subscription</span>
          </h1>
          <div className="mt-4 inline-flex items-center gap-3 bg-[var(--color-bg-2)] border border-[var(--color-line)] px-4 py-2 rounded">
            <span className="mono text-xs text-[var(--color-text-2)]">SELECTED PROTOCOL:</span>
            <span className="mono text-xs text-[var(--color-lime)] font-semibold uppercase tracking-wider">{planSelected} ({structuralAmount})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          
          {/* BANK WIRE SPECIFICATIONS LEDGER CARD */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-line)] p-8 relative">
            <div className="mono text-[11px] text-[var(--color-text-3)] tracking-wider mb-4">OPTION 01: DIRECT SECURE BANK WIRE</div>
            <h3 className="text-xl font-bold tracking-tight m-0 text-white mb-2">Transfer Instructions</h3>
            <p className="text-sm text-[var(--color-text-2)] leading-relaxed mb-6">
              To activate your dedicated somatic monitoring schedule immediately, transmit your initial program enrollment fee to the audited account specifications listed below.
            </p>

            {/* Strict Grid Ledger with Province Feed */}
            <div className="border border-[var(--color-line)] bg-[#07070a]/50 p-6 space-y-4 rounded">
              <div className="flex justify-between items-center border-b border-[var(--color-line)] pb-2.5">
                <span className="mono text-xs text-[var(--color-text-3)] uppercase">Bank Name</span>
                <span className="mono text-sm text-white font-medium">{BANK_DETAILS.bankName}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[var(--color-line)] pb-2.5">
                <span className="mono text-xs text-[var(--color-text-3)] uppercase">Account Title</span>
                <span className="mono text-sm text-[var(--color-lime)] font-medium">{BANK_DETAILS.accountTitle}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[var(--color-line)] pb-2.5">
                <span className="mono text-xs text-[var(--color-text-3)] uppercase">Account Number</span>
                <span className="mono text-sm text-white font-bold select-all tracking-wider">{BANK_DETAILS.accountNumber}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[var(--color-line)] pb-2.5">
                <span className="mono text-xs text-[var(--color-text-3)] uppercase">IBAN routing</span>
                <span className="mono text-sm text-white font-mono select-all tracking-tight">{BANK_DETAILS.iban}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="mono text-xs text-[var(--color-text-3)] uppercase">Province</span>
                <span className="mono text-sm text-white font-medium">Islamabad Capital Territory (ICT)</span>
              </div>
            </div>

            {/* Action Validation Prompt Alert Box */}
            <div className="mt-6 p-4 border border-[var(--color-coral)]/30 bg-[var(--color-coral)]/5 rounded flex gap-4 items-start">
              <span className="text-[var(--color-coral)] text-lg leading-none mt-0.5">⌁</span>
              <div className="text-xs text-[var(--color-text-2)] leading-relaxed">
                <strong className="text-white block font-medium mb-1">MANDATORY STEP TO CONCLUDE SETUP:</strong>
                As soon as the financial wire clearance completes, snap a crisp digital snapshot receipt or transaction confirmation screenshot. Send that proof attachment via electronic email transmission straight to <a href={`mailto:${CONFIG_LINKS.email}`} className="text-[var(--color-lime)] underline font-medium">{CONFIG_LINKS.email}</a>. Our internal triage coordination desk will validate metrics and verify your active schedule dashboard within 48 business hours.
              </div>
            </div>
          </div>

          {/* CALENDLY BACKOUT ESCAPE PANEL */}
          <div className="bg-[var(--color-bg-2)] border border-[var(--color-line)] p-8 text-center flex flex-col items-center justify-center">
            <span className="text-white/40 block mb-2 text-lg">✦</span>
            <h4 className="text-lg font-bold tracking-tight m-0 text-white mb-2">Want to book a free pre-assessment call?</h4>
            <p className="text-xs text-[var(--color-text-2)] leading-relaxed max-w-md mx-auto mb-6">
              If you haven't processed an initial assessment timeline or prefer to review your clinical pain presentation profile live with us prior to subscription initiation, grab your open slot now.
            </p>
            <a 
              href={CONFIG_LINKS.calendly} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-full"
            >
              Secure Free 40-Min Consult Call →
            </a>
          </div>

        </div>
      </main>
    </>
  );
}

export default function SubscriptionGatewayPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07070a] flex items-center justify-center mono text-xs text-[var(--color-text-3)]">
        LOADING TRANSMISSION CONSOLE NODE...
      </div>
    }>
      <SubscriptionFormContent />
    </Suspense>
  );
}