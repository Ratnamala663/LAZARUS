# Project Lazarus: Medical Forensic Recovery Suite

![Project Lazarus Dashboard](https://img.shields.io/badge/Status-Recovered-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Vanilla_JS_|_HTML5_|_CSS3-blue?style=for-the-badge)
![Live Demo](https://img.shields.io/badge/Live-Demo_on_Vercel-6366f1?style=for-the-badge&logo=vercel)

**[🔗 VIEW THE LIVE FORENSIC DASHBOARD](https://nineteen21lazarus.vercel.app)**

**Project Lazarus** is a high-performance forensic auditing dashboard designed to recover and re-integrate 11,000+ corrupted hospital records. Built for medical forensic scenarios, the system addresses three core data-integrity challenges using real-time mathematical heuristics and cryptographic derivation.

## 🧬 Key Forensic Challenges

### 1. Identity Disambiguation (Parity-Based Recovery)
The system resolves the "Ghost ID Collision" issue where multiple patients share a single identifier. By processing raw vitals through a **Vital Sum Parity formula** (`(HR + O2) % 2`), the suite dynamically separates and reconstructs 1,002 unique identities.

### 2. Age-Based Cipher Decryption
Pharmacological records were encrypted by ransomware using a rotating Caesar Cipher. Lazarus reverses this by dynamically computing a decryption key for every single patient:
- **Rule**: `Shift = Patient_Age % 26`
- **Result**: 100% recovery of the hospital's pharmacy audit logs.

### 3. Telemetry Signal Filtering
Real-time sensor data is cleaned of artifacts and missing transmissions:
- **Linear Interpolation**: Heuristically fills O2 sensor gaps.
- **Spike Suppression**: Clamps 1,533 systemic BPM artifacts (>30 BPM jumps) using a smoothing DSP algorithm.

## 🚀 Interactive Features

- **Live Forensic Boot Sequence**: Progressive data re-integration animation on startup.
- **Vitals Comparison Engine**: Simultaneously plot Raw vs. Filtered telemetry to audit recovery performance.
- **Forensic Discovery Engine**: Auto-scans the 11k row dataset for duplicate `rx_ids` and "Room Wandering" anomalies.
- **Formal Recovery Audit Report**: Generates a printable certificate summarizing all data repairs for hospital compliance.

## 🛠️ Technology Stack
- **Frontend**: Vanilla HTML5, CSS3 (Modern Dark Theme), ES6+ JavaScript.
- **Visualization**: Chart.js for real-time telemetry streaming.
- **Asset Management**: Lucide Icons (CDN), Base64-encoded Data Bundling (for instant local loading).

---

### **How to Deploy**
1. Clone the repository.
2. Open `index.html` in any modern browser.
3. No server or dependencies required—runs as a high-performance SPA.

---
*Developed for Project Lazarus Forensic Competition.*
