import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 grid place-items-center shadow-sm">
              <Rocket size={18} className="text-white" />
            </div>
            <span className="font-semibold text-slate-900 tracking-tight">Loopwork</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50 transition">
              <Star size={16} className="text-amber-500" />
              Star on GitHub
            </button>
            <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
