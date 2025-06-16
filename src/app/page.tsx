'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, Users, Award, Mail, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-24 h-24 bg-red-500/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/ieee-ras-logo.png"
                  alt="IEEE RAS MUJ Logo"
                  width={256}
                  height={256}
                  priority
                  quality={100}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8))',
                    imageRendering: 'crisp-edges'
                  }}
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-lg backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  IEEE RAS
                </span>
                <br />
                <span className="text-white">Manipal University</span>
                <br />
                <span className="text-gray-300 text-4xl md:text-5xl">Jaipur</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Advancing the future of robotics and automation through innovation, 
                research, and collaborative excellence.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.a
                href="#about"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-full font-semibold text-white overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore Our Work</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 to-red-700"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#events"
                className="px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-purple-400 hover:bg-purple-400/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Events
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Pioneering the Future of Robotics
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                IEEE Robotics and Automation Society at Manipal University Jaipur is dedicated to 
                advancing the fields of robotics and automation through cutting-edge research, 
                innovative projects, and collaborative learning experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our community brings together passionate students, researchers, and industry experts 
                to explore the limitless possibilities of autonomous systems, artificial intelligence, 
                and robotic technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">25+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Community</h4>
                      <p className="text-gray-400">Building connections and fostering collaboration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Excellence</h4>
                      <p className="text-gray-400">Striving for innovation and technical mastery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Events</h4>
                      <p className="text-gray-400">Regular workshops, competitions, and seminars</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                Events & Activities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pixel Palettes Event */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/logo.png"
                    alt="Pixel Palettes"
                    width={80}
                    height={80}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Pixel Palettes</h3>
                <p className="text-gray-300 text-center mb-6">
                  24-hour AI-powered hackathon featuring cutting-edge challenges and expert mentorship.
                </p>
                <div className="text-center">
                  <Link
                    href="/pixelpalettes"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Explore Event</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Placeholder Events */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Tech Workshops</h3>
                <p className="text-gray-300 text-center mb-6">
                  Regular hands-on workshops covering latest technologies in robotics and automation.
                </p>
                <div className="text-center">
                  <button className="inline-flex items-center space-x-2 border-2 border-purple-400/50 hover:bg-purple-400/10 text-purple-400 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    <span>Coming Soon</span>
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Competitions</h3>
                <p className="text-gray-300 text-center mb-6">
                  Exciting robotics competitions and challenges to test your skills and creativity.
                </p>
                <div className="text-center">
                  <button className="inline-flex items-center space-x-2 border-2 border-purple-400/50 hover:bg-purple-400/10 text-purple-400 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    <span>Coming Soon</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-400">ieee.ras@muj.manipal.edu</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Manipal University Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">+91 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50 bg-black/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/ieee-ras-logo.png"
                alt="IEEE RAS MUJ Logo"
                width={64}
                height={64}
                className="object-contain"
                style={{ 
                  imageRendering: 'crisp-edges',
                  filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))'
                }}
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 IEEE RAS Manipal University Jaipur. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 