import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  Users
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOURNEY & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Structured internships, campus leadership responsibilities, and ongoing academic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Work Experience & Leadership (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <span>Professional Experience & Leadership</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-8">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all shadow-md shadow-indigo-500/50" />

                  <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-3 group-hover:border-indigo-500/40">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 font-semibold">
                        {exp.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{exp.organization}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-400 text-xs">{exp.location}</span>
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {exp.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Coursework (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <span>Academic Foundation</span>
            </h3>

            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-purple-300 font-semibold">
                  {portfolioData.education.duration}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                  CGPA: {portfolioData.education.cgpa}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  {portfolioData.education.degree}
                </h4>
                <p className="text-sm text-purple-300 font-medium mt-0.5">
                  {portfolioData.education.institution}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{portfolioData.education.location}</span>
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Highlights & Focus:
                </h5>
                {portfolioData.education.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Key Coursework Completed:
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {['Data Structures (DSA)', 'Object-Oriented Programming (OOP)', 'Database Management (DBMS)', 'Computer Networks', 'Operating Systems', 'Software Engineering'].map((c, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
