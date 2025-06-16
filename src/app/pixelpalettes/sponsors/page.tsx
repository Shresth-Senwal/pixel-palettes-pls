'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Globe, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SponsorsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sponsors = [
    {
      id: 1,
      name: "Tech Innovators Inc.",
      logo: "/sponsor1.png",
      tier: "Platinum Sponsor",
      description: "Tech Innovators Inc. is a leading technology company specializing in AI and machine learning solutions. They are committed to fostering innovation and supporting the next generation of tech talent through hackathons and educational initiatives.",
      website: "https://techinnovators.com",
      email: "partnerships@techinnovators.com",
      contribution: "Prize Pool & Mentorship",
      color: "purple",
      linkedinUrl: "https://linkedin.com/company/techinnovators-inc"
    },
    {
      id: 2,
      name: "Digital Solutions Corp",
      logo: "/sponsor2.png",
      tier: "Gold Sponsor",
      description: "Digital Solutions Corp provides cutting-edge digital transformation services to enterprises worldwide. They believe in empowering young developers and designers to create innovative solutions that shape the future of technology.",
      website: "https://digitalsolutions.com",
      email: "events@digitalsolutions.com",
      contribution: "Infrastructure & Resources",
      color: "cyan",
      linkedinUrl: "https://linkedin.com/company/digital-solutions-corp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
              <Link href="/pixelpalettes#about" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">About</Link>
              <Link href="/pixelpalettes/judges" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">Judges</Link>
              <Link href="/pixelpalettes/sponsors" className="text-xl text-purple-400 font-mono-pixel">Sponsors</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/pixelpalettes"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors font-mono-pixel"
            >
              <ArrowLeft size={18} />
              <span>Back to Event</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="font-pixel text-4xl md:text-6xl mb-6 neon-glow">OUR SPONSORS</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="font-mono-pixel text-xl text-gray-300 max-w-3xl mx-auto">
              We are grateful to our amazing sponsors who make Pixel Palettes possible. 
              Their support enables us to create an incredible hackathon experience for all participants.
            </p>
          </motion.div>

          {/* Sponsors Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`glass modern-card rounded-2xl p-8 md:p-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex items-center gap-8 md:gap-12`}
              >
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className={`w-48 h-32 md:w-64 md:h-40 bg-gradient-to-br ${
                      sponsor.color === 'purple' 
                        ? 'from-purple-500/10 to-pink-500/10 border-purple-400/30' 
                        : 'from-cyan-500/10 to-blue-500/10 border-cyan-400/30'
                    } border-2 rounded-xl flex items-center justify-center p-6`}>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={120}
                        quality={100}
                        className="max-w-full max-h-full object-contain"
                        style={{
                          filter: `drop-shadow(0 0 12px rgba(${
                            sponsor.color === 'purple' ? '147, 51, 234' : '6, 182, 212'
                          }, 0.4))`,
                          imageRendering: 'crisp-edges'
                        }}
                      />
                    </div>
                    
                    {/* Tier Badge */}
                    <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-pixel ${
                      sponsor.color === 'purple' 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-400/50' 
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
                    }`}>
                      {sponsor.tier}
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className={`font-pixel text-2xl md:text-3xl mb-4 ${
                    sponsor.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'
                  }`}>
                    {sponsor.name}
                  </h2>
                  
                  <p className="font-mono-pixel text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    {sponsor.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <span className="font-mono-pixel text-sm text-gray-400">Contribution:</span>
                      <span className={`font-pixel text-sm ${
                        sponsor.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'
                      }`}>
                        {sponsor.contribution}
                      </span>
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                        sponsor.color === 'purple'
                          ? 'border-purple-400/50 text-purple-400 hover:bg-purple-400/10'
                          : 'border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10'
                      }`}
                    >
                      <Globe size={16} />
                      <span className="font-mono-pixel text-sm">Website</span>
                      <ExternalLink size={14} />
                    </motion.a>

                    <motion.a
                      href={sponsor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-mono-pixel text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20 mb-8 p-8 glass modern-card rounded-2xl"
          >
            <h3 className="font-pixel text-2xl md:text-3xl mb-4 text-purple-400">
              BECOME A SPONSOR
            </h3>
            <p className="font-mono-pixel text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Interested in sponsoring Pixel Palettes? Join us in supporting the next generation of innovators 
              and showcase your brand to talented developers and designers.
            </p>
            <motion.a
              href="mailto:sponsors@pixelpalettes.com"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-pixel text-white hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <span>Contact Us</span>
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass-strong" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-end">
            <Link href="/" target="_parent">
              <Image
                src="/ieee-ras-logo.png"
                alt="IEEE RAS Logo"
                width={192}
                height={192}
                quality={100}
                className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{
                  imageRendering: 'crisp-edges'
                }}
                sizes="(max-width: 768px) 48px, 64px"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 