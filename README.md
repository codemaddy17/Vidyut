# Vidyut — AI-Native Grid Intelligence Platform

![Vidyut Logo](public/assets/vidyut-logo.png)

> **Predicting where renewable power will be wasted. Locating exactly where it's being stolen or lost.**

**Vidyut** is an AI-native grid intelligence platform engineered for India's renewable energy transition. Designed for state and private distribution companies (**DISCOMs**), load dispatch centers (**SLDCs / RLDCs**), and renewable Independent Power Producers (**IPPs**), Vidyut combines clamp-on hardware telemetry with graph-native AI models to solve grid bottlenecks and technical & commercial (AT&C) losses.

---

## The Core Problem

India's electrical grid faces two massive structural challenges that share a common root cause — monitoring nodes in isolation:

1. **Renewable Curtailment**: ~2.1 TWh of renewable electricity curtailed in FY 2025–26 (~₹629 crore in foregone revenue) to keep coal plants at minimum technical load due to transmission inflexibility.
2. **Technical & Commercial (AT&C) Losses**: Distribution losses averaging ~22.5% nationally (vs. 5–10% global benchmarks) alongside tens of billions lost annually to electricity theft.

---

## The Two AI Products

Vidyut delivers two distinct AI products over a single integrated pipeline (**Sense → Predict → Deliver**):

### 1. Curtailment Prediction
* **Sense**: Clamp-on substation sensors + micro-weather telemetry stream real-time grid conditions.
* **Predict (Core IP)**: A temporal **Graph Neural Network (GNN)** models the grid topology (substations as nodes, lines as capacity-weighted edges) to forecast renewable bottlenecks **30 to 90 minutes in advance**.
* **Deliver**: Live dashboard providing operators actionable re-routing, storage, or trading advisories before curtailment occurs.

### 2. Fault & Theft Localization
* **Sense**: Clamp-on CT sensors at transformer/meter clusters stream live voltage and current telemetry.
* **Predict (Core IP)**: An autoencoder/isolation forest anomaly detector flags irregular patterns, followed by a **graph-based localization model** that triangulates the exact physical origin point of theft or fault across noisy, correlated meter signals.
* **Deliver**: Geographic location flagged on the operator dashboard; field technician app collects ground-truth confirmation to continuously retrain the models.

---

## Web Application Features

- **Interactive Brand Experience**: Full-screen splash loading screen with logo fade-in & scale-up transitions.
- **Dynamic Background Grid**: Custom canvas rendering an interactive electrical grid simulation with dynamic power routing.
- **Multi-Page Architecture**: Built with React Router:
  - `/` — **Home / Landing Page**: Core value proposition, live metrics, problem statement, and waitlist registration.
  - `/about` — **About Vidyut**: Deep dive into the 3-stage pipeline, defensible AI thesis, core values, and founder profiles.
  - `/investors` — **Investor Deck**: Interactive pitch deck narrative covering market size, competitive analysis, business model, traction, and direct PDF deck download.
- **Responsive & Accessible**: Custom CSS design system with mobile navigation drawer, fluid typography, and `prefers-reduced-motion` compliance.

---

## Founders

* **Aashna Suman** — *Co-founder (AI / ML & Research)*
  * Published anomaly-detection researcher (`IMMUNE` framework).
  * 4 published research papers spanning graph-based systems & energy decision models.
* **Madhav Tiwari** — *Co-founder (Product Engineering & Design)*
  * Full-stack iOS & Web engineer.
  * Product design & visual background bringing consumer-grade polish to enterprise grid tooling.

---

## Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codemaddy17/vidyut.git
   cd vidyut
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
