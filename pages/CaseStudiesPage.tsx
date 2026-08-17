import React from 'react';
import { ArrowRight, FileCheck2, Megaphone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: '55-location audit workflow',
    industry: 'Finance & compliance',
    description: 'Standardized reports from 55 locations, automated currency conversion and aggregation, and flagged anomalies for human review.',
    outcome: 'A centralized, traceable workflow replaced fragmented manual submissions.',
    slug: 'finance-audit-team',
    icon: FileCheck2,
  },
  {
    title: 'Multi-platform media workflow',
    industry: 'Media & marketing',
    description: 'Connected content planning, publishing, and performance reporting across the team’s existing social platforms.',
    outcome: 'The earlier project summary reported 250% engagement growth over two months.',
    slug: 'media-company',
    icon: Megaphone,
  },
  {
    title: 'AI-assisted prospecting workflow',
    industry: 'Business services',
    description: 'Combined lead prioritization, outreach, scheduling, CRM updates, and human follow-up in one bounded sales workflow.',
    outcome: 'The earlier project summary reported two B2B clients closed within two weeks of deployment.',
    slug: 'prospecting-workflow',
    icon: Users,
  },
];

const CaseStudiesPage: React.FC = () => (
  <div className="bg-soft-gray">
    <header className="bg-deep-navy px-5 pb-16 pt-20 text-white md:px-8 md:pb-20 md:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-light-teal">Selected work</p>
        <h1 className="mt-4 font-heading text-4xl font-bold md:text-6xl">Workflow builds, without borrowed logos.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">These summaries come from earlier ArioLabs project records. Client identities are withheld. They demonstrate relevant delivery experience, not outcomes from the new One Workflow Autopilot package.</p>
      </div>
    </header>

    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-3">
      {caseStudies.map(({ title, industry, description, outcome, slug, icon: Icon }) => (
        <article key={slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <Icon className="h-9 w-9 text-cyan-700" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{industry}</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-deep-navy">{title}</h2>
          <p className="mt-4 leading-7 text-dark-gray">{description}</p>
          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-sm font-bold uppercase tracking-wide text-deep-navy">Recorded outcome</p>
            <p className="mt-2 leading-7 text-dark-gray">{outcome}</p>
          </div>
          <Link to={`/case-studies/${slug}`} className="mt-7 inline-flex items-center font-bold text-cyan-700 hover:underline">Read the study <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </article>
      ))}
    </main>
  </div>
);

export default CaseStudiesPage;
