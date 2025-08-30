import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Mic, LayoutGrid, Palette, PlayCircle } from 'lucide-react';

const Avatars = () => (
  <div className="flex -space-x-3">
    {["#F59E0B", "#EF4444", "#10B981", "#6366F1"].map((color, i) => (
      <div key={i} className="h-7 w-7 rounded-full ring-2 ring-white" style={{ background: color }} />
    ))}
  </div>
);

const DashboardMock = () => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-gradient-to-r from-white to-slate-50">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="text-xs text-slate-500">Loopwork Dashboard</div>
        <Avatars />
      </div>

      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Kanban */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-3">
          {["Backlog", "In Progress", "Review"].map((col, idx) => (
            <div key={col} className="rounded-xl bg-slate-50/80 border border-slate-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid size={16} className="text-slate-500" />
                  <span className="text-xs font-medium text-slate-700">{col}</span>
                </div>
                <span className="text-[10px] text-slate-500">{idx === 0 ? 3 : idx === 1 ? 2 : 1}</span>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].slice(0, idx === 2 ? 1 : idx === 1 ? 2 : 3).map((card) => (
                  <div key={card} className="rounded-lg bg-white border border-slate-200 p-3 hover:shadow-sm transition">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Exploration #{idx + card}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">{idx === 0 ? 'idea' : idx === 1 ? 'wip' : 'review'}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
                      <div className={`h-1.5 rounded-full ${idx === 0 ? 'w-1/5 bg-rose-400' : idx === 1 ? 'w-3/5 bg-amber-400' : 'w-4/5 bg-emerald-400'}`} />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500 ring-2 ring-white" />
                        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 ring-2 ring-white" />
                        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 ring-2 ring-white" />
                      </div>
                      <div className="text-[10px] text-slate-500">Due {idx + 1}d</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Moodboard */}
        <div className="col-span-12 lg:col-span-5 grid gap-3">
          <div className="rounded-xl bg-slate-50/80 border border-slate-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Palette size={16} className="text-slate-500" />
                <span className="text-xs font-medium text-slate-700">Shared Moodboard</span>
              </div>
              <span className="text-[10px] text-slate-500">Live</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1611162618071-b39a2ec2cfb3?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1604881981286-e775b2d214ae?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1545231187-60c18e0b2d91?q=80&w=800&auto=format&fit=crop"].map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <img src={src} alt="mood" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Audio huddle */}
          <div className="rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white p-4 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
            <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-white/10" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center">
                  <Mic size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Audio Huddle</div>
                  <div className="text-xs text-white/80">Design standup • 04:12</div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-white text-slate-900 rounded-full px-3 py-1.5 text-xs hover:bg-slate-100 transition">
                <PlayCircle size={16} /> Join
              </button>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[0.6, 0.9, 0.3, 0.7].map((v, i) => (
                <div key={i} className="flex items-end gap-0.5 h-10">
                  {Array.from({ length: 14 }).map((_, j) => (
                    <div key={j} className={`w-0.5 bg-white/70 rounded ${j / 14 < v ? 'h-3' : 'h-1'}`} style={{ height: `${Math.max(2, Math.random() * 16)}px` }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              A productivity OS for creative teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl"
            >
              Loopwork blends Kanban, shared moodboards, and audio huddles into a bright, collaborative workspace inspired by how designers really flow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm md:text-base hover:bg-slate-800 transition shadow">
                Start for free
                <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm md:text-base hover:bg-slate-50 transition">
                <Users size={16} />
                Watch a demo
              </button>
            </motion.div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><LayoutGrid size={16} className="text-violet-500" /> Kanban built-in</div>
              <div className="flex items-center gap-2"><Palette size={16} className="text-fuchsia-500" /> Live moodboards</div>
              <div className="flex items-center gap-2"><Mic size={16} className="text-cyan-500" /> Audio huddles</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-fuchsia-300/30 via-cyan-300/20 to-transparent rounded-3xl blur-2xl" />
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
