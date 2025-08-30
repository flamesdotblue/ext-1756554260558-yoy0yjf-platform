import React from 'react';
import { LayoutGrid, Palette, Mic, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, accent }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition relative overflow-hidden">
    <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full ${accent} opacity-20`} />
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">
        <Icon size={18} />
      </div>
      <div className="text-lg font-semibold text-slate-900">{title}</div>
    </div>
    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything your creative squad needs</h2>
          <p className="mt-3 text-slate-600">Plan, explore, and ship together in one playful canvas designed for collaboration.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={LayoutGrid}
            title="Kanban that clicks"
            desc="Lightweight columns, fast drag-and-drop, and instant reactions keep work moving without friction."
            accent="bg-violet-400"
          />
          <FeatureCard
            icon={Palette}
            title="Shared moodboards"
            desc="Drop images, colors, and references; see edits live. Comment right on the pixels."
            accent="bg-fuchsia-400"
          />
          <FeatureCard
            icon={Mic}
            title="Audio huddles"
            desc="Spin up quick voice rooms with push-to-talk and ambient waveforms—context stays with the work."
            accent="bg-cyan-400"
          />
          <FeatureCard
            icon={Users}
            title="Presence & cursors"
            desc="See teammates in real-time with playful cursors, avatars, and emoji bursts when you ship."
            accent="bg-amber-400"
          />
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-white p-8">
            <h3 className="text-2xl font-semibold">Designed with a Figma-like flow</h3>
            <p className="mt-2 text-white/80">Bright, playful accents meet precise interactions. Loopwork feels familiar for design-forward teams but focuses on momentum across the whole project.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white/10 p-4">Multi-player editing</div>
              <div className="rounded-xl bg-white/10 p-4">Keyboard-first navigation</div>
              <div className="rounded-xl bg-white/10 p-4">Comment + mention anywhere</div>
              <div className="rounded-xl bg-white/10 p-4">Versioned explorations</div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-slate-900">Try Loopwork free</h3>
            <p className="mt-2 text-slate-600">No credit card. Invite the team and spin up your first board in minutes.</p>
            <form className="mt-4 flex flex-col gap-3">
              <input type="email" placeholder="you@studio.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <button type="submit" className="rounded-xl bg-slate-900 text-white px-4 py-3 hover:bg-slate-800 transition">Create workspace</button>
              <p className="text-xs text-slate-500">By continuing you agree to our Terms.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
