import React, { useEffect, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CalendarDays, CheckCircle2, ShieldCheck } from 'lucide-react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { CALENDLY_URL, WORKFLOW_CALL_PURPOSE } from '../config/calendly';
import { INQUIRY_ENDPOINT } from '../config/inquiry';

const inquirySchema = z.object({
  manualWork: z.string().trim().min(5, 'Tell us the manual task in a few words.'),
  software: z.string().trim().min(2, 'Tell us which software your team uses.'),
  name: z.string().trim().min(2, 'Please enter your name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  companyWebsite: z.string().optional(),
});

type InquiryInputs = z.infer<typeof inquirySchema>;
type WorkflowCallPageProps = { mode: 'inquiry' | 'book' };

const fieldClass = 'mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-deep-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100';

const WorkflowCallPage: React.FC<WorkflowCallPageProps> = ({ mode }) => {
  const [inquiry, setInquiry] = useState<InquiryInputs | null>(null);
  const [scheduled, setScheduled] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const schedulerRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InquiryInputs>({ resolver: zodResolver(inquirySchema) });

  useCalendlyEventListener({ onEventScheduled: () => setScheduled(true) });

  useEffect(() => {
    if (inquiry) window.setTimeout(() => schedulerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }, [inquiry]);

  const showScheduler = mode === 'book' || inquiry !== null;

  const submitInquiry = async (data: InquiryInputs) => {
    setSubmissionError(null);
    try {
      const response = await fetch(INQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'website_inquiry', ...data }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || 'Inquiry could not be saved.');
      setInquiry(data);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Inquiry could not be saved. Please try again.');
    }
  };

  return (
    <div className="bg-soft-gray">
      <header className="bg-deep-navy px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-light-teal">One short next step</p>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-6xl">{showScheduler ? 'Book a 20-Minute Workflow Call' : 'Show us what is still manual.'}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">{WORKFLOW_CALL_PURPOSE}</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        {!showScheduler && (
          <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-start">
            <form onSubmit={handleSubmit(submitInquiry)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
              <h2 className="font-heading text-3xl font-bold text-deep-navy">Four quick details</h2>
              <p className="mt-3 leading-7 text-dark-gray">No long brief. A rough answer is enough to start.</p>
              <div className="mt-8 space-y-6">
                <div>
                  <label htmlFor="manualWork" className="font-bold text-deep-navy">What is your team still doing manually?</label>
                  <textarea id="manualWork" rows={4} {...register('manualWork')} className={fieldClass} placeholder="Example: following up on new inquiries and missing information" />
                  {errors.manualWork && <p className="mt-2 text-sm text-red-700">{errors.manualWork.message}</p>}
                </div>
                <div>
                  <label htmlFor="software" className="font-bold text-deep-navy">What software do you already use?</label>
                  <input id="software" {...register('software')} className={fieldClass} placeholder="Example: WellSky, Gmail, Google Sheets" />
                  {errors.software && <p className="mt-2 text-sm text-red-700">{errors.software.message}</p>}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-bold text-deep-navy">Name</label>
                    <input id="name" autoComplete="name" {...register('name')} className={fieldClass} placeholder="Your name" />
                    {errors.name && <p className="mt-2 text-sm text-red-700">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="font-bold text-deep-navy">Email</label>
                    <input id="email" type="email" autoComplete="email" {...register('email')} className={fieldClass} placeholder="you@company.com" />
                    {errors.email && <p className="mt-2 text-sm text-red-700">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="companyWebsite">Company website</label>
                  <input id="companyWebsite" tabIndex={-1} autoComplete="off" {...register('companyWebsite')} />
                </div>
              </div>
              {submissionError && <p role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{submissionError} Your answers are still here—retry, or use <a href="mailto:info@ariolabs.tech" className="font-bold underline">info@ariolabs.tech</a>.</p>}
              <button type="submit" disabled={isSubmitting} className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-electric-teal px-7 py-4 font-bold text-deep-navy transition hover:bg-light-teal disabled:cursor-wait disabled:opacity-60">{isSubmitting ? 'Saving…' : 'Send & Continue'} {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}</button>
              <p className="mt-4 text-center text-xs leading-5 text-slate-500">We save these four details so your inquiry is not lost. Booking the call afterward is optional.</p>
            </form>

            <aside className="rounded-2xl bg-deep-navy p-7 text-white md:p-9">
              <CalendarDays className="h-9 w-9 text-light-teal" />
              <h2 className="mt-5 font-heading text-2xl font-bold">Rather talk immediately?</h2>
              <p className="mt-3 leading-7 text-slate-300">Skip the inquiry and choose a time directly.</p>
              <Link to="/book" className="mt-6 inline-flex items-center font-bold text-light-teal hover:underline">Book a 20-Minute Workflow Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <div className="mt-8 border-t border-slate-700 pt-6 text-sm leading-6 text-slate-300"><ShieldCheck className="mb-3 h-6 w-6 text-light-teal" />We start with one repetitive admin workflow and the software you already use.</div>
            </aside>
          </div>
        )}

        {showScheduler && (
          <section ref={schedulerRef} className="scroll-mt-24">
            {inquiry && (
              <div className="mx-auto mb-7 max-w-4xl rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <p className="flex items-center gap-2 font-bold"><CheckCircle2 className="h-5 w-5" />Your inquiry is saved, {inquiry.name}.</p>
                <p className="mt-2 text-sm leading-6">Booking is optional. If you want to talk now, choose a time below; your four details will be carried into the booking form.</p>
              </div>
            )}
            {scheduled ? (
              <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-sm md:p-12">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h2 className="mt-5 font-heading text-3xl font-bold text-deep-navy">Your workflow call is booked.</h2>
                <p className="mt-4 leading-7 text-dark-gray">Calendly will send the confirmation and meeting details. Bring the repetitive task and the software your team already uses.</p>
                <Link to="/" className="mt-7 inline-flex font-bold text-cyan-700 hover:underline">Back to ArioLabs</Link>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <InlineWidget
                  url={CALENDLY_URL}
                  prefill={inquiry ? { name: inquiry.name, email: inquiry.email, customAnswers: { a1: inquiry.manualWork, a2: inquiry.software } } : undefined}
                  utm={{ utmSource: 'ariolabs-website', utmMedium: mode, utmCampaign: 'workflow-call' }}
                  pageSettings={{ hideEventTypeDetails: true, backgroundColor: 'ffffff', textColor: '0f172a', primaryColor: '0e7490', hideGdprBanner: false }}
                  styles={{ height: '760px', minWidth: '320px' }}
                  iframeTitle="Book a 20-Minute Workflow Call with ArioLabs"
                />
              </div>
            )}
            <p className="mt-6 text-center text-sm text-slate-500">Prefer email? <a href="mailto:info@ariolabs.tech" className="font-semibold text-cyan-700 hover:underline">info@ariolabs.tech</a></p>
          </section>
        )}
      </main>
    </div>
  );
};

export default WorkflowCallPage;
