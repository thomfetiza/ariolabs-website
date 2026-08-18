import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => (
  <div className="bg-white">
    <header className="bg-deep-navy px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-light-teal">How ArioLabs works</p>
        <h1 className="mt-4 font-heading text-4xl font-bold md:text-6xl">Fix one annoying workflow without replacing everything.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">ArioLabs helps owner-led service businesses automate one repetitive admin process using software they already have. You see and approve the exact workflow before it touches live operations.</p>
      </div>
    </header>
    <main className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-6 md:grid-cols-2">
        {[
          ['Keep the software you already use', 'We first check whether a feature you already pay for can solve the problem properly.'],
          ['Test before live work', 'Your version runs with fictional or test information until the agreed checklist passes.'],
          ['Keep important decisions human', 'Sensitive, unusual, urgent, or consequential situations stop and go to your staff.'],
          ['Know the price and the limits', 'One workflow, a fixed scope, clear payment steps, and no required monthly retainer.'],
        ].map(([title, copy]) => <article key={title} className="rounded-xl border border-slate-200 p-7"><ShieldCheck className="h-7 w-7 text-cyan-700" /><h2 className="mt-4 font-heading text-2xl font-bold text-deep-navy">{title}</h2><p className="mt-3 leading-7">{copy}</p></article>)}
      </div>
      <section className="mt-14 rounded-2xl bg-soft-gray p-7 md:p-10">
        <h2 className="font-heading text-3xl font-bold text-deep-navy">From daily headache to working handoff</h2>
        <ol className="mt-6 space-y-4">{['Show us what your team still does manually', 'Check the software you already have', 'Choose one clear workflow to fix', 'Approve the messages, rules, and pass/fail checklist', 'Run the complete workflow in test mode', 'Launch only after you approve it'].map((item, index) => <li key={item} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-deep-navy text-sm font-bold text-white">{index + 1}</span><span className="pt-0.5 font-semibold">{item}</span></li>)}</ol>
        <p className="mt-7 flex gap-3 text-sm leading-6 text-dark-gray"><Check className="h-5 w-5 shrink-0 text-success-green" />If the current software already solves it better, ArioLabs will say so.</p>
      </section>
    </main>
  </div>
);

export default AboutPage;
