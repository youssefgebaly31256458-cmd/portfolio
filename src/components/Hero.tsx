import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowDown,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Layers,
  Server,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { TechTicker } from './TechTicker';

interface HeroProps {
  email: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Background Radial Glow & Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-radial-crimson pointer-events-none" />
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" />

      {/* Subtle ambient crimson pulse glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 left-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-md text-xs font-mono text-slate-200 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-medium text-slate-200">
                Available for high-impact projects
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-red-400 font-semibold text-[11px]">
                Full-Stack & Backend Web
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-red-500 font-semibold mb-3 flex items-center gap-2 select-none"
            >
              <Cpu className="w-4 h-4 text-red-500" />
              Software Developer (Backend & Web)
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-300">Clean Backends</span> & High-Performance Web Apps.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10 font-light"
            >
              Specializing in decoupled <span className="text-white font-medium">Clean Architecture</span> (API, BLL, DAL) with <span className="text-white font-medium">ASP.NET Core</span> & <span className="text-white font-medium">C#</span>, resilient SQL Server persistence, and responsive, accessible <span className="text-white font-medium">React & Next.js</span> frontends. Focused on building maintainable, high-throughput web applications with zero downtime.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] cursor-pointer group"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-mono text-sm transition-colors cursor-pointer group backdrop-blur-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-sans">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" />
                    <span>Copy Developer Email</span>
                  </>
                )}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/youssefgebaly31256458-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white font-medium text-sm transition-colors backdrop-blur-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </motion.a>
            </motion.div>

            {/* Quick Metrics & Production Pillars Bar - Borderless fluid items */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 select-none"
            >
              <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    <span className="text-lg font-bold font-mono text-white">Clean Arch</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    API, BLL & DAL strict isolation
                  </p>
                </div>
              </div>

              <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-lg font-bold font-mono text-white">100/100</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Core Web Vitals & SEO benchmark
                  </p>
                </div>
              </div>

              <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <Layers className="w-4 h-4 text-red-400" />
                    <span className="text-lg font-bold font-mono text-white">RBAC & JWT</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Claims-based API authorization
                  </p>
                </div>
              </div>

              <div className="relative group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <Server className="w-4 h-4 text-rose-400" />
                    <span className="text-lg font-bold font-mono text-white">MSSQL 3NF</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Resilient connection pooling & EF Core
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Tech Ticker */}
        <div className="mt-14">
          <TechTicker />
        </div>
      </div>
    </section>
  );
};
