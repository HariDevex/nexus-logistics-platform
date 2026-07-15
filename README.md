<div align="center">

# `⚡ NodeRoute`

### Global Freight Intelligence Platform

**Ship with certainty — Not just visibility**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-185-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

![NodeRoute Hero](https://img.shields.io/badge/🌐_NodeRoute-Freight_Intelligence-7fcdff?style=for-the-badge&labelColor=080c18)

</div>

---

## 📖 Overview

NodeRoute is a modern logistics and freight management platform that combines **real-time shipment tracking**, **AI-powered route optimization**, and a **global network of vetted carriers** to deliver freight with surgical precision. The platform features a visually stunning glassmorphism UI with 3D particle backgrounds, smooth page transitions, and a fully responsive dark/light theme system.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🔍 **Live Shipment Tracking** | Real-time tracking with animated timeline, status badges, and shipment details |
| 📦 **Quote Request System** | Multi-step freight quote form with instant reference ID generation |
| 🌍 **Global Network** | 190+ countries coverage with interline partnerships and owned hubs |
| 🎨 **3D Particle Background** | Interactive Three.js globe with connected nodes and mouse-follow parallax |
| 🌓 **Dark / Light Theme** | System-aware theme toggle with persistent user preference |
| ✨ **Glassmorphism UI** | Frosted-glass cards with tilt effects, scroll reveal, and parallax sections |
| 📱 **Fully Responsive** | Mobile-first design that works across all device sizes |
| ⚡ **Animated Transitions** | Framer Motion page transitions with staggered reveal animations |
| 📊 **Stats Dashboard** | Live counters for shipments, countries, and carrier network |
| 🛃 **Customs Brokerage** | ITB, ISF, duty drawback filings with 40+ trade zone coverage |

---

## 🏗️ Architecture

```
nexus-logistics-platform/
├── api/                        # Vercel serverless function entry
│   └── index.js                # Express app exported for Vercel
├── client/                     # React frontend (Vite)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx      # Navigation with theme toggle
│   │   │   ├── Footer.jsx      # Site footer
│   │   │   ├── ThreeBackground.jsx  # 3D particle globe
│   │   │   ├── GlassCard.jsx   # Frosted glass container
│   │   │   ├── TiltCard.jsx    # Mouse-tilt effect wrapper
│   │   │   ├── TrackInput.jsx  # Shipment tracking input
│   │   │   ├── StatsBar.jsx    # Animated statistics
│   │   │   ├── ScrollReveal.jsx # Scroll-triggered animation
│   │   │   ├── ParallaxSection.jsx # Parallax image sections
│   │   │   └── SectionTitle.jsx # Reusable section header
│   │   ├── pages/              # Route pages
│   │   │   ├── Home.jsx        # Landing page with hero
│   │   │   ├── About.jsx       # Company info & metrics
│   │   │   ├── Services.jsx    # Freight service catalog
│   │   │   ├── Tracking.jsx    # Live shipment tracker
│   │   │   └── Contact.jsx     # Quote form & offices
│   │   ├── context/
│   │   │   └── ThemeContext.jsx # Dark/light theme provider
│   │   ├── styles/
│   │   │   ├── variables.css   # Design tokens & CSS variables
│   │   │   ├── global.css      # Global styles & utilities
│   │   │   └── animations.css  # Keyframe animations
│   │   ├── App.jsx             # Router & page transitions
│   │   └── main.jsx            # React entry point
│   └── vite.config.js          # Vite dev server & proxy
├── server/                     # Express API server
│   ├── index.js                # Server entry (port 3001)
│   └── routes/
│       └── api.js              # API routes & mock data
├── vercel.json                 # Vercel deployment config
├── package.json                # Root monorepo scripts
└── .gitignore
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI library with latest concurrent features
- **Vite 6** — Lightning-fast build tool and dev server
- **React Router DOM 7** — Client-side routing with animated transitions
- **Framer Motion 12** — Production-grade animation library
- **Three.js 185** — WebGL 3D particle globe background
- **Tabler Icons** — Consistent, high-quality icon set

### Backend
- **Express 5** — Fast, minimal Node.js web framework
- **CORS** — Cross-origin resource sharing middleware

### Infrastructure
- **Vercel** — Serverless deployment with edge functions
- **Concurrently** — Parallel dev server execution

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/nexus-logistics-platform.git
cd nexus-logistics-platform

# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Install server dependencies
cd server && npm install && cd ..
```

### Development

```bash
# Run both client and server concurrently
npm run dev
```

This starts:
| Service | URL |
|---------|-----|
| Client (Vite) | `http://localhost:5173` |
| Server (Express) | `http://localhost:3001` |

> The Vite dev server proxies `/api` requests to the Express backend automatically.

### Individual Commands

```bash
# Client only
npm run dev:client

# Server only
npm run dev:server

# Build client for production
npm run build

# Start production server
npm run start
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check — returns service status |
| `GET` | `/api/tracking/:id` | Get shipment tracking details |
| `POST` | `/api/quote` | Submit a freight quote request |
| `POST` | `/api/contact` | Send a contact message |

### Example: Track a Shipment

```bash
curl http://localhost:3001/api/tracking/NR-2847-USA-DE
```

```json
{
  "shipment": {
    "id": "NR-2847-USA-DE",
    "status": "in_transit",
    "origin": "Shanghai, CN",
    "destination": "Charlotte, NC, US",
    "estimatedDelivery": "Jul 14, 2026",
    "weight": "4,250 kg",
    "mode": "Ocean FCL",
    "container": "MSKU 429817-2",
    "timeline": [...]
  }
}
```

### Example: Request a Quote

```bash
curl -X POST http://localhost:3001/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Carter",
    "email": "john@shipper.com",
    "origin": "Shanghai, CN",
    "destination": "Charlotte, NC",
    "weight": "500 kg",
    "freightType": "Ocean FCL"
  }'
```

---

## 📦 Available Tracking IDs

| ID | Status | Route |
|----|--------|-------|
| `NR-2847-USA-DE` | In Transit | Shanghai, CN → Charlotte, NC |
| `NR-9921-JPN-US` | Customs Hold | Tokyo, JP → Los Angeles, CA |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Accent | `#7fcdff` (Cyan) |
| Secondary | `#8b5cf6` (Purple) |
| Success | `#00fa9a` (Green) |
| Warning | `#fbbf24` (Amber) |
| Error | `#f43f5e` (Rose) |
| Display Font | Candal |
| Serif Font | Lora |
| Body Font | PT Serif |
| Border Radius | 16px |
| Glass Blur | 24px |

---

## 🚢 Deployment

The project is configured for **Vercel** deployment:

```bash
# Build the client
npm run build

# Deploy to Vercel
vercel --prod
```

The `vercel.json` handles:
- Client build from `client/dist`
- API rewrites to the serverless function
- SPA fallback routing

---

## 📂 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with 3D globe, tracking input, features, services overview |
| `/about` | About | Company story, metrics, pillars, platform capabilities |
| `/services` | Services | Air, Ocean, Contract Logistics, Customs Brokerage details |
| `/tracking` | Tracking | Live shipment tracker with timeline and details |
| `/contact` | Contact | Quote request form, contact info, global office locations |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary. All rights reserved.

---

<div align="center">

**Built with precision for the freight industry**

![NodeRoute](https://img.shields.io/badge/NodeRoute-2026-7fcdff?style=for-the-badge&labelColor=080c18)

</div>
