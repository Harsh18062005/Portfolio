import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Eye, 
  Code, 
  Terminal, 
  Mail, 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const roles = [
    'Computer Science Engineer',
    'Full-Stack Web Developer',
    'Cybersecurity & Network Systems',
    'DSA Problem Solver (Java / C++)'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 80);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 radar-dot" />
              <span className="text-xs font-semibold tracking-wide text-slate-300">
                Open for Summer 2027/2028 Internships & Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest font-mono text-indigo-400 font-semibold">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Harsh <span className="text-gradient">Juneja</span>
              </h1>
              
              {/* Dynamic Typewriter text */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 font-mono">
                  {displayText}
                  <span className="inline-block w-[3px] h-6 sm:h-7 ml-1 bg-indigo-500 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Science undergraduate at <strong className="text-white">ABES Engineering College</strong>. 
              Creator of <span className="text-indigo-400 font-medium">DNS Tunneling Threat Intelligence</span>, 
              <span className="text-indigo-400 font-medium"> CraveX Food Web App</span>, and enterprise networking systems. 
              Bridging robust software development, cybersecurity heuristics, and algorithmic efficiency.
            </p>

            {/* Location & Academic Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span>B.Tech CSE • CGPA 7.2 • Class of 2028</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-indigo-500/50 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              >
                <Eye className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Harsh_Juneja_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                title="Direct Download PDF"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>PDF</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={portfolioData.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 transition-all hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.socials.leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 hover:border-amber-500/40 transition-all hover:scale-105 text-xs font-mono font-bold flex items-center gap-1.5"
                  title="LeetCode Profile"
                >
                  <LeetcodeIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode</span>
                </a>

                <a
                  href={portfolioData.socials.codechef.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-500 border border-slate-800 hover:border-amber-600/40 transition-all hover:scale-105 text-xs font-mono font-bold"
                  title="CodeChef Profile"
                >
                  <span>CodeChef</span>
                </a>

                <a
                  href={portfolioData.socials.email.url}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-all hover:scale-105"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual / Profile Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-slate-950 p-2 border border-slate-800/80 shadow-2xl overflow-hidden">
                
                {/* Photo with sleek overlay */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={portfolioData.personal.profilePic}
                    alt="Harsh Juneja"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = portfolioData.personal.linkedinPic;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 rounded-lg px-2.5 py-1 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 radar-dot" />
                    <span>Verified Dev</span>
                  </div>

                  {/* Bottom overlay card info */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800/90 rounded-xl p-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-tight">Harsh Juneja</h4>
                        <p className="text-[11px] text-slate-400">B.Tech CSE @ ABES Ghaziabad</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 font-semibold">
                          CGPA 7.2
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        <span>Cisco Certified</span>
                      </span>
                      <span className="font-mono text-slate-400">IBM SkillsBuild Intern</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Quick Feature Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl items-center gap-3 animate-bounce-subtle">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">
                  8+
                </div>
                <div>
                  <p className="text-xs font-bold text-white">GitHub Repositories</p>
                  <p className="text-[10px] text-slate-400">Web, CyberSec, Networks & DSA</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
