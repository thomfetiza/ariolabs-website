
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const PricingCard: React.FC<{ title: string, price: string, description: string, features: string[], featured?: boolean }> = ({ title, price, description, features, featured }) => {
    return (
        <div className={`border rounded-lg p-8 flex flex-col ${featured ? 'border-electric-teal border-2 transform scale-105 shadow-2xl bg-white' : 'border-gray-200 bg-gray-50'}`}>
            {featured && <span className="bg-electric-teal text-white text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">Featured</span>}
            <h3 className="text-2xl font-bold font-heading mb-2">{title}</h3>
            <p className="text-4xl font-bold mb-4">${price}</p>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-success-green mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link to={`/order?package=${encodeURIComponent(title)}`} className={`w-full mt-auto text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${featured ? 'bg-electric-teal text-white hover:bg-light-teal hover:text-deep-navy' : 'bg-deep-navy text-white hover:bg-gray-700'}`}>
                Get Started
            </Link>
        </div>
    );
};

const USBusinessesPage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-deep-navy text-white pt-24 pb-16">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">Stop Losing Leads in Your Inbox. Automate What's Killing Your Focus.</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">We help U.S. coaches, consultants, and service-based businesses save 10+ hours/week by automating client onboarding, scheduling, and follow-ups.</p>
                    <Link to="/book" className="bg-electric-teal text-white font-bold py-4 px-8 rounded-lg hover:bg-light-teal hover:text-deep-navy transition-all duration-300 transform hover:scale-105">
                        Book a 20-Minute Workflow Call
                    </Link>
                </div>
            </section>
            
            {/* Pricing Section */}
            <SectionWrapper className="py-16 md:py-24 bg-soft-gray">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy mb-4">Simple, Transparent Pricing</h2>
                     <p className="text-lg md:text-xl text-dark-gray max-w-3xl mx-auto">Choose a package that fits your needs. One-time investment, lifetime of efficiency.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    <PricingCard 
                        title="Pilot Sprint"
                        price="497"
                        description="Perfect for automating one specific, painful task."
                        features={["1 Core Automation Workflow", "Discovery & Strategy Call", "Up to 3 App Integrations", "Delivered in 3 Days"]}
                    />
                    <PricingCard 
                        title="Quick Win Automation"
                        price="2,497"
                        description="Our most popular package to overhaul a key part of your business."
                        features={["Up to 3 Core Workflows", "Automated Lead Nurturing", "Client Onboarding System", "30 Days of Support", "Delivered in 7 Days"]}
                        featured
                    />
                    <PricingCard 
                        title="Department Suite"
                        price="4,997"
                        description="A complete automation solution for an entire business department."
                        features={["Unlimited Workflows for 1 Dept.", "Custom CRM Integration", "Advanced Reporting Dashboard", "Team Training Session", "60 Days of Priority Support"]}
                    />
                </div>
            </SectionWrapper>
        </>
    );
};

export default USBusinessesPage;
