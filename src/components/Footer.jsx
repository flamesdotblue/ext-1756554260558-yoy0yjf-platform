import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
              <span className="font-semibold text-slate-900">Loopwork</span>
            </div>
            <p className="text-sm text-slate-500 max-w-md">A playful productivity OS blending Kanban, moodboards, and audio—so your creative team can move in one loop.</p>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Loopwork, Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
