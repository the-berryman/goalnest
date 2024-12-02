# GoalNest Finance App

A React-based financial management application with gamified features and intuitive visualization.

## Features
- Financial dashboard with interactive charts
- Savings goal tracking
- Transaction history
- Wallet management
- Family sharing capabilities

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Recharts
- Express
- Node.js

## Installation
```bash
git clone https://github.com/the-berryman/goalnest.git
npm install
npm run dev
```

## Local Dev
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Deployment
- App configured for Heroku deployment
1. create Heroku app
```bash 
heroku create goalnest
```
2. Deploy:
```bash
git push heroku main
```
## Project structure

```bash
goalnest/
├── src/
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx         # Application entry point
├── public/               # Static assets
├── server.js            # Express server for production
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```
