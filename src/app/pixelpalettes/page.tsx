'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Clock, ArrowRight, Zap, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Pixel Palettes Event Page Component
 * 
 * This component represents the main event page for the "Pixel Palettes" 24-hour 
 * AI-powered hackathon. It features a retro-futuristic cyberpunk design with 
 * advanced animations and interactive elements.
 * 
 * Key Features:
 * - One-time loading animation with retro aesthetic
 * - Session storage to track visits and skip loading on return
 * - Complex Framer Motion animations with staggered reveals
 * - Interactive prize tooltip with animated appearance
 * - External registration integration via Google Forms
 * - Responsive design with glassmorphism effects
 * - Cyberpunk-themed visual elements (glitch effects, neon glows)
 * - Comprehensive event information sections
 * 
 * Sections:
 * - Hero section with event branding and key details
 * - About section explaining the hackathon concept
 * - Schedule timeline with 24-hour event progression
 * - Registration section with event details and CTA
 * - Sponsors showcase with external links
 * - Minimal footer with logo
 * 
 * @returns {JSX.Element} Complete Pixel Palettes event page
 */
export default function Home() {
  /**
   * State to track component mount status for hydration safety
   * Prevents SSR/CSR mismatch in Next.js applications
   */
  const [mounted, setMounted] = useState(false);
  
  /**
   * State to control loading screen visibility
   * Starts as true to show loading animation initially
   */
  const [isLoading, setIsLoading] = useState(true);
  
  /**
   * State to control prize tooltip visibility on hover
   * Used for the interactive prize amount explanation
   */
  const [showPrizeTooltip, setShowPrizeTooltip] = useState(false);
  
  /**
   * Mobile menu visibility state
   * Controls whether the mobile navigation menu is open or closed
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Debug function to reset loading animation for testing
   * Can be called from browser console: window.resetPixelPalettesLoading()
   */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as typeof window & { resetPixelPalettesLoading: () => void }).resetPixelPalettesLoading = () => {
        sessionStorage.removeItem('hasLoadedPixelPalettes');
        console.log('Pixel Palettes loading animation reset - will show on next visit');
      };
    }
  }, []);

  /**
   * Main effect hook for component initialization and loading logic
   * Handles:
   * - Setting mounted state for hydration safety
   * - Session storage tracking for loading animation control
   * - Timer management for extended loading screen duration
   * - Detection of page refresh vs navigation
   */
    useEffect(() => {
    setMounted(true);
    
    // Add a small delay to ensure proper detection
    const initTimer = setTimeout(() => {
      // Check if this is the first visit to Pixel Palettes website in this session
      // Show loading animation on first visit regardless of navigation method
      const hasLoadedPixelPalettes = sessionStorage.getItem('hasLoadedPixelPalettes');
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const isPageRefresh = navigationEntry?.type === 'reload';
      
      // Show loading animation if:
      // 1. First time visiting Pixel Palettes in this session (no session flag)
      // 2. Page was refreshed (user pressed F5 or refresh button)
      // This includes navigation from main website "Learn More" button
      if (!hasLoadedPixelPalettes || isPageRefresh) {
        console.log('Showing full loading animation - First visit or refresh');
        
        // Complete loading animation (2 seconds) - always show on first visit
        const timer = setTimeout(() => {
          setIsLoading(false);
          // Set session flag AFTER loading completes to ensure it shows
          sessionStorage.setItem('hasLoadedPixelPalettes', 'true');
        }, 2000); // 2 seconds loading time for complete experience

        return () => clearTimeout(timer);
      } else {
        console.log('Skipping loading animation - Already visited');
        // Already visited in this session: Skip loading animation quickly
        const quickTimer = setTimeout(() => {
          setIsLoading(false);
        }, 50); // Minimal delay for smooth transition

        return () => clearTimeout(quickTimer);
      }
    }, 10); // Small delay to ensure proper initialization

    return () => clearTimeout(initTimer);
  }, []);

  /**
   * Close mobile menu when clicking outside
   * Improves user experience by allowing easy dismissal
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const nav = document.querySelector('nav');
      
      if (isMobileMenuOpen && nav && !nav.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Prevent rendering until component is mounted (avoids hydration mismatch)
  if (!mounted) return null;

  /**
   * Handles registration button clicks
   * Opens external Unstop registration in new tab
   * Uses window.open for better user experience than direct navigation
   */
  const handleRegistrationClick = () => {
    // Open external registration URL in new tab
    window.open('https://unstop.com/hackathons/pixel-palette-manipal-institute-of-technology-manipal-1504966', '_blank');
  };

  /**
   * Framer Motion animation variants for loading screen container
   * Controls the overall fade-out transition when loading completes
   */
  const loadingVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  /**
   * Framer Motion animation variants for individual letters in loading animation
   * Creates staggered 3D letter animations with:
   * - Vertical slide-in motion (y: 50 to 0)
   * - 3D rotation effect (rotateX: -90 to 0)
   * - Scale transformation for dramatic entrance
   * - Staggered timing based on letter index
   */
  const letterVariants = {
    initial: { 
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.08, // Staggered delay: 80ms per letter (quick reveal)
        duration: 0.6,   // Quick individual letter animation
        ease: "backOut" as const // Bounce-back easing for dramatic effect
      }
    })
  };

  /**
   * Framer Motion animation variants for glitch effects
   * Creates continuous color-shifting glitch overlay using hue-rotate filter
   * Cycles through full color spectrum (0-360 degrees) infinitely
   */
  const glitchVariants = {
    initial: { filter: "hue-rotate(0deg)" },
    animate: {
      filter: [
        "hue-rotate(0deg)",
        "hue-rotate(90deg)",
        "hue-rotate(180deg)",
        "hue-rotate(270deg)",
        "hue-rotate(360deg)"
      ],
      transition: {
        duration: 1.5,   // Quick glitch effect cycles
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };





  return (
    <div className="min-h-screen bg-black text-white">
      {/* Loading Screen - Retro Event Name Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            variants={loadingVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Enhanced Retro Grid Background with Perspective */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                transform: 'perspective(800px) rotateX(25deg)',
                transformOrigin: 'center bottom'
              }}
            />

            {/* Animated Horizontal Scanlines - Full width sweeping lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`scanline-${i}`}
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
                  style={{
                    top: `${15 + i * 20}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Vertical Scanlines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`vscanline-${i}`}
                  className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60"
                  style={{
                    left: `${25 + i * 25}%`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scaleY: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Corner Frame Animations */}
            <div className="absolute inset-8 border-2 border-cyan-400/40 pointer-events-none">
              {/* Animated corner brackets */}
              {[
                { corner: 'top-left', classes: 'top-0 left-0 border-l-4 border-t-4' },
                { corner: 'top-right', classes: 'top-0 right-0 border-r-4 border-t-4' },
                { corner: 'bottom-left', classes: 'bottom-0 left-0 border-l-4 border-b-4' },
                { corner: 'bottom-right', classes: 'bottom-0 right-0 border-r-4 border-b-4' }
              ].map((corner, i) => (
                <motion.div
                  key={corner.corner}
                  className={`absolute w-12 h-12 border-cyan-400 ${corner.classes}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.4,
                    ease: "backOut"
                  }}
                />
              ))}
            </div>

            {/* Main Event Name - Split into PIXEL and PALETTES with different colors */}
            <div className="relative z-10 text-center mb-8">
              {/* PIXEL text in purple */}
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-4">
                {"PIXEL".split("").map((letter, i) => (
                  <motion.span
                    key={`pixel-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    className="font-pixel text-4xl md:text-6xl lg:text-8xl text-purple-400 inline-block"
                    style={{
                      // Neon glow effect with multiple shadow layers
                      textShadow: '0 0 20px rgba(147, 51, 234, 0.8), 0 0 40px rgba(147, 51, 234, 0.4)',
                      transformStyle: 'preserve-3d' // Enable 3D transforms
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* PALETTES text in cyan */}
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                {"PALETTES".split("").map((letter, i) => (
                  <motion.span
                    key={`palettes-${i}`}
                    custom={i + 5} // Offset delay to appear after PIXEL
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    className="font-pixel text-4xl md:text-6xl lg:text-8xl text-cyan-400 inline-block"
                    style={{
                      textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Glitch Effect Overlay - Animated color-shifting overlay */}
              <motion.div
                variants={glitchVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 pointer-events-none"
                style={{
                  // Diagonal gradient with blend mode for glitch effect
                  background: 'linear-gradient(45deg, transparent 48%, rgba(255, 0, 255, 0.1) 49%, rgba(255, 0, 255, 0.1) 51%, transparent 52%)',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>

            {/* Enhanced Loading Dots Matrix - More prominent and animated */}
            <div className="flex space-x-3 mb-12">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-4 h-4 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0.3],
                    scale: [0, 1.2, 1, 0.8],
                    backgroundColor: [
                      'rgba(147, 51, 234, 0.8)',
                      'rgba(0, 255, 255, 1)',
                      'rgba(147, 51, 234, 1)',
                      'rgba(0, 255, 255, 0.6)'
                    ]
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)'
                  }}
                />
              ))}
            </div>

            {/* Enhanced Loading Text - More prominent status indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-center space-y-4"
            >
              <motion.div 
                className="font-mono text-xl font-bold tracking-wider text-gray-200"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  textShadow: [
                    '0 0 10px rgba(0, 255, 255, 0.5)',
                    '0 0 20px rgba(0, 255, 255, 0.8)',
                    '0 0 10px rgba(0, 255, 255, 0.5)'
                  ]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                INITIALIZING HACKATHON
              </motion.div>
              
              <motion.div 
                className="font-mono text-sm text-gray-400 tracking-wide"
                animate={{ 
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Loading creative experience...
              </motion.div>
            </motion.div>

            {/* Enhanced CRT Effect - Multiple layer scanlines */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.15) 2px, rgba(0, 255, 255, 0.15) 4px)'
              }}
            />
            
            {/* Additional subtle overlay for depth */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.3) 100%)'
              }}
              animate={{
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Only visible after loading completes */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navigation Bar - Fixed header with glassmorphism and minimal padding */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
              <div className="max-w-6xl mx-auto px-6" style={{ paddingTop: '1px', paddingBottom: '1px' }}>
                <div className="flex items-center justify-between">
                  {/* Logo Section - Pixel Palettes branding */}
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-3">
                      <Image
                        src="/images/logos/logo.png"
                        alt="Pixel Palettes Logo"
                        width={256}
                        height={256}
                        priority // Load immediately for above-the-fold content
                        quality={100}
                        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8))',
                          imageRendering: 'crisp-edges'
                        }}
                        sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                      />
                    </Link>
                  </div>
                  {/* Desktop Navigation Menu - Hidden on mobile */}
                  <div className="hidden md:flex space-x-8">
                    <a href="#about" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">About</a>
                    <Link href="/pixelpalettes/judges" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">Judges</Link>
                    <Link href="/pixelpalettes/sponsors" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">Sponsors</Link>
                  </div>
                  
                  {/* Mobile Menu Button */}
                  <div className="md:hidden">
                    <button 
                      className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      aria-label="Toggle mobile menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile Menu Overlay */}
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800/50"
                >
                  <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex flex-col space-y-4">
                      <motion.a
                        href="#about"
                        className="px-4 py-3 text-lg font-mono-pixel text-gray-300 hover:text-purple-400 transition-colors duration-300 border-b border-gray-800/30"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        About
                      </motion.a>
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          href="/pixelpalettes/judges" 
                          className="block px-4 py-3 text-lg font-mono-pixel text-gray-300 hover:text-purple-400 transition-colors duration-300 border-b border-gray-800/30"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Judges
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          href="/pixelpalettes/sponsors" 
                          className="block px-4 py-3 text-lg font-mono-pixel text-gray-300 hover:text-purple-400 transition-colors duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sponsors
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </nav>

            {/* Hero Section - Main landing area with event branding */}
            <section className="min-h-screen flex items-center justify-center relative modern-bg pt-20">
              <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Main Title and Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12 mt-16"
                >
                  {/* Main Event Title - Glitch effect with neon glow */}
                  <motion.h1 
                    className="glitch font-pixel text-5xl md:text-7xl lg:text-8xl mb-8 neon-glow"
                    data-text="PIXEL PALETTES" // Used for CSS glitch effect
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    PIXEL PALETTES
                  </motion.h1>
                  
                  {/* Event Tagline */}
                  <motion.p 
                    className="font-mono-pixel text-2xl md:text-3xl mb-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    24-Hour AI Powered Hackathon
                  </motion.p>
                  
                  {/* Event Description */}
                  <motion.p 
                    className="font-mono-pixel text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Where creativity meets artificial intelligence in a 24-hour journey of innovation
                  </motion.p>
                </motion.div>

                {/* Event Details Cards - Date, Venue, and Prizes */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {/* Date Card */}
                  <div className="glass modern-card rounded-2xl p-6 text-center">
                    <Calendar className="text-pink-400 mx-auto mb-3" size={28} />
                    <div className="font-pixel text-sm mb-1 text-pink-400">DATE</div>
                    <div className="font-mono-pixel text-xl">27-28 JUNE</div>
                  </div>
                  
                  {/* Venue Card */}
                  <div className="glass modern-card rounded-2xl p-6 text-center">
                    <MapPin className="text-cyan-400 mx-auto mb-3" size={28} />
                    <div className="font-pixel text-sm mb-1 text-cyan-400">VENUE</div>
                    <div className="font-mono-pixel text-xl">ONLINE</div>
                  </div>
                  
                  {/* Prizes Card with Interactive Tooltip */}
                  <div className="glass modern-card rounded-2xl p-6 text-center relative">
                    <Trophy className="text-yellow-400 mx-auto mb-3" size={28} />
                    <div className="font-pixel text-sm mb-1 text-yellow-400">PRIZES</div>
                    {/* Prize Amount with Pulsing Glow Animation */}
                    <motion.div 
                      className="font-mono-pixel text-xl flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      animate={{ 
                        textShadow: [
                          "0 0 10px rgba(255, 193, 7, 0.5)",
                          "0 0 20px rgba(255, 193, 7, 0.8)",
                          "0 0 10px rgba(255, 193, 7, 0.5)"
                        ]
                      }}
                      transition={{ 
                        textShadow: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <span>₹15,000*</span>
                      {/* Info Icon for Tooltip Trigger */}
                      <button
                        onMouseEnter={() => setShowPrizeTooltip(true)}
                        onMouseLeave={() => setShowPrizeTooltip(false)}
                        className="text-yellow-400/60 hover:text-yellow-400 transition-colors"
                      >
                        <Info size={16} />
                      </button>
                    </motion.div>
                    
                    {/* Prize Tooltip - Animated explanation */}
                    <AnimatePresence>
                      {showPrizeTooltip && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute -top-16 left-1/2 transform -translate-x-1/2 glass-strong rounded-lg p-3 text-sm font-mono-pixel text-gray-300 whitespace-nowrap z-10"
                        >
                          *Exact prize split and rewards to be announced
                          {/* Tooltip Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Primary CTA Button - Registration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mb-16"
                >
                  <motion.button 
                    onClick={handleRegistrationClick}
                    className="pixel-button font-pixel text-base px-10 py-5 rounded-xl text-white group flex items-center mx-auto space-x-3 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    
                    {/* Animated Glowing Red Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(239, 68, 68, 0.3)",
                          "0 0 40px rgba(239, 68, 68, 0.6)",
                          "0 0 20px rgba(239, 68, 68, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* About Section - Event concept and features */}
            <section id="about" className="py-24 bg-gradient-to-b from-black to-purple-900/10">
              <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="font-pixel text-3xl md:text-5xl mb-6 neon-glow">ABOUT</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
                  <p className="font-mono-pixel text-xl md:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
                    Pixel Palettes is a creatively charged, AI-driven 24-hour hackathon that perfectly blends 
                    technology and design. Whether you&apos;re a seasoned developer, a design enthusiast, or an AI curious mind, 
                    this hackathon offers the perfect platform to showcase your skills.
                  </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {/* Innovate Feature */}
                  <div className="glass modern-card rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="text-pink-400" size={36} />
                    </div>
                    <h3 className="font-pixel text-base mb-4 text-pink-400">INNOVATE</h3>
                    <p className="font-mono-pixel text-base text-gray-400 leading-relaxed">
                      Push the boundaries of AI and create groundbreaking solutions
                    </p>
                  </div>
                  
                  {/* 24 Hours Feature */}
                  <div className="glass modern-card rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Clock className="text-cyan-400" size={36} />
                    </div>
                    <h3 className="font-pixel text-base mb-4 text-cyan-400">24 HOURS</h3>
                    <p className="font-mono-pixel text-base text-gray-400 leading-relaxed">
                      Intensive coding marathon with continuous mentorship and support
                    </p>
                  </div>
                  
                  {/* Compete Feature */}
                  <div className="glass modern-card rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Trophy className="text-yellow-400" size={36} />
                    </div>
                    <h3 className="font-pixel text-base mb-4 text-yellow-400">COMPETE</h3>
                    <p className="font-mono-pixel text-base text-gray-400 leading-relaxed">
                      Compete for exciting prizes and recognition in the tech community
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Schedule Section - 24-hour timeline */}
            <section id="schedule" className="py-24 bg-gradient-to-b from-purple-900/10 to-black">
              <div className="max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="font-pixel text-3xl md:text-5xl mb-6 neon-glow">SCHEDULE</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
                </motion.div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {[
                    { time: "11:00 AM", event: "Opening Ceremony", desc: "Welcome to Pixel Palettes hackathon" },
                    { time: "11:15 AM", event: "Kickoff Bootcamp", desc: "45-minute intensive session to get started" },
                    { time: "12:00 PM", event: "Hackathon Starts", desc: "Begin your 24-hour coding journey" },
                    { time: "1:00 PM", event: "Project Theme Declaration", desc: "Teams announce their chosen themes" },
                    { time: "5:00 PM", event: "PPT Submission Deadline", desc: "Submit your presentation slides" },
                    { time: "8:00 PM", event: "Video Submission Window", desc: "Submit your project demonstration video" },
                    { time: "Day 2 - 10:00 AM", event: "Final Project Submission", desc: "Complete project submission window (10:00 AM - 12:00 PM)" },
                  ].map((item, index) => (
                    // Individual Timeline Item
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-6"
                    >
                      {/* Timeline Dot - Styled with CSS class from globals.css */}
                      <div className="timeline-dot w-4 h-4 rounded-full flex-shrink-0"></div>
                      {/* Timeline Content Card */}
                      <div className="glass modern-card rounded-xl p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <div className="font-pixel text-base text-pink-400 mb-2">{item.time}</div>
                            <h4 className="font-pixel text-sm mb-2">{item.event}</h4>
                            <p className="font-mono-pixel text-base text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Registration Section - Event details and CTA */}
            <section id="register" className="py-24 bg-gradient-to-b from-black to-purple-900/10">
              <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
                >
                  <h2 className="font-pixel text-3xl md:text-5xl mb-6 neon-glow">REGISTER</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
                  <p className="font-mono-pixel text-xl text-gray-300 max-w-2xl mx-auto">
                    Ready to push the boundaries of AI and design? Join us for this incredible 24-hour journey.
                  </p>
                </motion.div>

                {/* Registration Details and CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-md mx-auto"
                >
                  {/* Registration Details Card */}
                  <div className="glass modern-card rounded-2xl p-8 mb-8">
                    <div className="space-y-4 font-mono-pixel text-base">
                      {/* Team Size */}
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-400">Team Size</span>
                        <span>1-4 Members</span>
                      </div>
                      {/* Registration Fee */}
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-400">Registration Fee</span>
                        <span className="text-green-400 font-pixel text-sm">FREE</span>
                      </div>
                      {/* Registration Deadline */}
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">Deadline</span>
                        <span>11:59 PM, 26 June 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Registration CTA Button */}
                  <motion.button
                    onClick={handleRegistrationClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pixel-button font-pixel text-base px-12 py-5 rounded-xl text-white w-full group flex items-center justify-center space-x-3 relative overflow-hidden"
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    
                    {/* Animated Glowing Red Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(239, 68, 68, 0.3)",
                          "0 0 40px rgba(239, 68, 68, 0.6)",
                          "0 0 20px rgba(239, 68, 68, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* Sponsors Section - Show event sponsors */}
            <section className="py-16 bg-gradient-to-b from-black to-purple-900/10">
              <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h2 className="font-pixel text-2xl md:text-3xl mb-6 text-gray-300" style={{ textShadow: '0 0 10px rgba(147, 51, 234, 0.6)' }}>
                    SPONSORED BY
                  </h2>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
                </motion.div>

                {/* Sponsor Logos - Clean display without containers */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
                >
                  {/* KDK Software Logo - Clickable */}
                  <motion.a
                    href="https://www.kdksoftware.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/logos/kdk-logo.png"
                      alt="KDK Software"
                      width={180}
                      height={90}
                      quality={100}
                      className="max-w-full max-h-full object-contain hover:opacity-80 transition-opacity"
                      style={{
                        imageRendering: 'crisp-edges'
                      }}
                      sizes="(max-width: 768px) 160px, 180px"
                    />
                  </motion.a>

                  {/* Coding Blocks Logo - Clickable */}
                  <motion.a
                    href="https://www.codingblocks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/logos/coding-blocks-logo.png"
                      alt="Coding Blocks"
                      width={180}
                      height={90}
                      quality={100}
                      className="max-w-full max-h-full object-contain hover:opacity-80 transition-opacity"
                      style={{
                        imageRendering: 'crisp-edges'
                      }}
                      sizes="(max-width: 768px) 160px, 180px"
                    />
                  </motion.a>
                </motion.div>

                {/* View All Sponsors Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center mt-10"
                >
                  <Link
                    href="/pixelpalettes/sponsors"
                    className="font-mono-pixel text-sm text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center space-x-2 group"
                  >
                    <span>View All Sponsors</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Footer - Minimal footer with logo only */}
            <footer style={{ paddingTop: '2px', paddingBottom: '2px' }}>
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-end">
                  <Image
                    src="/images/logos/logo.png"
                    alt="IEEE RAS Logo"
                    width={192}
                    height={192}
                    quality={100}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-90"
                    style={{
                      // Purple glow with hue rotation for color variation
                      filter: 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.6)) hue-rotate(280deg)',
                      imageRendering: 'crisp-edges'
                    }}
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                  />
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
