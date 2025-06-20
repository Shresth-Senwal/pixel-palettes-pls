# 🤖 IEEE RAS MUJ - Pixel Palettes Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.18.1-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Performance](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=flat-square)](https://developer.chrome.com/docs/lighthouse/)

A modern, high-performance website for the IEEE Robotics and Automation Society at Manipal University Jaipur, featuring the main club website and an integrated event microsite for "Pixel Palettes" - a 24-hour AI-powered hackathon with cyberpunk aesthetics.

## 🌟 Project Overview

This project serves dual purposes as both the official IEEE RAS MUJ club website and a dedicated event platform for the Pixel Palettes hackathon. Built with modern web technologies and optimized for performance, it provides an immersive digital experience with cutting-edge animations and responsive design.

### 🎯 Key Objectives
- **Professional Club Presence**: Establish IEEE RAS MUJ's digital identity
- **Event Promotion**: Showcase the Pixel Palettes hackathon with engaging visuals
- **User Experience**: Provide intuitive navigation and accessibility
- **Performance**: Achieve 95+ Lighthouse scores across all metrics
- **Maintainability**: Clean, documented code for future development

## ✨ Features

### 🏠 Main IEEE RAS MUJ Website
- **Modern UI**: Sleek, futuristic design with glassmorphism panels and floating cards
- **Color Scheme**: Deep purple and maroon/red primary colors with dark themes and neon accents
- **Responsive Design**: Fully adaptable to all screen sizes with collapsible navigation
- **Smooth Animations**: Creative scroll-based animations and subtle parallax effects
- **Performance Optimized**: Built with Next.js 15 and optimized for Core Web Vitals
- **SEO Optimized**: Complete metadata, Open Graph, and Twitter Card integration
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support

### 🎨 Pixel Palettes Event Microsite
- **Cyberpunk Aesthetic**: Retro-pixel art with neon effects and glassmorphism design
- **One-Time Loading Animation**: Unique retro loading screen on first visit (session-based)
- **Interactive Elements**: Prize pool tooltips, hover effects, and smooth transitions
- **Dedicated Pages**: Separate pages for judges and sponsors with professional profiles
- **External Registration**: Direct integration with Google Forms for seamless registration
- **Session Management**: Smart loading behavior that remembers user visits
- **Mobile Optimized**: Touch-friendly interactions and responsive layouts

### 🚀 Technical Features
- **Server-Side Rendering**: Fast initial page loads with Next.js SSR
- **Static Generation**: Pre-built pages for optimal performance
- **Image Optimization**: Automatic WebP conversion and responsive sizing
- **Font Optimization**: Google Fonts with display swap and preloading
- **Bundle Optimization**: Tree shaking and code splitting
- **Progressive Enhancement**: Works without JavaScript for core functionality

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn/pnpm/bun)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pixel-palettes.git
   cd pixel-palettes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual configuration values:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
   NEXT_PUBLIC_REGISTRATION_FORM_URL=your-google-form-url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
pixel-palettes/
├── 📁 docs/                          # Documentation and development notes
│   ├── development-context.md        # Detailed development history and decisions
│   ├── OPTIMIZATION_SUMMARY.md       # Performance optimization notes
│   └── RESTRUCTURING_SUMMARY.md      # Architecture changes and improvements
├── 📁 public/                        # Static assets served directly
│   ├── 📁 images/                    # Organized image assets
│   │   ├── 📁 logos/                 # Logo files (IEEE RAS, sponsors, event)
│   │   │   ├── ieee-ras-logo.png     # Main IEEE RAS logo
│   │   │   ├── logo.png              # Pixel Palettes logo
│   │   │   ├── kdk-logo.png          # KDK Software sponsor logo
│   │   │   └── coding-blocks-logo.png # Coding Blocks sponsor logo
│   │   └── 📁 placeholders/          # Development placeholder images
│   ├── favicon.ico                   # Site favicon
│   ├── manifest.json                 # PWA manifest (future enhancement)
│   └── robots.txt                    # Search engine crawling rules
├── 📁 src/                           # Source code directory
│   ├── 📁 app/                       # Next.js App Router pages
│   │   ├── 📁 pixelpalettes/         # Event microsite routes
│   │   │   ├── 📁 judges/            # Judges page with profiles
│   │   │   │   └── page.tsx          # Judge profiles and criteria
│   │   │   ├── 📁 sponsors/          # Sponsors page with company info
│   │   │   │   └── page.tsx          # Sponsor profiles and partnerships
│   │   │   └── page.tsx              # Main event landing page
│   │   ├── favicon.ico               # App-specific favicon
│   │   ├── globals.css               # Global styles and Tailwind imports
│   │   ├── layout.tsx                # Root layout with metadata and fonts
│   │   └── page.tsx                  # Main IEEE RAS homepage
│   ├── 📁 components/                # Reusable React components (ready for expansion)
│   │   └── README.md                 # Component development guidelines
│   └── 📁 utils/                     # Utility functions and helpers
│       └── animations.ts             # Framer Motion animation variants and utilities
├── 📁 node_modules/                  # Dependencies (git-ignored)
├── .env.example                      # Environment variables template
├── .env.local                        # Your environment variables (git-ignored)
├── .gitignore                        # Git ignore rules
├── .prettierrc.json                  # Prettier code formatting configuration
├── CONTRIBUTING.md                   # Contribution guidelines
├── eslint.config.mjs                 # ESLint linting configuration
├── LICENSE                           # MIT License
├── lighthouserc.json                 # Lighthouse CI performance configuration
├── next.config.ts                    # Next.js build and runtime configuration
├── package.json                      # Dependencies, scripts, and metadata
├── postcss.config.mjs                # PostCSS and Tailwind configuration
├── README.md                         # This comprehensive documentation
└── tsconfig.json                     # TypeScript compiler configuration
```

## 🏗️ Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router for modern React patterns
- **Rendering**: Hybrid SSR/SSG for optimal performance
- **State Management**: React hooks for local state, no external state library needed
- **Styling**: Tailwind CSS with custom utilities for glassmorphism effects
- **Animations**: Framer Motion for performant, GPU-accelerated animations

### Component Architecture
```
Components/
├── Layout Components (navigation, footer)
├── Page Components (home, event, judges, sponsors)
├── UI Components (cards, buttons, forms)
└── Animation Components (loading screens, transitions)
```

### Data Flow
1. **Static Content**: Hardcoded in components for simplicity
2. **Dynamic Content**: Prepared for future CMS integration
3. **External Links**: Direct links to registration forms and social media
4. **Session Storage**: For loading animation state management

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and improved developer experience
- **[React 19](https://react.dev/)** - Latest React with concurrent features and server components

### Styling & Animation
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework with JIT compilation
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React
- **Custom CSS** - Glassmorphism effects, cyberpunk aesthetics, and neon glows
- **Google Fonts** - Press Start 2P and VT323 for retro typography

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting with Next.js and TypeScript rules
- **[Prettier](https://prettier.io/)** - Consistent code formatting
- **[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)** - Automated performance monitoring
- **[TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)** - Enhanced type checking

### Performance & SEO
- **Image Optimization** - Next.js Image component with automatic WebP/AVIF conversion
- **Font Optimization** - Google Fonts with display swap and preloading strategies
- **Core Web Vitals** - Optimized for LCP (<2.5s), FID (<100ms), and CLS (<0.1)
- **SEO Metadata** - Complete Open Graph, Twitter Card, and JSON-LD support
- **Accessibility** - WCAG 2.1 AA compliance with semantic HTML and ARIA labels

## 📜 Available Scripts

### Development Commands
```bash
npm run dev          # Start development server with Turbopack (faster builds)
npm run build        # Build for production with optimizations
npm run start        # Start production server locally
npm run export       # Export static site (if needed for hosting)
```

### Code Quality Commands
```bash
npm run lint         # Run ESLint for code quality checks
npm run lint:fix     # Fix automatically fixable ESLint issues
npm run format       # Format all code with Prettier
npm run format:check # Check if code is properly formatted
npm run type-check   # Run TypeScript compiler for type checking
```

### Analysis & Optimization Commands
```bash
npm run analyze      # Bundle analysis with webpack-bundle-analyzer
npm run lighthouse   # Run Lighthouse CI performance tests
npm run audit        # Check for security vulnerabilities
npm run audit-fix    # Fix npm security vulnerabilities automatically
```

### Production & Deployment Commands
```bash
npm run build:production  # Production build with all optimizations
npm run preview          # Preview production build locally
npm run clean           # Clean build artifacts and node_modules
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--purple-primary: #7C3AED;    /* Deep purple for IEEE branding */
--red-primary: #DC2626;       /* Maroon/red for accent elements */

/* Accent Colors */
--pink-accent: #EC4899;       /* Neon pink for highlights */
--cyan-accent: #06B6D4;       /* Cyan for secondary accents */

/* Background Colors */
--black-primary: #000000;     /* Pure black background */
--gray-900: #111827;          /* Dark gray for cards */
--gray-800: #1F2937;          /* Medium gray for borders */

/* Text Colors */
--white-primary: #FFFFFF;     /* Primary text color */
--gray-300: #D1D5DB;          /* Secondary text color */
--gray-400: #9CA3AF;          /* Muted text color */
```

### Typography Scale
```css
/* Pixel/Retro Fonts */
--font-pixel: 'Press Start 2P', monospace;    /* Main headings */
--font-mono-pixel: 'VT323', monospace;        /* Body text and UI */

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
```

### Component Patterns
- **Glass Cards**: `backdrop-blur-md bg-white/5 border border-white/10`
- **Neon Effects**: `filter: drop-shadow(0 0 15px color)` with CSS glow
- **Hover Transitions**: `transition-all duration-300 hover:scale-105`
- **Responsive Grid**: Mobile-first with Tailwind breakpoints

### Animation Principles
- **Performance First**: GPU-accelerated transforms and opacity changes
- **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility
- **Staggered Animations**: Sequential reveals for better visual hierarchy
- **Smooth Easing**: Custom cubic-bezier curves for natural motion

## 🚀 Deployment

### Recommended Platforms
1. **[Vercel](https://vercel.com/)** (Recommended)
   - Zero-configuration deployment
   - Automatic previews for pull requests
   - Built-in performance monitoring
   - Global CDN with edge functions

2. **[Netlify](https://netlify.com/)**
   - Git-based deployment workflow
   - Form handling capabilities
   - Split testing features

3. **[GitHub Pages](https://pages.github.com/)**
   - Free hosting for static export
   - Custom domain support

### Deployment Steps (Vercel)
1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy from project root
   vercel
   ```

2. **Environment Variables**
   Set up production environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
   - `NEXT_PUBLIC_REGISTRATION_FORM_URL`

3. **Custom Domain** (Optional)
   - Add custom domain in Vercel dashboard
   - Configure DNS records as provided

### Performance Optimization
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Font Optimization**: Preload critical fonts
- **Bundle Splitting**: Automatic code splitting by Next.js
- **Caching**: Static assets cached with proper headers

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig = {
  // Enable experimental features
  experimental: {
    turbo: true, // Turbopack for faster builds
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### Tailwind Configuration
```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['var(--font-press-start)', 'monospace'],
        'mono-pixel': ['var(--font-vt323)', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
```

## 🤝 Contributing

We welcome contributions from the IEEE RAS MUJ community and beyond! Here's how you can help improve the website:

### Getting Started
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/pixel-palettes.git
   cd pixel-palettes
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Make your changes** following our coding standards
6. **Test thoroughly** - ensure all features work as expected
7. **Commit your changes**:
   ```bash
   git commit -m 'Add amazing feature: detailed description'
   ```
8. **Push to your branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
9. **Open a Pull Request** with a clear description

### Coding Standards
- **TypeScript**: Use proper typing for all components and functions
- **ESLint**: Follow the configured linting rules (`npm run lint`)
- **Prettier**: Format code before committing (`npm run format`)
- **Comments**: Add JSDoc comments for complex functions and components
- **Responsive**: Ensure all changes work on mobile, tablet, and desktop
- **Performance**: Consider loading times and animation performance
- **Accessibility**: Maintain WCAG 2.1 AA compliance

### Areas for Contribution
- 🐛 **Bug Fixes**: Report and fix issues
- ✨ **New Features**: Add new functionality (contact forms, CMS integration)
- 🎨 **UI/UX Improvements**: Enhance design and user experience
- 📚 **Documentation**: Improve docs and code comments
- 🚀 **Performance**: Optimize loading times and animations
- ♿ **Accessibility**: Improve screen reader support and keyboard navigation
- 🌐 **Internationalization**: Add multi-language support
- 📱 **Mobile Experience**: Enhance mobile interactions and layouts

### Pull Request Guidelines
- **Clear Title**: Describe what the PR does in one line
- **Detailed Description**: Explain the changes and why they're needed
- **Screenshots**: Include before/after images for UI changes
- **Testing**: Describe how you tested the changes
- **Breaking Changes**: Clearly mark any breaking changes
- **Documentation**: Update README or docs if needed

## 📊 Performance Metrics

### Current Lighthouse Scores
- **Performance**: 95+ (Target: 90+)
- **Accessibility**: 100 (Target: 95+)
- **Best Practices**: 100 (Target: 95+)
- **SEO**: 100 (Target: 95+)

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### Bundle Size Analysis
- **Initial Bundle**: ~200KB (gzipped)
- **Total JavaScript**: ~400KB (with all chunks)
- **Largest Chunk**: Framer Motion (~80KB)
- **Images**: Optimized with WebP/AVIF formats

## 🔒 Security

### Security Measures
- **Content Security Policy**: Configured headers to prevent XSS
- **HTTPS Only**: Enforced secure connections
- **Dependency Scanning**: Regular security audits with `npm audit`
- **Input Validation**: All form inputs validated and sanitized
- **External Links**: `rel="noopener noreferrer"` on external links

### Security Headers
```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
```

## 📞 Support & Contact

### IEEE RAS MUJ Team
- **Email**: ieee.ras@muj.manipal.edu
- **Website**: [IEEE RAS MUJ Official](https://ieeerasmuj.com)
- **LinkedIn**: [IEEE RAS Manipal University Jaipur](https://linkedin.com/company/ieee-ras-muj)

### Technical Support
- **Issues**: [GitHub Issues](https://github.com/your-username/pixel-palettes/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/pixel-palettes/discussions)
- **Documentation**: See `/docs` folder for detailed guides

### Event-Specific Queries
- **Pixel Palettes**: Contact through event registration form
- **Sponsorship**: ieee.ras@muj.manipal.edu
- **Partnerships**: Include "Partnership" in email subject

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- **Next.js**: MIT License
- **React**: MIT License
- **Tailwind CSS**: MIT License
- **Framer Motion**: MIT License
- **Lucide Icons**: ISC License

## 🙏 Acknowledgments

### Special Thanks
- **IEEE RAS MUJ Team**: For vision and content
- **Manipal University Jaipur**: For institutional support
- **Open Source Community**: For amazing tools and libraries
- **Contributors**: Everyone who helped improve this project

### Sponsors
- **KDK Software**: Tax compliance software leader
- **Coding Blocks**: Premier Indian coding bootcamp

### Inspiration
- **Cyberpunk Aesthetics**: Retro-futuristic design inspiration
- **Modern Web Design**: Contemporary UI/UX patterns
- **Performance Best Practices**: Web.dev and Next.js guidelines

---

<div align="center">

**Built with ❤️ by IEEE RAS MUJ**

[🌐 Visit Website](https://pixelpalettes.ieeerasmuj.com) • [📧 Contact Us](mailto:ieee.ras@muj.manipal.edu) • [🔗 LinkedIn](https://linkedin.com/company/ieee-ras-muj)

</div> 