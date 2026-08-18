import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-deep-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">We fix one repetitive admin workflow using the software your team already has.</p>
          <a href="mailto:info@ariolabs.tech" className="mt-3 inline-block text-sm font-semibold text-light-teal hover:underline">info@ariolabs.tech</a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
          <Link to="/case-studies" className="hover:text-white">Selected work</Link>
          <Link to="/about" className="hover:text-white">How it works</Link>
          <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link to="/terms-of-service" className="hover:text-white">Terms</Link>
        </div>
      </div>
      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} ArioLabs. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
