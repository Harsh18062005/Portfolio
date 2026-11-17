# 🚀 Harsh Juneja – Developer Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHarsh18062005%2FPortfolio)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Personal portfolio website of **Harsh Juneja** — B.Tech Computer Science & Engineering undergraduate at **ABES Engineering College**, specializing in Full-Stack Web Development, Cybersecurity Heuristics, Computer Networks, and Algorithmic Problem Solving.

---

## 🌟 Key Features

- **⚡ Blazing Fast Architecture**: Built with Vite 8, React 19, and Tailwind CSS v4 for sub-second page loads and zero layout shift.
- **🛡️ Featured Engineering Projects**:
  - **[DNS Tunneling Threat Intelligence Platform](https://incident-detection-dns-tunneling.streamlit.app/)**: Explainable SOC cybersecurity monitoring engine with Scapy packet sniffing, Shannon entropy calculations, and MITRE ATT&CK mapping (T1071.004, T1041).
  - **[CraveX Food Ordering Web App](https://cravex-food.vercel.app/)**: Mobile-first responsive app built during a 45-day virtual internship with IBM SkillsBuild, featuring 25% faster mobile rendering and persistent LocalStorage.
  - **AI-Driven Digital Twin for Network Failure Recovery**: Predictive link degradation analysis and self-healing route simulations.
  - **CCNA Enterprise Networking Labs**: Multi-area OSPF, VLAN trunking, Subnetting (VLSM), and perimeter ACLs.
  - **DSA & Competitive Programming**: 100+ problems solved across LeetCode (`@junejaharsh1806`) and CodeChef (`@harshjuneja18`) in Java & C++.
- **💻 Embedded Interactive CLI Terminal**: Press `` ` `` or `Ctrl + K` (or click CLI) to launch an interactive bash simulator. Supports commands: `help`, `whoami`, `skills`, `projects`, `cat resume`, `sudo hire`, `clear`.
- **📄 Interactive Resume Modal**: In-browser inline preview of Harsh's official resume PDF with one-click direct download.
- **🏆 Verified Credential Badges**: Direct verification links to Cisco Networking Academy (Credly), FutureSkills Prime (NASSCOM), and TCS certifications.
- **🌐 Real-Time Timezone Indicator**: Live Indian Standard Time (IST, UTC+5:30) clock and availability status.
- **📬 Interactive Contact Hub**: 1-click email copy with instant feedback toast, prefilled mailto launcher, and direct social links.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React 19, Vite 8 |
| **Styling** | Tailwind CSS v4, Custom Glassmorphism, CSS Gradients |
| **Icons** | Lucide React, Custom Brand SVGs (GitHub, LinkedIn, LeetCode) |
| **Typography** | Plus Jakarta Sans, JetBrains Mono |
| **Hosting & CI/CD** | Vercel (`vercel.json` optimized) |

---

## 📦 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg             # Branded vector favicon
│   ├── Harsh_Juneja_Resume.pdf # Official PDF resume
│   ├── professional_pic.jpeg   # High-res profile photograph
│   └── Linkedin_pic.png        # Secondary professional portrait
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header & mobile navigation
│   │   ├── Hero.jsx            # Dynamic typewriter intro, CTAs & portrait
│   │   ├── Stats.jsx           # Metric highlights (repos, internship, certs)
│   │   ├── About.jsx           # Background, academic snapshot & leadership
│   │   ├── Skills.jsx          # Categorized skills matrix with level badges
│   │   ├── Projects.jsx        # Filterable project grid & deep dive modal
│   │   ├── Experience.jsx      # Work timeline & ABES education
│   │   ├── Certifications.jsx  # Cisco, NASSCOM, TCS credential cards
│   │   ├── Contact.jsx         # Direct contact form & live IST clock
│   │   ├── Footer.jsx          # Sitemap, copyright & back-to-top
│   │   ├── ResumeModal.jsx     # Inline PDF viewer modal
│   │   ├── InteractiveTerminal.jsx # Interactive CLI terminal
│   │   └── Icons.jsx           # Brand SVGs (GitHub, LinkedIn, LeetCode)
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for portfolio info
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Global theme styles & Tailwind imports
│   └── main.jsx                # Application root entry
├── index.html                  # SEO & OpenGraph meta tags
├── vercel.json                 # Vercel deployment configuration
├── vite.config.js              # Vite + Tailwind build configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- Git

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Harsh18062005/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ☁️ How to Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push all changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio for Harsh Juneja"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com/).
3. Click **Add New...** -> **Project**.
4. Select **Import** next to your `Harsh18062005/Portfolio` repository.
5. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.
7. In ~30 seconds, your portfolio will be live at `https://portfolio-harsh18062005.vercel.app/`!

### Option 2: Deploy using Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📬 Contact & Connect

- **Harsh Juneja** — Ghaziabad, Uttar Pradesh, India
- **Email**: [junejaharsh1806@gmail.com](mailto:junejaharsh1806@gmail.com)
- **Phone**: [+91 6306092954](tel:+916306092954)
- **GitHub**: [Harsh18062005](https://github.com/Harsh18062005)
- **LinkedIn**: [in/harshjuneja2005](https://www.linkedin.com/in/harshjuneja2005)
- **LeetCode**: [junejaharsh1806](https://leetcode.com/u/junejaharsh1806/)
- **CodeChef**: [harshjuneja18](https://www.codechef.com/users/harshjuneja18)

---
*Created with ❤️ for Harsh Juneja*
