# 🚀 Pixel Palettes - Netlify Deployment Directory

This directory contains all the necessary files for deploying the IEEE RAS MUJ Pixel Palettes website to Netlify.

## 📁 Directory Structure

```
pixel-palettes-deploy/
├── out/                    # Static export files (ready for deployment)
├── src/                    # Source code
├── public/                 # Static assets
├── scripts/                # Deployment scripts
├── node_modules/           # Dependencies
├── .next/                  # Next.js build output
├── netlify.toml           # Netlify configuration
├── next.config.ts         # Next.js configuration (static export enabled)
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Exact dependency versions
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mjs      # ESLint configuration
├── postcss.config.mjs     # PostCSS configuration
├── .env.example           # Environment variables template
├── .prettierrc.json       # Code formatting configuration
├── lighthouserc.json      # Performance testing configuration
├── vercel.json            # Vercel configuration (backup)
├── README.md              # Main project documentation
├── DEPLOYMENT.md          # Detailed deployment guide
├── CONTRIBUTING.md        # Contribution guidelines
└── LICENSE                # Project license
```

## 🌐 Netlify Deployment

### Option 1: Git Integration (Recommended)

1. **Push to GitHub**
   - Initialize git repository: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial deployment setup"`
   - Push to GitHub repository

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Use these build settings:
     ```
     Build command: npm run build
     Publish directory: out
     Node version: 18
     ```

3. **Environment Variables** (if needed)
   - Go to Site settings → Environment variables
   - Add any required environment variables from `.env.example`

### Option 2: Manual Deploy

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   # Deploy for preview
   netlify deploy --dir=out

   # Deploy to production
   netlify deploy --prod --dir=out
   ```

### Option 3: Drag & Drop

1. **Build the project** (if not already built)
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Dashboard**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `out` folder to the deploy area

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Run locally (development)
npm run dev

# Run quality checks
npm run lint
npm run type-check

# Format code
npm run format

# Performance audit
npm run lighthouse

# Clean build files
npm run clean
```

## 📦 What's Included

### ✅ Production Ready Features

- **Static Export**: Configured for Netlify static hosting
- **Performance Optimized**: Bundle splitting, compression, caching
- **Security Headers**: CSP, HSTS, XSS protection via `netlify.toml`
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Responsive Design**: Mobile-first approach
- **Modern Web Standards**: ES6+, TypeScript, CSS Grid/Flexbox
- **Accessibility**: WCAG 2.1 AA compliance
- **Cross-browser Support**: Modern browsers with fallbacks

### 🛠️ Development Tools

- **TypeScript**: Type safety and better developer experience
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Lighthouse**: Performance monitoring
- **PostCSS**: CSS processing and optimization

### 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Smooth Animations**: Framer Motion integration
- **Interactive Elements**: Hover effects, transitions
- **Loading States**: Skeleton loaders, progress indicators
- **Error Handling**: User-friendly error messages
- **Dark/Light Mode**: System preference detection

## 🌍 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=https://your-site.netlify.app
NEXT_PUBLIC_REGISTRATION_URL=https://your-registration-url

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.com
```

## 🚨 Important Notes

1. **Static Export**: This build is configured for static export (`output: 'export'`)
2. **Image Optimization**: Disabled for static export (`unoptimized: true`)
3. **Server Features**: No server-side features (API routes, middleware)
4. **Headers**: Configured via `netlify.toml`, not Next.js config
5. **Redirects**: Handled by Netlify, not Next.js

## 🔍 Verification Checklist

Before deploying, verify:

- [ ] `out` directory exists and contains HTML files
- [ ] `netlify.toml` points to `out` directory
- [ ] All images and assets are in `out` directory
- [ ] Environment variables are configured
- [ ] Build completes without errors
- [ ] Lighthouse scores are acceptable

## 📞 Support

For deployment issues:

1. Check the build logs in Netlify dashboard
2. Verify all files are present in the `out` directory
3. Test the build locally: `npm run build && npm run start`
4. Review the deployment guide: `DEPLOYMENT.md`

## 🎯 Performance Targets

- **Lighthouse Performance**: >90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <3s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: <200KB (gzipped)

---

**Ready to deploy!** 🚀

This directory contains everything needed for a successful Netlify deployment of the IEEE RAS MUJ Pixel Palettes website. 