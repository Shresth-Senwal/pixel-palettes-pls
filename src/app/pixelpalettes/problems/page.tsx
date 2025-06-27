'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ArrowLeft, Code, Shield, AlertTriangle, DollarSign, Heart, Lightbulb, GraduationCap } from 'lucide-react';
import Link from 'next/link';

/**
 * Problem Statements Page Component
 * 
 * This component displays all problem statements for the Pixel Palettes hackathon,
 * organized by domain with collapsible sections. Features cyberpunk styling
 * consistent with the main event page.
 * 
 * Key Features:
 * - Domain-wise organization of problem statements
 * - Collapsible sections for better navigation
 * - Responsive design with glassmorphism effects
 * - Smooth animations and transitions
 * - Icon-based domain identification
 * - Back navigation to main event page
 * 
 * Domains:
 * - LegalTech - Legal technology and AI verification
 * - Blockchain - Decentralized systems and transparency
 * - Disaster Management - Emergency response and prediction
 * - FinTech - Financial technology and trading
 * - Healthcare - Medical AI and IoT monitoring
 * - Open Innovation - Creative and adaptive platforms
 * - EdTech - Educational technology and adaptive learning
 * 
 * @returns {JSX.Element} Complete Problem Statements page
 */
export default function ProblemsPage() {
  /**
   * State to track which domain sections are expanded
   * Each domain can be independently expanded/collapsed
   */
  const [expandedDomains, setExpandedDomains] = useState<Record<string, boolean>>({});

  /**
   * Toggle the expansion state of a domain section
   * @param domain - The domain name to toggle
   */
  const toggleDomain = (domain: string) => {
    setExpandedDomains(prev => ({
      ...prev,
      [domain]: !prev[domain]
    }));
  };

  /**
   * Problem statements data organized by domain
   * Each domain contains an icon, color scheme, and list of problems
   */
  const problemDomains = [
    {
      name: 'LegalTech',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'rgba(147, 51, 234, 0.4)',
      problems: [
        {
          id: 1,
          title: 'AI Legal Content Verification',
          description: 'With AI increasingly used for generating legal advice and summaries, verifying its accuracy becomes critical. Your task is to build a system that reverse-traces AI-generated legal content back to authentic laws, judgments, or regulations ensuring transparency, accountability, and jurisdictional accuracy.'
        },
        {
          id: 2,
          title: 'Legal Document Risk Analysis',
          description: 'Legal policies, bills, and political drafts often contain hidden risks or biases that go unnoticed by the general public. Your task is to build a system that analyzes such documents and flags potential threats while making complex language understandable to everyday citizens.'
        },
        {
          id: 3,
          title: 'Adversarial Legal Argumentation',
          description: 'Legal argumentation often lacks balanced representation and critical counterpoints. Your task is to build a system that generates both sides of a legal argument from a given case, simulating real adversarial reasoning and referencing applicable precedents.'
        }
      ]
    },
    {
      name: 'Blockchain',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      problems: [
        {
          id: 1,
          title: 'Disaster Relief Blockchain Platform',
          description: 'Disaster relief efforts often suffer from fraud, mismanagement, and lack of coordination. Your task is to design a blockchain-powered platform that transparently tracks aid supplies, verifies delivery, and enables identity-based claims all without centralized control or trust dependencies.'
        },
        {
          id: 2,
          title: 'Supply Chain Disruption Prediction',
          description: 'Global trade disruptions are rarely detected before they cause ripple effects. Your task is to build an AI-driven system that monitors ports, logistics data, and financial signals to predict upcoming supply chain shocks and visualize the impacted SKUs or commodities in real time.'
        },
        {
          id: 3,
          title: 'Fair Blockchain Auction Platform',
          description: 'Many online auctions can be unfair due to fake accounts or repeated bidding from the same person. Your task is to build a basic blockchain-based auction platform where users can place secure bids, and simple checks ensure fair and transparent participation.'
        }
      ]
    },
    {
      name: 'Disaster Management',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      problems: [
        {
          id: 1,
          title: 'Urban Risk Forecasting System',
          description: 'Urban environments face hidden patterns of risk that often go unnoticed until it\'s too late. Your task is to build a web-based system that forecasts high-probability zones for accidents, crimes, or emergencies up to 7 days in advance using non-biomedical, real-world urban data.'
        },
        {
          id: 2,
          title: 'Disease Outbreak Prediction',
          description: 'Global health systems often fail to anticipate disease spread until it\'s too late. Your task is to build a system that identifies early signals of chain-reaction outbreaks and predicts their escalation across regions enabling preemptive containment before crises unfold.'
        },
        {
          id: 3,
          title: 'Disaster Response Coordination',
          description: 'In the wake of natural disasters, cities face two core challenges: real-time risk awareness and coordinated aid delivery. Your task is to build a system that anticipates disaster impact zones and facilitates transparent, verifiable relief distribution even when traditional infrastructure is failing.'
        }
      ]
    },
    {
      name: 'FinTech',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      problems: [
        {
          id: 1,
          title: 'Secure Cab Booking System',
          description: 'Modern ride-booking apps struggle with fragmented interfaces and security blind spots. Your task is to build a secure, full-stack cab booking system with real-time tracking, distinct user and captain portals, and protected transactions all built from scratch.'
        },
        {
          id: 2,
          title: 'AI Trading Intelligence Platform',
          description: 'In fast-moving markets, traders lack real-time, predictive intelligence at their fingertips. Your task is to build an AI-driven platform that analyzes live token and equity data to forecast trends, trigger buy/sell alerts, and deliver insights instantly to users\' devices.'
        },
        {
          id: 3,
          title: 'Gen Z Finance Advisor',
          description: 'Gen Z often earns from freelancing, gig work, or content creation, and spends based on trends, subscriptions, or lifestyle shifts. Traditional budgeting tools offer charts, but no real guidance. Your task is to build an AI-powered finance advisor that understands spending behavior, predicts risks, and offers helpful, personalized advice.'
        }
      ]
    },
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236, 72, 153, 0.4)',
      problems: [
        {
          id: 1,
          title: 'Mental Health Crisis Detection',
          description: 'Mental health crises often go unnoticed until they escalate. Your task is to build a proactive AI system that detects early signs of population-level stress and burnout by analyzing public sentiment, biometric cues, and behavioral patterns enabling timely, targeted interventions.'
        },
        {
          id: 2,
          title: 'IoT Healthcare Monitoring',
          description: 'Despite rapid IoT adoption, healthcare systems struggle with secure, real-time patient monitoring at scale. Your task is to build a system that leverages IoT devices to track vitals, detect anomalies, and deliver responsive care while overcoming data privacy, latency, and reliability barriers.'
        },
        {
          id: 3,
          title: 'Drug Interaction Checker',
          description: 'As more individuals self-medicate or combine prescriptions without medical oversight, the risk of harmful drug interactions increases. Your task is to build a system that helps everyday users check for adverse drug interactions and receive contextual, easy-to-understand explanations.'
        }
      ]
    },
    {
      name: 'Open Innovation',
      icon: Lightbulb,
      color: 'from-yellow-500 to-amber-500',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      problems: [
        {
          id: 1,
          title: 'Adaptive Personal Browser',
          description: 'Online content feeds are addictive but generic. Your task is to build a personal internet browser that evolves with the user\'s thought patterns curating memes, games, and posts based on their mood, attention span, and interaction style, while preserving full privacy.'
        },
        {
          id: 2,
          title: 'Dynamic Content Rewriting Platform',
          description: 'Most online content is static and one-size-fits-all. Your task is to build a platform that rewrites blogs, books, or posts in real time adapting tone, length, and structure based on the user\'s reading patterns, time of day, and session context.'
        },
        {
          id: 3,
          title: 'Personalized Content Adaptation',
          description: 'The internet serves the same static content to everyone. Your task is to build a platform that rewrites books, blogs, and posts in real time adjusting tone, structure, and length based on the user\'s mood, time of day, and behavior, all while protecting their privacy.'
        }
      ]
    },
    {
      name: 'EdTech',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.4)',
      problems: [
        {
          id: 1,
          title: 'Subconscious Learning AI',
          description: 'Current educational platforms fail to adapt to subconscious learning behavior. Your task is to build an AI-powered system that silently observes micro-reactions (scrolling hesitation, rereads, blink rate via webcam, etc.) to detect confusion in real time and restructures the lesson dynamically for each learner.'
        },
        {
          id: 2,
          title: 'AI Virtual Teacher Platform',
          description: 'Students often learn through static platforms that neither adapt to their pace nor verify real engagement. Your task is to build an AI-powered virtual teacher that explains topics, answers doubts in real time, and tests understanding through interactive quizzes. Track all meaningful learning activity and reward users with on-chain credentials based on verified progress.'
        },
        {
          id: 3,
          title: 'True Understanding Detection',
          description: 'Human learning is shaped by emotion, memory, and multisensory context, none of which current EdTech platforms capture. Your task is to build a system that detects when a student is truly understanding a concept instead of memorizing it. The system must also identify copied or AI-generated content and track how learning evolves across sessions.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/pixelpalettes"
              className="inline-flex items-center space-x-2 font-mono-pixel text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Event</span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-6 neon-glow break-words">
              PROBLEM STATEMENTS
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="font-mono-pixel text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose your challenge and build the future with AI-powered solutions across diverse domains
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Domains Section */}
      <section className="py-16 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {problemDomains.map((domain, domainIndex) => {
              const IconComponent = domain.icon;
              const isExpanded = expandedDomains[domain.name];
              
              return (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: domainIndex * 0.1 }}
                  className="glass modern-card rounded-2xl overflow-hidden"
                >
                  {/* Domain Header - Clickable */}
                  <motion.button
                    onClick={() => toggleDomain(domain.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Domain Icon */}
                      <div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${domain.color} flex items-center justify-center`}
                        style={{
                          boxShadow: `0 0 20px ${domain.glowColor}`
                        }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </div>
                      
                      {/* Domain Title */}
                      <div className="text-left">
                        <h2 className="font-pixel text-2xl md:text-3xl mb-1">
                          {domain.name}
                        </h2>
                        <p className="font-mono-pixel text-sm text-gray-400">
                          {domain.problems.length} Problem{domain.problems.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} className="text-gray-400" />
                    </motion.div>
                  </motion.button>

                  {/* Domain Problems - Collapsible */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {domain.problems.map((problem, problemIndex) => (
                          <motion.div
                            key={problem.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                            transition={{ duration: 0.4, delay: problemIndex * 0.1 }}
                            className="glass-strong rounded-xl p-6 border-l-4"
                            style={{
                              borderLeftColor: domain.glowColor.replace('0.4', '0.8')
                            }}
                          >
                            {/* Problem Header */}
                            <div className="flex items-start space-x-3 mb-4">
                              <div 
                                className="w-8 h-8 rounded-lg bg-gradient-to-r flex items-center justify-center flex-shrink-0 mt-1"
                                style={{
                                  background: `linear-gradient(45deg, ${domain.glowColor}, ${domain.glowColor.replace('0.4', '0.6')})`
                                }}
                              >
                                <span className="font-pixel text-sm text-white">
                                  {problem.id}
                                </span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-pixel text-lg md:text-xl mb-3 text-white">
                                  {problem.title}
                                </h3>
                                <p className="font-mono-pixel text-base text-gray-300 leading-relaxed">
                                  {problem.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>


        </div>
      </section>
    </div>
  );
} 