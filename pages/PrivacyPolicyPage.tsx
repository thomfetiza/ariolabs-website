
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-soft-gray pt-24 pb-16">
                <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-deep-navy">Privacy Policy</h1>
                    <p className="text-lg text-dark-gray mt-4">Last Updated: August 18, 2026</p>
                </div>
            </header>
            <main className="py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8 space-y-8 text-lg text-dark-gray/90 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">1. Information We Collect</h2>
                        <p>We collect information that you voluntarily provide through our website inquiry form, email, scheduling page, or other direct communication. This may include:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>Your name</li>
                            <li>Your email address</li>
                            <li>The manual work you want help with</li>
                            <li>The software your team already uses</li>
                            <li>Any other information you choose to provide in your message</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">2. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>To respond to your inquiries and provide you with the information or services you have requested.</li>
                            <li>To evaluate whether a requested workflow is a supported fit.</li>
                            <li>To provide and support an agreed service.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">3. Data Security</h2>
                        <p>We are committed to protecting your information. We implement industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.</p>
                        <p>We will never sell, rent, or lease your personal information to third parties.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">4. Your Rights</h2>
                        <p>You have the right to access, update, or request deletion of your personal information that we hold. To make such a request, please contact us at the email address provided below.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold font-heading text-deep-navy">5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li><strong>Email:</strong> info@ariolabs.tech</li>
                            <li><strong>Location:</strong> Houston, Texas</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;
