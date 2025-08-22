# Oracle69 Ecosystem

Welcome to Oracle69 — a modular, scalable ecosystem of AI, SaaS, EdTech, AgriTech, HealthTech, and automation apps. This repository contains all core apps, components, and documentation for developers and contributors.

## 🚀 Overview

Oracle69 combines modern web, blockchain, and AI technologies:

- **Frontend:** Next.js, Astro, Nuxt, React, Svelte  
- **Progressive Web Apps (PWA):** Installable, offline-ready, mobile-first  
- **CMS:** Storyblok for dynamic, headless content  
- **Blockchain:** Cardano for smart contracts, identity, and NFTs  
- **Verifiability:** XION (zkTLS, zkFetch, DocuStore) for trust-first proofs  
- **Identity:** Meta Accounts for seamless login  
- **Payments:** Crossmint for NFT and digital asset checkout  

## 📂 Repository Structure

/docs/             → Developer docs and per-app MDX pages /components/       → Frontend reusable components (AppDirectory, VerifiedCard, etc.) /public/           → Generated JSON index of all apps (all-apps.json) /scripts/          → Automation scripts (sync GitHub repos) /apps/             → Individual app directories (optional) /.github/workflows/→ GitHub Actions for automation README.md          → Root GitHub landing page

## 📌 Getting Started

1. Clone the repo:  
```bash
git clone https://github.com/oracle69/oracle69.com.git
cd oracle69.com

2. Install dependencies:



npm install

3. Run the development server:



npm run dev

4. Browse the app directory at localhost:3000/apps (after running sync script or using existing all-apps.json).



📖 Documentation

Developer docs: /docs/README.md

Per-app docs: /docs/apps/[app].mdx

Automated JSON index: /public/all-apps.json


> The /docs folder is used by Jule to generate the Oracle69 website and apps directory automatically.



🧩 Contribution

Fork the repo and add apps to GitHub with proper description.

Add per-app MDX docs in /docs/apps/ or let Jule auto-generate them.

The sync script and GitHub Action will auto-update the apps index.


🌐 Deployment

Frontend: Vercel → oracle69.com

Backend: Railway → api.oracle69.com

Database: Drizzle → Neon PostgreSQL


> Post-deployment checks: ensure all apps are rendering correctly, JSON data is accessible, and links work.






🔗 Links

Docs Home

App Directory JSON



Features of this root README: 
- GitHub-friendly overview for anyone visiting the repo  
- Shows repo structure, getting started steps, deployment, and contribution  
- Clearly references `/docs/` for developer-oriented instructions  
- Keeps everything consistent with Oracle69 branding and automation workflow  
