import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Zap,
  Database,
  Layers
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
      duration: 0.55,
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
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Main Hero Poster Typography Grid (Reference #5 Composition) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: "BUILD without" + Description + Mint Action Button */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              {/* Massive Typographic Poster Display: BUILD without */}
              <div className="select-none tracking-tight">
                <span className="font-display text-7xl sm:text-9xl lg:text-[11.5rem] leading-[0.82] text-white tracking-wider block drop-shadow-2xl">
                  BUILD
                </span>
                <span className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-indigo-300/90 leading-none -mt-2 sm:-mt-6 ml-2 sm:ml-4 block drop-shadow-md">
                  without
                </span>
              </div>

              {/* Value Proposition */}
              <div className="max-w-lg space-y-3 pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00F5A0] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
                  Full-Stack Software Developer
                </div>
                <h2 className="text-sm sm:text-base font-mono uppercase text-white tracking-wider font-medium">
                  High-Performance ASP.NET Core &amp; Modern Web Systems
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                  Decoupled Clean Architecture (API, BLL, DAL) in C#, resilient cloud SQL Server persistence, and sub-500ms React frontends engineered for complete reliability.
                </p>
              </div>

              {/* Action Buttons: Distinctive Mint Pill (Reference #5) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00F5A0] hover:bg-[#10B981] text-[#08080A] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_0_35px_rgba(0,245,160,0.4)] cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#08080A]" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/25 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00F5A0]" />
                      <span className="text-[#00F5A0]">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/youssefgebaly31256458-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-[#94A3B8] hover:text-white border border-white/10 text-xs font-mono tracking-wide transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#94A3B8]/60" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: "LIMITS boundaries" + 4 Stacked Spec Rows (Reference #5) */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-0">
              {/* Massive Typographic Poster Display: LIMITS boundaries */}
              <div className="select-none tracking-tight lg:text-right">
                <span className="font-display text-7xl sm:text-9xl lg:text-[11.5rem] leading-[0.82] text-white tracking-wider block drop-shadow-2xl">
                  LIMITS
                </span>
                <span className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-indigo-300/90 leading-none -mt-2 sm:-mt-6 lg:mr-4 block drop-shadow-md">
                  boundaries
                </span>
              </div>

              {/* Stacked Parameter Spec Lines (matching Reference #5 Right-Side Rows) */}
              <div className="mt-8 lg:mt-12 space-y-2.5 font-mono text-xs uppercase tracking-wider text-[#94A3B8] border-t border-white/10 pt-4">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white font-medium flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#00F5A0]" />
                    Clean Architecture
                  </span>
                  <span className="text-[#00F5A0] font-semibold">API &bull; BLL &bull; DAL</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white font-medium flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    Enterprise Security
                  </span>
                  <span className="text-slate-300">Claims JWT &bull; RBAC</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white font-medium flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-indigo-400" />
                    Cloud Database
                  </span>
                  <span className="text-slate-300">3NF MSSQL &bull; EF Core</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white font-medium flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#00F5A0]" />
                    Frontend Benchmark
                  </span>
                  <span className="text-[#00F5A0] font-semibold">100/100 Core Vitals</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Tools & Engineering Stack (Reference #5 "Industry Tools" style) */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="flex items-center justify-center gap-4 mb-4 select-none">
              <span className="h-px w-12 bg-white/10" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase">
                Core Engineering Stack &amp; Tools
              </span>
              <span className="h-px w-12 bg-white/10" />
            </div>
            <TechTicker />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};