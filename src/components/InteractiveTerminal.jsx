import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose, onOpenResume }) {
  const [history, setHistory] = useState([
    { text: 'Antigravity OS [Version 2.0.26-release]', type: 'system' },
    { text: 'Type "help" to see available commands or "sudo hire" for a surprise.', type: 'info' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [pastCmds, setPastCmds] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      const cmd = rawCmd.toLowerCase();

      if (rawCmd) {
        setPastCmds((prev) => [...prev, rawCmd]);
        setCmdIndex(-1);
      }

      const newHistory = [...history, { text: `harsh@portfolio:~$ ${rawCmd}`, type: 'user' }];

      switch (cmd) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available commands:
  • help           - Display this helper guide
  • whoami         - Display candidate profile & summary
  • skills         - List core technical proficiencies
  • projects       - Show featured applications and GitHub links
  • experience     - View internship & leadership records
  • certs          - List Cisco, NASSCOM, and TCS accreditations
  • cat resume     - View resume modal
  • contact        - Show email, phone, and social handles
  • sudo hire      - Trigger instant candidate hiring sequence
  • clear          - Clear terminal screen
  • exit           - Close the interactive terminal`,
          });
          break;

        case 'whoami':
          newHistory.push({
            type: 'output',
            text: `Harsh Juneja
• Degree: B.Tech Computer Science & Engineering (ABES Engineering College, 2024-2028)
• CGPA: 7.2 / 10.0
• Focus: Full-Stack Web Development, Cybersecurity Telemetry, Computer Networks, and DSA (Java/C++)
• Location: Ghaziabad, Uttar Pradesh, India
• Current Status: Available for Summer 2027/2028 Internships & Roles`,
          });
          break;

        case 'skills':
          newHistory.push({
            type: 'output',
            text: `Core Tech Stack:
[Languages]   Java (DSA), C++ (STL), Python, C, JavaScript (ES6+), SQL
[Frontend]    HTML5, CSS3, Tailwind CSS, React, Responsive Design, LocalStorage, Vercel
[Security]    DNS Tunneling Detection, Scapy Sniffing, Wireshark, Shannon Entropy, MITRE ATT&CK
[Networks]    Computer Networks (OSI/TCP-IP), Cisco IOS, OSPF, VLANs, ACLs, Subnetting
[Tools]       Git, GitHub, Oracle Database, SQL Developer, VS Code, Cursor AI, Postman, Streamlit`,
          });
          break;

        case 'projects':
          newHistory.push({
            type: 'output',
            text: `Featured Projects:
1. DNS Tunneling Detection Platform (Python, Scapy, Streamlit, Heuristic Engine)
   -> Live App: https://incident-detection-dns-tunneling.streamlit.app/
   -> GitHub: https://github.com/Harsh18062005/incident-detection-dns-tunneling

2. CraveX - Food Ordering Web App (JavaScript, HTML5, CSS3, LocalStorage, Vercel)
   -> Live App: https://cravex-food.vercel.app/
   -> GitHub: https://github.com/Harsh18062005/Cravex

3. AI-Driven Digital Twin for Network Failure Recovery (Python, Graph Algorithms)
   -> GitHub: https://github.com/Harsh18062005/AI-Driven-Digital-Twin-for-Predictive-Network-Failure-Recovery-Analysis

4. CCNA Enterprise Networking Labs & Packet Tracer Topologies
   -> GitHub: https://github.com/Harsh18062005/ccna-networking-labs

5. DSA & Problem Solving in Java & C++ (100+ Solved)
   -> GitHub: https://github.com/Harsh18062005/java_problem-solving`,
          });
          break;

        case 'experience':
          newHistory.push({
            type: 'output',
            text: `Experience:
• Virtual Web Development Intern @ IBM SkillsBuild (Jun 2026 - Jul 2026)
  - Engineered CraveX food ordering web application with 25% faster mobile rendering.
  - Implemented CI/CD pipeline on Vercel with zero downtime.

• PR Team Member @ Genero College Fest 2026
  - Led outreach campaigns driving 25% boost in event registrations.
  - Managed guest registration databases for 1,000+ visitors.`,
          });
          break;

        case 'certs':
        case 'certifications':
          newHistory.push({
            type: 'output',
            text: `Verified Credentials:
• Cisco Networking Basics (Cisco Networking Academy) - Credly Verified
• Python Essentials 1 (Cisco & Python Institute) - Credly Verified
• Python Essentials 2 (Cisco & Python Institute) - Credly Verified
• Exploratory Data Analysis (FutureSkills Prime / NASSCOM) - Certified
• Tata Crucible Certification (Tata Consultancy Services) - Unstop Verified`,
          });
          break;

        case 'cat resume':
        case 'resume':
          newHistory.push({
            type: 'output',
            text: 'Opening official resume modal...',
          });
          onOpenResume();
          break;

        case 'contact':
          newHistory.push({
            type: 'output',
            text: `Contact Info:
• Email:    junejaharsh1806@gmail.com
• Phone:    +91 6306092954
• GitHub:   https://github.com/Harsh18062005
• LinkedIn: https://www.linkedin.com/in/harshjuneja2005
• LeetCode: https://leetcode.com/u/junejaharsh1806/
• Location: Ghaziabad, Uttar Pradesh, India`,
          });
          break;

        case 'sudo hire':
        case 'hire':
          newHistory.push({
            type: 'output',
            text: `[SUCCESS] Offer letter generated! 🎉
Harsh Juneja brings:
  ✓ Solid computer science fundamentals (DSA in Java & C++)
  ✓ Real-world full-stack web and cloud experience (Vercel, React, JS)
  ✓ Security-minded systems expertise (Scapy, Networks, Cisco Certified)
  ✓ Proactive collaboration and proven track record

Next step: Reach out to junejaharsh1806@gmail.com or +91 6306092954 to connect!`,
          });
          break;

        case 'clear':
          setHistory([]);
          setInputVal('');
          return;

        case 'exit':
        case 'quit':
          onClose();
          return;

        case '':
          break;

        default:
          newHistory.push({
            type: 'error',
            text: `Command not recognized: "${rawCmd}". Type "help" to see available commands.`,
          });
          break;
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      if (pastCmds.length > 0) {
        const nextIdx = cmdIndex === -1 ? pastCmds.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(pastCmds[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (pastCmds.length > 0 && cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx >= pastCmds.length) {
          setCmdIndex(-1);
          setInputVal('');
        } else {
          setCmdIndex(nextIdx);
          setInputVal(pastCmds[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="max-w-3xl w-full h-[600px] max-h-[85vh] rounded-2xl bg-[#0b0f19] border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Terminal Title Bar */}
        <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block hover:opacity-80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>harsh@portfolio:~ (bash)</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-300 select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed">
              {line.type === 'user' && (
                <span className="text-emerald-400 font-semibold">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-indigo-400 font-semibold">{line.text}</span>
              )}
              {line.type === 'info' && (
                <span className="text-slate-400 italic">{line.text}</span>
              )}
              {line.type === 'output' && (
                <pre className="text-slate-200 whitespace-pre-wrap font-mono mt-1 text-[11px] sm:text-xs">
                  {line.text}
                </pre>
              )}
              {line.type === 'error' && (
                <span className="text-red-400 font-semibold">{line.text}</span>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-semibold shrink-0">harsh@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm p-0 m-0 focus:ring-0"
              autoFocus
              spellCheck={false}
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Quick Help Bar */}
        <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <span>Quick:</span>
            {['whoami', 'skills', 'projects', 'sudo hire'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 font-mono text-[10px]"
              >
                {cmd}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline">Press Enter ↵ to run</span>
        </div>

      </div>
    </div>
  );
}
