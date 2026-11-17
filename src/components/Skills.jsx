import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  ShieldAlert, 
  Terminal, 
  Cpu, 
  CheckCircle, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Frontend & Web Technologies':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'Cybersecurity & Computer Networks':
        return <ShieldAlert className="w-5 h-5 text-purple-400" />;
      case 'Databases & Developer Tooling':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Core Computer Science Fundamentals':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.name)];

  const filteredCategories = selectedCategory === 'All'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A comprehensive overview of my technical toolset across languages, web architecture, cybersecurity forensics, and computer science foundations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/40"
            >
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 hover:bg-slate-900 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60">
                          {skill.tag}
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          skill.level === 'Expert' || skill.level === 'Specialist'
                            ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                            : skill.level === 'Advanced'
                            ? 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/50'
                            : 'bg-slate-800/80 text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>{category.skills.length} core technologies</span>
                <span className="font-mono text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                  Verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
