import React from 'react';
import { GitBranch, Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Stats() {
  const statIcons = [
    <GitBranch className="w-5 h-5 text-blue-400" />,
    <Briefcase className="w-5 h-5 text-indigo-400" />,
    <Award className="w-5 h-5 text-purple-400" />,
    <Code className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {portfolioData.metrics.map((item, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden group"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent group-hover:via-indigo-500 transition-all duration-300" />
            
            {/* Icon Bubble */}
            <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
              {statIcons[index % statIcons.length]}
            </div>

            {/* Numbers & Label */}
            <div className="min-w-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-mono">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
