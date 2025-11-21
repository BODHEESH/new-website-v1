# Ahana Workshop Landing Page

A modern, responsive landing page built with Next.js 14 and Tailwind CSS for the UIPath Workshop, featuring professional design and smooth animations.

## Features

- ✨ Modern, clean design with gradient backgrounds and smooth transitions
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🎨 Tailwind CSS for styling with custom animations
- ⚡ Next.js 14 with App Router and optimized Image component
- 🔥 Interactive components with hover effects
- 🖼️ High-quality images from Freepik
- 💼 Professional sections including:
  - Sticky navigation header with mobile menu
  - Hero section with CTA buttons
  - Features showcase with icons
  - Statistics display with cards
  - Image gallery with hover effects
  - Customer testimonials with ratings
  - Pricing plans (3 tiers)
  - Partner logos grid
  - Comprehensive footer with social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ahana-new-website/
├── app/
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   ├── home/             # Home page components
│   │   └── shared/           # Reusable components
│   ├── utils/                # Constants and helpers
│   ├── services/             # Service pages
│   ├── industries/           # Industry pages
│   ├── insights/             # Insights pages
│   ├── about-us/             # About page
│   ├── careers/              # Careers page
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## Customization

You can easily customize:
- Colors in `tailwind.config.js`
- Content in component files
- Add new sections by creating components
- Modify styles using Tailwind classes

## License

This project is created for educational purposes.
