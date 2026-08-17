import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const contactHref = 'mailto:info@ariolabs.tech?subject=One%20Workflow%20Autopilot%20fit%20check';
  const sectionLinks = [['sandbox-demo', 'Sandbox'], ['proof', 'Proof'], ['installation', 'Installation']];

  const goToSection = (sectionId: string) => {
    setOpen(false);
    const scroll = () => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (location.pathname === '/') {
      scroll();
    } else {
      navigate(`/?section=${sectionId}`);
      window.setTimeout(scroll, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-deep-navy text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" aria-label="ArioLabs home" className="flex items-center gap-3">
          <BrandLogo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {sectionLinks.map(([id, label]) => <button key={id} type="button" onClick={() => goToSection(id)} className="text-sm font-semibold text-slate-200 hover:text-light-teal">{label}</button>)}
          <Link to="/about" className="text-sm font-semibold text-slate-200 hover:text-light-teal">How we work</Link>
          <a href={contactHref} className="rounded-lg bg-electric-teal px-5 py-3 text-sm font-bold text-deep-navy hover:bg-light-teal">Show Us the Workflow</a>
        </nav>
        <button type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="shrink-0 rounded-md p-2 md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-slate-800 px-5 py-5 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          {sectionLinks.map(([id, label]) => <button key={id} type="button" onClick={() => goToSection(id)} className="py-2 text-left font-semibold text-slate-200">{label}</button>)}
          <Link to="/about" onClick={() => setOpen(false)} className="py-2 font-semibold text-slate-200">How we work</Link>
          <a href={contactHref} className="mt-2 rounded-lg bg-electric-teal px-5 py-3 text-center font-bold text-deep-navy">Show Us the Workflow</a>
        </div>
      </nav>}
    </header>
  );
};

export default Header;
