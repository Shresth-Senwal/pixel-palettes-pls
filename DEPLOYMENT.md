# 🚀 Deployment Guide

This guide covers deploying the IEEE RAS MUJ Pixel Palettes website to Netlify and setting up GitHub integration.

## 📋 Prerequisites

- Node.js 18+ installed locally
- GitHub account
- Netlify account (free tier is sufficient)
- Git repository set up

## 🔧 Project Configuration

The project is already configured for deployment with:

- ✅ Next.js static export configuration
- ✅ Netlify configuration (`netlify.toml`)
- ✅ GitHub Actions workflow
- ✅ Performance optimizations
- ✅ Security headers

## 🌐 Netlify Deployment

### Option 1: Automatic Deployment via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your repository
   - Build settings should auto-detect:
     - **Build command:** `npm run build`
     - **Publish directory:** `out`
     - **Node version:** `18`

3. **Set Environment Variables (if needed):**
   - Go to Site settings > Environment variables
   - Add any production environment variables

4. **Deploy:**
   - Netlify will automatically build and deploy
   - You'll get a unique URL like `https://amazing-site-name.netlify.app`

### Option 2: Manual Deployment

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `out/` folder to the deploy area
   - Your site will be live immediately

## 🤖 GitHub Actions Setup

The project includes automated CI/CD with GitHub Actions:

### Required GitHub Secrets

For automatic deployment, add these secrets to your GitHub repository:

1. Go to your GitHub repository
2. Settings > Secrets and variables > Actions
3. Add the following secrets:

```
NETLIFY_AUTH_TOKEN=your_netlify_auth_token
NETLIFY_SITE_ID=your_netlify_site_id
```

### Getting Netlify Credentials

**Netlify Auth Token:**
1. Go to Netlify > User settings > Applications
2. Create a new personal access token
3. Copy the token

**Netlify Site ID:**
1. Go to your Netlify site dashboard
2. Site settings > General > Site details
3. Copy the Site ID

### Workflow Features

The GitHub Actions workflow automatically:
- ✅ Runs TypeScript type checking
- ✅ Runs ESLint for code quality
- ✅ Runs Lighthouse CI for performance
- ✅ Builds the production site
- ✅ Deploys to Netlify on main branch pushes

## 🏗️ Build Process

### Local Development
```bash
npm run dev          # Start development server
npm run type-check   # Check TypeScript
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Production Build
```bash
npm run build        # Build for production
npm run start        # Start production server locally
```

### Static Export
```bash
npm run export       # Build and export static files
```

## 🔒 Environment Variables

### Required for Production
Create a `.env.local` file (not committed to Git):

```env
# Event Configuration
NEXT_PUBLIC_EVENT_NAME="Pixel Palettes"
NEXT_PUBLIC_EVENT_DATE="27-28 June 2024"
NEXT_PUBLIC_EVENT_VENUE="Online"
NEXT_PUBLIC_PRIZE_POOL="₹15,000"

# Registration Configuration
NEXT_PUBLIC_REGISTRATION_URL="https://unstop.com/hackathons/pixel-palette-manipal-institute-of-technology-manipal-1504966"
NEXT_PUBLIC_REGISTRATION_DEADLINE="11:59 PM, 26 June 2024"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL="ieeeras.muj@muj.manipal.edu"
NEXT_PUBLIC_CONTACT_PHONE="+91-XXXXXXXXXX"

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Form Submission
NEXT_PUBLIC_GOOGLE_SHEETS_URL="your_google_apps_script_url"
```

### Netlify Environment Variables
Set these in Netlify dashboard > Site settings > Environment variables:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- Any `NEXT_PUBLIC_*` variables you need

## 🚀 Custom Domain Setup

### Using Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Let's Encrypt)

### DNS Configuration
For a custom domain like `pixelpalettes.ieeerasmuj.com`:

```
Type: CNAME
Name: pixelpalettes
Value: your-site-name.netlify.app
```

## 📊 Performance Optimization

The site is optimized for:
- ⚡ **Lighthouse Score:** 95+ across all metrics
- 🖼️ **Image Optimization:** WebP/AVIF formats
- 📦 **Bundle Splitting:** Optimized chunk sizes
- 🗜️ **Compression:** Gzip/Brotli enabled
- 🔒 **Security:** Comprehensive security headers
- 📱 **Mobile Performance:** Optimized for all devices

## 🔍 Monitoring & Analytics

### Built-in Monitoring
- Netlify Analytics (basic metrics)
- Lighthouse CI reports
- Build performance metrics

### Optional Integrations
- Google Analytics 4
- Netlify Analytics (paid)
- Sentry for error tracking

## 🐛 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Images Not Loading:**
- Ensure all images are in `public/images/` directory
- Check image paths are correct
- Verify image formats are supported

**Environment Variables Not Working:**
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Check Netlify environment variables are set
- Restart build after adding variables

**404 on Refresh:**
- Netlify redirects are configured in `netlify.toml`
- Ensure `trailingSlash: true` in `next.config.ts`

### Debug Commands
```bash
npm run type-check   # Check TypeScript errors
npm run lint         # Check code quality issues
npm run build        # Test production build locally
```

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Performance Best Practices](https://web.dev/performance/)

## 🎯 Deployment Checklist

Before deploying:
- [ ] All tests pass (`npm run type-check`, `npm run lint`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] Environment variables configured
- [ ] Images optimized and in correct directories
- [ ] Contact form integration working
- [ ] Registration links updated
- [ ] Event information is current
- [ ] Security headers configured
- [ ] Performance optimized (Lighthouse score 90+)

---

**Need Help?** Check the troubleshooting section or create an issue in the repository. 