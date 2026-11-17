import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentMessage, setSentMessage] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formState.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentMessage(true);
    setTimeout(() => setSentMessage(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have an open role, an internship opportunity, or a collaborative project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="glass-card rounded-2xl p-6 relative group overflow-hidden border border-indigo-500/30">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Email</h4>
                    <a
                      href={portfolioData.socials.email.url}
                      className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-mono transition-colors block break-all"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all hover:scale-105"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <div className="mt-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="text-xs font-mono font-semibold text-white hover:text-blue-400 transition-colors block"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>

              <div className="glass-card rounded-2xl p-5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-xs font-semibold text-white">
                  Ghaziabad, UP, India
                </p>
              </div>
            </div>

            {/* Timezone Status Card */}
            <div className="glass-card rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Local Time (IST, UTC+5:30)</span>
                </span>
                <span className="text-xs font-mono font-bold text-indigo-300">
                  {currentTime || 'Loading...'}
                </span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 radar-dot inline-block mr-1.5 align-middle" />
                Active during standard IST hours; flexible for global remote meetings.
              </div>
            </div>

            {/* Profiles & Handles */}
            <div className="glass-card rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Professional Profiles:
              </h4>
              <div className="space-y-2">
                <a
                  href={portfolioData.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-blue-400 font-mono">
                    {portfolioData.socials.linkedin.handle} ↗
                  </span>
                </a>

                <a
                  href={portfolioData.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white font-mono">
                    {portfolioData.socials.github.handle} ↗
                  </span>
                </a>

                <a
                  href={portfolioData.socials.leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                    <span>LeetCode Profile</span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-amber-400 font-mono">
                    {portfolioData.socials.leetcode.handle} ↗
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-400" />
              <span>Send Me A Direct Message</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Fill out the form below to send an email inquiry directly to my inbox. I usually reply within a few hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-300">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Software Engineer Internship / Opportunity / Project"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-300">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hello Harsh, I came across your portfolio and wanted to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Message Directly</span>
              </button>

              {sentMessage && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono text-center animate-fadeIn">
                  ✓ Opening your mail client with prefilled details. Thank you!
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
