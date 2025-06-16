'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Clock, ArrowRight, Zap, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [showPrizeTooltip, setShowPrizeTooltip] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if this is the first visit to Pixel Palettes specifically
    const hasVisitedPixelPalettes = sessionStorage.getItem('hasVisitedPixelPalettes');
    
    if (!hasVisitedPixelPalettes) {
      // First visit: Show full loading animation
      sessionStorage.setItem('hasVisitedPixelPalettes', 'true');
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500); // 3.5 seconds loading time

      return () => clearTimeout(timer);
    } else {
      // Already visited: Skip loading animation quickly
      const quickTimer = setTimeout(() => {
        setIsLoading(false);
      }, 100); // Very short delay to ensure smooth transition

      return () => clearTimeout(quickTimer);
    }
  }, []);

  if (!mounted) return null;

  const handleRegistrationClick = () => {
    // Open external registration URL in new tab
    window.open('https://forms.google.com/your-registration-form', '_blank');
  };



  // Loading screen animation variants - Retro Event Name Loading
  const loadingVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

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
        delay: i * 0.1,
        duration: 0.8,
        ease: "backOut" as const
      }
    })
  };

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
        duration: 2,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  const scanlineVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  const dotMatrixVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Loading Screen - Retro Event Name Loading */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            variants={loadingVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Retro Grid Background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Animated Scanlines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`scanline-${i}`}
                  variants={scanlineVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                  style={{
                    top: `${20 + i * 30}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Main Event Name */}
            <div className="relative z-10 text-center mb-8">
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
                      textShadow: '0 0 20px rgba(147, 51, 234, 0.8), 0 0 40px rgba(147, 51, 234, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                {"PALETTES".split("").map((letter, i) => (
                  <motion.span
                    key={`palettes-${i}`}
                    custom={i + 5}
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

              {/* Glitch Effect Overlay */}
              <motion.div
                variants={glitchVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, transparent 48%, rgba(255, 0, 255, 0.1) 49%, rgba(255, 0, 255, 0.1) 51%, transparent 52%)',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>

            {/* Loading Dots Matrix */}
            <div className="flex space-x-2 mb-8">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  custom={i}
                  variants={dotMatrixVariants}
                  initial="initial"
                  animate="animate"
                  className="w-3 h-3 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: '0 0 10px rgba(147, 51, 234, 0.6)'
                  }}
                />
              ))}
            </div>

            {/* Retro Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-center"
            >
              <div className="font-mono-pixel text-lg text-gray-300 mb-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  INITIALIZING HACKATHON
                </motion.span>
              </div>
              
              <div className="font-mono-pixel text-sm text-gray-500">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading creative experience...
                </motion.span>
              </div>
            </motion.div>

            {/* Retro Border Frame */}
            <div className="absolute inset-4 border border-purple-400/30 pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-400"></div>
            </div>

            {/* Vintage CRT Effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Only show when not loading */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
              <div className="max-w-6xl mx-auto px-6" style={{ paddingTop: '1px', paddingBottom: '1px' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-3">
                      <Image
                        src="/logo.png"
                        alt="Pixel Palettes Logo"
                        width={256}
                        height={256}
                        priority
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
                  <div className="hidden md:flex space-x-8">
                    <a href="#about" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">About</a>
                    <Link href="/pixelpalettes/judges" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">Judges</Link>
                    <Link href="/pixelpalettes/sponsors" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">Sponsors</Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Hero Section - Modern & Clean */}
            <section className="min-h-screen flex items-center justify-center relative modern-bg pt-20">
              <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12 mt-16"
                >
                  <motion.h1 
                    className="glitch font-pixel text-5xl md:text-7xl lg:text-8xl mb-8 neon-glow"
                    data-text="PIXEL PALETTES"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    PIXEL PALETTES
                  </motion.h1>
                  
                  <motion.p 
                    className="font-mono-pixel text-2xl md:text-3xl mb-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    24-Hour AI Powered Hackathon
                  </motion.p>
                  
                  <motion.p 
                    className="font-mono-pixel text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Where creativity meets artificial intelligence in a 24-hour journey of innovation
                  </motion.p>
                </motion.div>

                {/* Event Details - Clean Cards */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="glass modern-card rounded-2xl p-6 text-center">
                    <Calendar className="text-pink-400 mx-auto mb-3" size={28} />
                    <div className="font-pixel text-sm mb-1 text-pink-400">DATE</div>
                    <div className="font-mono-pixel text-xl">21-22 JUNE</div>
                  </div>
                  <div className="glass modern-card rounded-2xl p-6 text-center">
                    <MapPin className="text-cyan-400 mx-auto mb-3" size={28} />
                    <div className="font-pixel text-sm mb-1 text-cyan-400">VENUE</div>
                    <div className="font-mono-pixel text-xl">ONLINE</div>
                  </div>
                  <div className="glass modern-card rounded-2xl p-6 text-center relative">
                    <Trophy className="text-yellow-400 mx-auto mb-3" size={28} />
                    <div className="font-pixel text-sm mb-1 text-yellow-400">PRIZES</div>
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
                      <button
                        onMouseEnter={() => setShowPrizeTooltip(true)}
                        onMouseLeave={() => setShowPrizeTooltip(false)}
                        className="text-yellow-400/60 hover:text-yellow-400 transition-colors"
                      >
                        <Info size={16} />
                      </button>
                    </motion.div>
                    
                    {/* Prize Tooltip */}
                    <AnimatePresence>
                      {showPrizeTooltip && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute -top-16 left-1/2 transform -translate-x-1/2 glass-strong rounded-lg p-3 text-sm font-mono-pixel text-gray-300 whitespace-nowrap z-10"
                        >
                          *Exact prize split and rewards to be announced
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* CTA Button */}
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
                    
                    {/* Glowing red effect */}
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

            {/* About Section - Minimal */}
            <section id="about" className="py-24 bg-gradient-to-b from-black to-purple-900/10">
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="font-pixel text-3xl md:text-5xl mb-6 neon-glow">ABOUT</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8"></div>
                  <p className="font-mono-pixel text-xl md:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
                    Pixel Palettes is a creatively charged, AI-driven 24-hour hackathon that perfectly blends 
                    technology and design. Whether you&apos;re a seasoned developer, a design enthusiast, or an AI curious mind, 
                    this hackathon offers the perfect platform to showcase your skills.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  <div className="glass modern-card rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="text-pink-400" size={36} />
                    </div>
                    <h3 className="font-pixel text-base mb-4 text-pink-400">INNOVATE</h3>
                    <p className="font-mono-pixel text-base text-gray-400 leading-relaxed">
                      Push the boundaries of AI and create groundbreaking solutions
                    </p>
                  </div>
                  
                  <div className="glass modern-card rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Clock className="text-cyan-400" size={36} />
                    </div>
                    <h3 className="font-pixel text-base mb-4 text-cyan-400">24 HOURS</h3>
                    <p className="font-mono-pixel text-base text-gray-400 leading-relaxed">
                      Intensive coding marathon with continuous mentorship and support
                    </p>
                  </div>
                  
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

            {/* Schedule Section - Clean Timeline */}
            <section id="schedule" className="py-24 bg-gradient-to-b from-purple-900/10 to-black">
              <div className="max-w-4xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="font-pixel text-3xl md:text-5xl mb-6 neon-glow">SCHEDULE</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
                </motion.div>

                <div className="space-y-8">
                  {[
                    { time: "00:00", event: "Registration & Team Formation", desc: "Welcome ceremony and team building" },
                    { time: "01:00", event: "Problem Statement Release", desc: "Challenge themes announced" },
                    { time: "02:00", event: "Hacking Begins", desc: "24-hour coding marathon starts" },
                    { time: "12:00", event: "Mid-Point Check", desc: "Progress review and mentorship" },
                    { time: "23:00", event: "Submission Deadline", desc: "Final submissions and presentations" },
                    { time: "24:00", event: "Results & Awards", desc: "Winner announcement and closing ceremony" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-6"
                    >
                      <div className="timeline-dot w-4 h-4 rounded-full flex-shrink-0"></div>
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

            {/* Registration Section - Clean */}
            <section id="register" className="py-24 bg-gradient-to-b from-black to-purple-900/10">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
                >
                  <h2 className="font-pixel text-3xl md:text-5xl mb-6 neon-glow">REGISTER</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-8"></div>
                  <p className="font-mono-pixel text-xl text-gray-300 max-w-2xl mx-auto">
                    Ready to push the boundaries of AI and design? Join us for this incredible 24-hour journey.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-md mx-auto"
                >
                  <div className="glass modern-card rounded-2xl p-8 mb-8">
                    <div className="space-y-4 font-mono-pixel text-base">
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-400">Team Size</span>
                        <span>2-4 Members</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-400">Registration Fee</span>
                        <span className="text-green-400 font-pixel text-sm">FREE</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">Deadline</span>
                        <span>20 June 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={handleRegistrationClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pixel-button font-pixel text-base px-12 py-5 rounded-xl text-white w-full group flex items-center justify-center space-x-3 relative overflow-hidden"
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    
                    {/* Glowing red effect */}
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

            {/* Sponsors Section */}
            <section className="py-16 bg-gradient-to-b from-black to-purple-900/10">
              <div className="max-w-6xl mx-auto px-6">
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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
                >
                  {/* Sponsor 1 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass modern-card rounded-xl p-6 flex items-center justify-center min-w-[200px] h-24"
                  >
                    <Image
                      src="/sponsor1.png"
                      alt="Sponsor 1"
                      width={160}
                      height={80}
                      quality={100}
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={{
                        filter: 'grayscale(100%) brightness(1.2) drop-shadow(0 0 8px rgba(147, 51, 234, 0.3))',
                        imageRendering: 'crisp-edges'
                      }}
                      sizes="(max-width: 768px) 160px, 200px"
                    />
                  </motion.div>

                  {/* Sponsor 2 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass modern-card rounded-xl p-6 flex items-center justify-center min-w-[200px] h-24"
                  >
                    <Image
                      src="/sponsor2.png"
                      alt="Sponsor 2"
                      width={160}
                      height={80}
                      quality={100}
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={{
                        filter: 'grayscale(100%) brightness(1.2) drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
                        imageRendering: 'crisp-edges'
                      }}
                      sizes="(max-width: 768px) 160px, 200px"
                    />
                  </motion.div>
                </motion.div>

                {/* View All Sponsors Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center mt-8"
                >
                  <a
                    href="/sponsors"
                    className="font-mono-pixel text-sm text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>View All Sponsors</span>
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              </div>
            </section>

            {/* Footer - Logo Only */}
            <footer style={{ paddingTop: '2px', paddingBottom: '2px' }}>
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-end">
                  <Image
                    src="/logo.png"
                    alt="IEEE RAS Logo"
                    width={192}
                    height={192}
                    quality={100}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-90"
                    style={{
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
