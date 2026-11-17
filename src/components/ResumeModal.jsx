import React from 'react';
import { X, Download, ExternalLink, FileText, Printer } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel max-w-5xl w-full h-[90vh] rounded-2xl flex flex-col overflow-hidden border border-slate-700/80 shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="px-5 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Harsh Juneja Resume</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  PDF
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Official verified resume • ABES Engineering College (CSE)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Harsh_Juneja_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer */}
        <div className="flex-1 bg-slate-950 relative overflow-hidden">
          <iframe
            src={`${portfolioData.personal.resumeUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full border-none"
            title="Harsh Juneja Resume PDF"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-5 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Tip: You can also print or save directly using the controls above.</span>
          <span className="font-mono text-indigo-400">Harsh Juneja • junejaharsh1806@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
