
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface CaseStudyLayoutProps {
    title: string;
    industry: string;
    problem: string;
    approach: React.ReactNode;
    solution: string;
    results: string[];
    highlight?: string;
    quote?: string;
    tools: string[];
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ title, industry, problem, approach, solution, results, highlight, quote, tools }) => {
    
    useEffect(() => {
        document.title = `Selected Work – ${title} | ArioLabs`;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="bg-white font-sans">
            <header className="bg-deep-navy text-white pt-24 pb-16">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                    <span className="text-sm font-bold uppercase text-electric-teal tracking-widest mb-4 inline-block">{industry}</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{title}</h1>
                    <p className="mt-5 text-slate-300">Anonymized project summary. Client identity withheld.</p>
                </div>
            </header>

            <SectionWrapper className="py-16 md:py-24" id="problem">
                 <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">The Problem</h2>
                    </div>
                    <div className="md:col-span-2 text-lg text-dark-gray/90 leading-relaxed">
                        <p>{problem}</p>
                    </div>
                </div>
            </SectionWrapper>

             <SectionWrapper className="py-16 md:py-24 bg-soft-gray" id="approach">
                 <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">Our Approach</h2>
                    </div>
                    <div className="md:col-span-2 text-lg text-dark-gray/90 leading-relaxed">
                        {approach}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="py-16 md:py-24" id="solution">
                 <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">The Solution</h2>
                    </div>
                    <div className="md:col-span-2 text-lg text-dark-gray/90 leading-relaxed">
                       <p>{solution}</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="py-16 md:py-24 bg-gradient-to-br from-deep-navy to-[#1E293B] text-white" id="results">
                 <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold font-heading text-white mb-8">Outcome</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {results.map((result, index) => (
                            <div key={index} className="bg-white/10 p-6 rounded-lg">
                                <p className="text-lg font-semibold leading-7 text-gray-100">{result}</p>
                            </div>
                        ))}
                    </div>
                    {highlight && (
                        <div className="mt-12 bg-electric-teal/20 border border-electric-teal text-electric-teal p-6 rounded-lg text-lg">
                            <p><strong>Highlight:</strong> {highlight}</p>
                        </div>
                    )}
                </div>
            </SectionWrapper>

            {quote && (
                <SectionWrapper className="py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-2xl italic text-dark-gray border-l-4 border-electric-teal pl-6">
                            "{quote}"
                        </blockquote>
                    </div>
                </SectionWrapper>
            )}

            <SectionWrapper className="py-16 md:py-24 bg-soft-gray" id="tools">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold font-heading text-deep-navy mb-8">Tools & Platforms Used</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool) => (
                            <span key={tool} className="bg-white text-dark-gray font-medium px-4 py-2 rounded-full shadow-sm border border-gray-200">{tool}</span>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <div className="py-16 text-center">
                 <Link to="/case-studies" className="inline-flex items-center text-electric-teal font-bold hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to All Case Studies
                </Link>
            </div>

        </div>
    );
};

export default CaseStudyLayout;
