# IEEE RAS Manipal University Jaipur Website

This repository hosts the official website for the IEEE Robotics and Automation Society (RAS) at Manipal University Jaipur, featuring a modern, professional club interface and an integrated event microsite for "Pixel Palettes" - a 24-hour AI-powered hackathon.

## ✨ Features

### Main IEEE RAS MUJ Website
- **Modern UI**: Sleek, futuristic, and minimalistic design with glassmorphism panels and floating cards.
- **Color Scheme**: Deep purple and maroon/red as primary colors, combined with dark themes, transparent layers, and subtle neon accents for highlights.
- **Fixed Navbar**: Elegant, semi-transparent navbar with smooth hover animations for menu items (Home, About, Events, Gallery, Contact).
- **Hero Section**: Dynamic text animation, layered background visuals with soft gradients, and a prominent call-to-action button.
- **Scroll Animations**: Creative scroll-based animations and subtle parallax effects.
- **Logo Integration**: IEEE RAS MUJ logo only in the navbar and footer, with enhanced contrast and sizing for readability.
- **Responsive Design**: Fully adaptable to various screen sizes, including collapsible navbars for mobile.

### Pixel Palettes Event Microsite
- **Cyberpunk Aesthetic**: Retro-pixel art with neon effects and glassmorphism design.
- **One-Time Loading Animation**: Unique retro loading screen appears only on the first visit, then skips for smooth navigation.
- **External Registration**: "Register Now" button links directly to an external Google Forms URL, opening in a new tab.
- **Judges Page**: Dedicated page for hackathon judges with professional profiles, photos, affiliations, and LinkedIn links.
- **Sponsors Page**: Detailed page for sponsors with logos, descriptions, and LinkedIn contact buttons.
- **Interactive Elements**: Prize pool display with tooltip, and various hover effects.

## 🛠️ Tech Stack
- **Next.js**: React framework for building fast, scalable web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Framer Motion**: Animation library for smooth and interactive UI elements.
- **TypeScript**: For type safety and improved code quality.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
pixel-palettes/
├── public/                   # Static assets like images (e.g., logos)
├── src/
│   ├── app/
│   │   ├── pixelpalettes/    # Pixel Palettes event pages
│   │   │   ├── judges/       # Judges page
│   │   │   └── sponsors/     # Sponsors page
│   │   └── page.tsx          # Main IEEE RAS MUJ homepage
│   ├── components/           # Reusable React components
│   └── globals.css           # Global CSS styles and custom utilities
├── context.md                # Detailed project context and development log
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── README.md                 # Project overview and getting started guide
└── tsconfig.json             # TypeScript configuration
```

## 💡 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
