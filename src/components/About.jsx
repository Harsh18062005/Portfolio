import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Layers, 
  ShieldAlert, 
  Code2, 
  Users,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: "Full-Stack Development",
      desc: "Creating responsive, mobile-first web applications using modern JavaScript, React, CSS Grid/Flexbox, and cloud deployments on Vercel.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-indigo-400" />,
      title: "Cybersecurity & Threat Detection",
      desc: "Investigating packet-level traffic heuristics, Shannon entropy, and MITRE ATT&CK techniques (T1071, T1041) to catch DNS tunneling in real time.",
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "Computer Networks & Systems",
      desc: "Architecting enterprise topologies with Cisco IOS, OSPF, VLANs, ACLs, and analyzing raw traffic flow via Wireshark and Scapy.",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Team Collaboration & Leadership",
      desc: "Active PR Team Member for Genero College Fest 2026, driving outreach campaigns that increased footfall by 25% and handling 1,000+ guest operations.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Systems From <span className="text-gradient">Packets to Pixels</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A developer who loves looking under the hood — whether dissecting DNS packets in Scapy or optimizing client-side rendering pipelines.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story Card (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full inline-block" />
              <span>Background & Mission</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a 2nd-year <strong className="text-white">Computer Science & Engineering</strong> student at{' '}
                <strong className="text-white">ABES Engineering College, Ghaziabad</strong>, with an expected graduation in 2028. 
                My journey began with a curiosity about how the web delivers data across continents and how systems defend against modern cyber threats.
              </p>

              <p>
                During my virtual internship with <strong className="text-white">IBM SkillsBuild</strong>, I engineered{' '}
                <strong className="text-indigo-400">CraveX</strong>, a food ordering application that improved mobile rendering speed by 25% 
                and lowered load times by 20% through rigorous layout streamlining and responsive architecture.
              </p>

              <p>
                Driven by network security, I designed an explainable <strong className="text-indigo-400">DNS Tunneling Detection & Threat Intelligence Platform</strong>{' '}
                mapped to MITRE ATT&CK guidelines. By calculating multi-heuristic risk scores (Shannon entropy, subdomain depth, query velocity) on live network traffic, 
                it flags C2 exfiltration attempts with real-time explainability.
              </p>
            </div>

            {/* Academic Snapshot Box */}
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-bold text-white">ABES Engineering College</span>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                  CGPA: 7.2 / 10
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                B.Tech Computer Science & Engineering (2024 – 2028). Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Computer Networks.
              </p>
            </div>

            {/* Quick action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30"
              >
                Inspect Full Resume
              </button>
              <a
                href="#skills"
                className="text-xs font-semibold text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1"
              >
                <span>View Technical Skills</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: Pillars & Secondary Image (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 sm:p-5 flex items-start gap-4 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Genero Fest Leadership Highlight */}
            <div className="glass-card rounded-2xl p-5 border border-purple-500/20 bg-purple-950/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                  Campus Leadership
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3 text-purple-400" />
                  <span>Genero Fest 2026</span>
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">
                Public Relations & Operations Team Member
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Spearheaded promotional campaigns boosting registrations by 25% and managed registration databases for 1,000+ on-ground festival attendees.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
