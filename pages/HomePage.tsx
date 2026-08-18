import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle2, FileCheck2, Play, RotateCcw, ShieldCheck, UserCheck, X } from 'lucide-react';

const steps = [
  ['New inquiry arrives', 'A website form, email, call note, or other agreed starting point enters the workflow.'],
  ['Send the approved reply', 'The family receives the acknowledgment and next steps your team approved.'],
  ['Collect missing basics', 'Routine questions and reminders go out without someone remembering each time.'],
  ['Stop when a person is needed', 'Sensitive, unusual, or urgent situations go directly to staff.'],
  ['Hand off to the coordinator', 'A ready inquiry reaches the right person with its status recorded.'],
];

const installationIncludes = [
  'One repetitive workflow fixed end to end',
  'A clear map of how your team handles it today',
  'Connections to supported tools you already use',
  'Your approved messages, reminders, rules, and handoffs',
  'A private test version before anything touches live work',
  'A simple pass/fail checklist and team handoff guide',
  '30 days of fixes for the agreed workflow after launch',
];

const boundaries = [
  'Applicant ranking, rejection, or final hiring decisions',
  'Clinical, licensing, legal, accommodation, or other sensitive judgment',
  'Invented qualification rules or hidden custom integrations',
  'Unsupported promises about savings, results, or return on investment',
];

const HomePage: React.FC = () => {
  const location = useLocation();
  const [demoStep, setDemoStep] = useState(-1);
  const contactHref = 'mailto:info@ariolabs.tech?subject=The%20admin%20work%20our%20team%20still%20chases&body=The%20thing%20we%20still%20do%20manually%20is%3A%0A%0AThe%20software%20we%20already%20use%20is%3A';

  const scrollTo = (sectionId: string) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section');
    if (sectionId) window.setTimeout(() => scrollTo(sectionId), 50);
  }, [location.search]);

  useEffect(() => {
    if (demoStep < 0 || demoStep >= steps.length) return;
    const timer = window.setTimeout(() => setDemoStep((current) => current + 1), 650);
    return () => window.clearTimeout(timer);
  }, [demoStep]);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-deep-navy text-white">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-28 -top-24 h-96 w-96 rounded-full bg-electric-teal blur-3xl" />
          <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-blue-700 blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-light-teal">For owner-led service businesses</p>
            <h1 className="max-w-4xl break-words font-heading text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
              Stop chasing the same admin work every day.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Show us the inquiry, follow-up, reminder, handoff, or status update your team keeps doing manually. We will see if it can run automatically using the software you already have.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={contactHref} className="inline-flex items-center justify-center rounded-lg bg-electric-teal px-7 py-4 font-bold text-deep-navy transition hover:bg-light-teal">
                Show Us What Is Still Manual <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button type="button" onClick={() => scrollTo('sandbox-demo')} className="inline-flex items-center justify-center rounded-lg border border-slate-500 px-7 py-4 font-bold text-white transition hover:border-white hover:bg-white/10">See a Realistic Example</button>
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-300">Keep your current software. Start with one problem. Test before launch.</p>
          </div>

          <div id="sandbox-demo" className="scroll-mt-24 min-w-0 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-2xl backdrop-blur md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-light-teal">Fictional home-care example</p>
                <h2 className="mt-2 font-heading text-2xl font-bold">A new inquiry without the daily chasing</h2>
              </div>
              <ShieldCheck className="h-9 w-9 text-electric-teal" />
            </div>
            <div className="space-y-3">
              {steps.map(([title, description], index) => (
                <div key={title} className={`flex gap-4 rounded-xl border p-4 transition-all duration-300 ${demoStep === index ? 'border-electric-teal bg-cyan-950/70 shadow-[0_0_0_1px_rgba(6,182,212,.25)]' : demoStep > index ? 'border-emerald-700 bg-emerald-950/30' : 'border-slate-700 bg-slate-800/80'}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold ${demoStep > index ? 'bg-emerald-400 text-emerald-950' : 'bg-electric-teal text-deep-navy'}`}>{demoStep > index ? <Check className="h-5 w-5" /> : index + 1}</span>
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{description}</p></div>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-lg bg-slate-950 p-4 text-sm leading-6 text-slate-300">
              Your agency may already have software for this. ArioLabs focuses on the gaps where people still copy, remind, check, route, and update by hand.
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-light-teal">Example only, not a client claim. Care decisions remain with your staff.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={() => setDemoStep(0)} disabled={demoStep >= 0 && demoStep < steps.length} className="inline-flex items-center justify-center rounded-lg bg-electric-teal px-5 py-3 text-sm font-bold text-deep-navy transition hover:bg-light-teal disabled:cursor-wait disabled:opacity-60">
                <Play className="mr-2 h-4 w-4" /> {demoStep >= 0 && demoStep < steps.length ? 'Following the inquiry…' : demoStep === steps.length ? 'Run it again' : 'Follow the inquiry'}
              </button>
              {demoStep >= 0 && <button type="button" onClick={() => setDemoStep(-1)} className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white"><RotateCcw className="mr-2 h-4 w-4" /> Reset</button>}
            </div>
            {demoStep === steps.length && <p className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-700 bg-emerald-950/40 p-3 text-sm font-semibold text-emerald-200"><CheckCircle2 className="h-5 w-5" /> Inquiry is organized and ready for the coordinator.</p>}
          </div>
        </div>
      </section>

      <section className="bg-soft-gray py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">What are you still chasing?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-deep-navy md:text-5xl">The annoying work between your software and your people.</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {['New inquiries', 'Missing information', 'Routine follow-ups', 'Internal handoffs', 'Status updates'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 font-bold text-deep-navy shadow-sm"><Check className="h-5 w-5 shrink-0 text-cyan-700" />{item}</div>
            ))}
          </div>
          <div className="mt-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">How it works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-deep-navy md:text-5xl">You show us the mess. We fix one clear piece.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Show us the annoying part', 'Walk us through the inquiry, follow-up, reminder, handoff, or update your team keeps chasing.'],
              ['We check your current software', 'If a tool you already pay for can solve it properly, we tell you before selling a build.'],
              ['We map one clear workflow', 'We agree on what starts it, what happens automatically, and when a person steps in.'],
              ['You approve the messages and rules', 'Nothing customer-facing or operational is invented behind your back.'],
              ['We test it away from live work', 'Your team sees the exact path and confirms what must work before launch.'],
              ['It goes live when you say so', 'You keep control, receive a handoff guide, and get 30 days of agreed fixes.'],
            ].map(([title, description]) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Check className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-4 font-heading text-xl font-bold text-deep-navy">{title}</h3>
                <p className="mt-2 leading-7 text-dark-gray">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Selected work</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-deep-navy md:text-5xl">Real workflow builds. Client names kept private.</h2>
            <p className="mt-5 text-lg leading-8 text-dark-gray">These anonymized summaries come from earlier ArioLabs projects. They show relevant delivery experience, but they are not presented as results from the new One Workflow Autopilot package.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              [FileCheck2, '55-location audit workflow', 'Standardized submissions, live currency conversion, automated aggregation, and anomaly flags for human review.', '/case-studies/finance-audit-team'],
              [Play, 'Multi-platform media workflow', 'Connected content planning, publishing, and reporting across the team’s existing social channels.', '/case-studies/media-company'],
              [UserCheck, 'AI-assisted prospecting workflow', 'Combined lead prioritization, outreach, scheduling, CRM updates, and human follow-up.', '/case-studies/prospecting-workflow'],
            ].map(([Icon, title, copy, href]) => {
              const ProofIcon = Icon as React.ElementType;
              return <article key={title as string} className="flex flex-col rounded-2xl border border-slate-200 bg-soft-gray p-7"><ProofIcon className="h-8 w-8 text-cyan-700" /><h3 className="mt-5 font-heading text-2xl font-bold text-deep-navy">{title as string}</h3><p className="mt-3 flex-1 leading-7 text-dark-gray">{copy as string}</p><Link to={href as string} className="mt-6 font-bold text-cyan-700 hover:underline">Read the anonymized study →</Link></article>;
            })}
          </div>
          <div id="proof" className="mt-8 grid scroll-mt-24 gap-6 rounded-2xl bg-deep-navy p-7 text-white md:grid-cols-[.75fr_1.25fr] md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-light-teal">Proof before promises</p>
              <h3 className="mt-3 font-heading text-3xl font-bold">See it work before it touches live operations.</h3>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-300">The example above shows exactly what happens from the first inquiry to the staff handoff, including where automation must stop.</p>
              <p className="mt-4 leading-7 text-slate-300">Your version stays in test mode until the agreed checklist passes and you approve the launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_.85fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">One workflow, fixed scope</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-deep-navy md:text-5xl">Know exactly what you get for $1,500.</h2>
            <p className="mt-4 text-3xl font-bold text-deep-navy">$1,500 fixed</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {installationIncludes.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-success-green" /><span>{item}</span></li>)}
            </ul>
          </div>
          <aside className="rounded-2xl bg-deep-navy p-7 text-white shadow-xl md:p-9">
            <h3 className="font-heading text-2xl font-bold">How payment works</h3>
            <div className="mt-6 space-y-5">
              <div><p className="text-2xl font-bold text-light-teal">$500 to build the test version</p><p className="mt-1 text-slate-300">Paid only after we agree on the workflow and the pass/fail checklist.</p></div>
              <div className="border-t border-slate-700 pt-5"><p className="text-2xl font-bold text-light-teal">Refunded if the test cannot pass</p><p className="mt-1 text-slate-300">If ArioLabs cannot make the agreed workflow pass in test mode, the $500 is refunded.</p></div>
              <div className="border-t border-slate-700 pt-5"><p className="text-2xl font-bold text-light-teal">$1,000 before launch</p><p className="mt-1 text-slate-300">Paid after the test passes and you approve moving it into live use.</p></div>
            </div>
            <p className="mt-6 text-sm text-slate-400">Third-party or API costs are disclosed separately and require customer approval.</p>
          </aside>
        </div>
      </section>

      <section className="bg-soft-gray py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3"><UserCheck className="h-8 w-8 text-cyan-700" /><h2 className="font-heading text-3xl font-bold text-deep-navy">You stay in control</h2></div>
            <p className="mt-5 text-lg leading-8">Your team approves the workflow, messages, reminders, rules, and moments that need a person. Nothing goes live until you sign off.</p>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-deep-navy">What always stays with people</h2>
            <ul className="mt-5 space-y-4">
              {boundaries.map((item) => <li key={item} className="flex gap-3"><X className="mt-0.5 h-5 w-5 shrink-0 text-red-600" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-deep-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold md:text-5xl">What is the one thing your office keeps chasing?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Send us the manual task and the software you already use. We will tell you whether there is a sensible fix, even if the answer is to use a feature you already have.</p>
          <a href={contactHref} className="mt-8 inline-flex items-center justify-center rounded-lg bg-electric-teal px-8 py-4 font-bold text-deep-navy transition hover:bg-light-teal">Show Us What Is Still Manual <ArrowRight className="ml-2 h-5 w-5" /></a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
