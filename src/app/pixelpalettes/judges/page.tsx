'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Judges() {
  const judges = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      affiliation: "Senior AI Researcher, Google DeepMind",
      role: "Machine Learning Expert",
      image: "/judge1.jpg", // Placeholder - to be replaced
      linkedinUrl: "https://linkedin.com/in/sarah-chen-ai", // To be provided
      expertise: ["Artificial Intelligence", "Deep Learning", "Computer Vision"]
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      affiliation: "CTO, TechStartup Inc.",
      role: "Full-Stack Development",
      image: "/judge2.jpg", // Placeholder - to be replaced
      linkedinUrl: "https://linkedin.com/in/alex-rodriguez-cto", // To be provided
      expertise: ["Web Development", "System Architecture", "DevOps"]
    },
    {
      id: 3,
      name: "Maya Patel",
      affiliation: "Lead Designer, Adobe",
      role: "UI/UX Design Expert",
      image: "/judge3.jpg", // Placeholder - to be replaced
      linkedinUrl: "https://linkedin.com/in/maya-patel-design", // To be provided
      expertise: ["User Experience", "Product Design", "Design Systems"]
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      affiliation: "Professor of Computer Science, MIT",
      role: "Academic Advisor",
      image: "/judge4.jpg", // Placeholder - to be replaced
      linkedinUrl: "https://linkedin.com/in/james-wilson-mit", // To be provided
      expertise: ["Algorithms", "Data Structures", "Research"]
    }
  ];



  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong" style={{ paddingTop: '1px', paddingBottom: '2px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
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
            <div className="hidden md:flex space-x-8">
              <Link href="/pixelpalettes#about" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">About</Link>
              <Link href="/pixelpalettes/judges" className="text-xl text-purple-400 font-mono-pixel">Judges</Link>
              <Link href="/pixelpalettes/sponsors" className="text-xl hover:text-purple-400 transition-colors font-mono-pixel">Sponsors</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 relative">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16 relative z-20"
            style={{ isolation: 'isolate' }}
          >
            <h1 className="font-pixel text-4xl md:text-6xl mb-6 neon-glow relative z-10">OUR JUDGES</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 relative z-10"></div>
            <p className="font-mono-pixel text-xl text-gray-300 max-w-3xl mx-auto relative z-10">
              Meet our distinguished panel of judges who will evaluate your innovative projects. 
              These industry experts bring years of experience and expertise to guide and assess your work.
            </p>
          </motion.div>

          {/* Judges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-0">
            {judges.map((judge, index) => (
              <motion.div
                key={judge.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="glass modern-card rounded-2xl p-6 md:p-8 text-center relative"
              >
                {/* Judge Photo */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-400/30 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={judge.image}
                        alt={judge.name}
                        width={160}
                        height={160}
                        quality={100}
                        className="w-full h-full object-cover"
                        style={{
                          filter: 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.4))',
                          imageRendering: 'crisp-edges'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Judge Info */}
                <div className="mb-6">
                  <h2 className="font-pixel text-xl md:text-2xl mb-2 text-purple-400">
                    {judge.name}
                  </h2>
                  
                  <p className="font-mono-pixel text-base text-gray-300 mb-2">
                    {judge.affiliation}
                  </p>

                  <p className="font-mono-pixel text-sm text-cyan-400 mb-4">
                    {judge.role}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {judge.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-400/50 rounded-full text-xs font-mono-pixel"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn Button */}
                <motion.a
                  href={judge.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-mono-pixel text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 p-8 glass modern-card rounded-2xl"
          >
            <h3 className="font-pixel text-2xl md:text-3xl mb-4 text-cyan-400">
              JUDGING CRITERIA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h4 className="font-pixel text-lg text-purple-400 mb-2">Innovation</h4>
                <p className="font-mono-pixel text-sm text-gray-300">
                  Creativity and originality of the solution
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-pixel text-lg text-purple-400 mb-2">Technical Excellence</h4>
                <p className="font-mono-pixel text-sm text-gray-300">
                  Quality of code and implementation
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-pixel text-lg text-purple-400 mb-2">Impact</h4>
                <p className="font-mono-pixel text-sm text-gray-300">
                  Potential real-world application and value
                </p>
              </div>
            </div>
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