import React from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACCREDITATIONS & BADGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Industry credentials in enterprise networking, Python software engineering, and data analysis from Cisco, NASSCOM, and TCS.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-blue-500/40"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shadow-inner">
                    <Award className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-blue-400" />
                    <span>{cert.badgeType}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1 mb-4">
                  {cert.issuer} • <span className="font-mono text-slate-400">{cert.issued}</span>
                </p>

                {/* Skills tags */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom verification link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Credential Verified</span>
                </span>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
