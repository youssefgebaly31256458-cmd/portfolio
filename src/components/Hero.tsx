import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Server,
  Cpu,
  Code2,
  Database,
  Boxes,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { HeroScene } from './3d/HeroScene';

interface HeroProps {
  email: string;
}

interface HeroSlide {
  id: string;
  badge: string;
  tag: string;
  headlineWord1: string;
  headlineWord2: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'systems',
    badge: 'FULL-STACK DEVELOPER • BACKEND & WEB',
    tag: '01 / Systems',
    headlineWord1: 'Engineering',
    headlineWord2: 'Resilient Systems.',
    subtitle:
      'Architecting decoupled ASP.NET Core backends, resilient cloud SQL Server databases, and sub-500ms reactive React interfaces with zero downtime.',
    metrics: [
      { label: 'Architecture', value: 'Clean 3-Tier' },
      { label: 'Release Cycle', value: '3x Faster' },
    ],
  },
  {
    id: 'backend',
    badge: 'ENTERPRISE APIS • DOMAIN ARCHITECTURE',
    tag: '02 / Backend',
    headlineWord1: 'Decoupled',
    headlineWord2: 'Scalable APIs.',
    subtitle:
      'Building maintainable domain-driven REST APIs, role-based JWT claim authorizations, and automated EF Core migrations with strict ACID compliance.',
    metrics: [
      { label: 'Latency', value: '<200ms Response' },
      { label: 'Security', value: 'Stateless RBAC' },
    ],
  },
  {
    id: 'frontend',
    badge: 'FRONTEND PRECISION • BUSINESS IMPACT',
    tag: '03 / Frontend',
    headlineWord1: 'Crafting',
    headlineWord2: 'Fluid Interfaces.',
    subtitle:
      'Delivering borderless, fluid, and high-performance digital experiences built with modern React 19, TypeScript, and clean architectural principles.',
    metrics: [
      { label: 'Performance', value: '100/100 Vitals' },
      { label: 'Stack', value: 'React 19 + Vite' },
    ],
  },
];

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
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ email }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const slide = HERO_SLIDES[currentSlide];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-visionary-hero"
    >
      {/* Ambient Lighting Overlays (Reference #6 Horizon Harmony) */}
      <div className="absolute top-0 left-0 w-full sm:w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,114,184,0.28),transparent_70%)] pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[500px] sm:w-[700px] h-[600px] bg-[radial-gradient(circle_at_80%_50%,rgba(225,29,72,0.30),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Typography & Content (~55% width)  */}
          {/* ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 z-10"
          >
            {/* Top Row: Developer Persona Badge + Slide Switcher Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FB7185] select-none shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48] animate-pulse" />
                <span>{slide.badge}</span>
              </div>

              {/* Minimalist Slide Selector Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/10 select-none">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-all cursor-pointer ${
                      currentSlide === idx
                        ? 'bg-[#E11D48] text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-medium'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {s.tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Editorial Serif Headline (Reference #6 "Visionary Intelligence" Cadence) */}
            <motion.div variants={itemVariants} className="min-h-[110px] sm:min-h-[160px] lg:min-h-[210px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slide.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-[#F8FAFC] leading-[1.08] sm:leading-[1.03] select-none"
                >
                  {slide.headlineWord1} <br />
                  <span className="italic font-normal text-[#FB7185]">
                    {slide.headlineWord2}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            {/* Subtitle / Bio (Short, 2-line statement in slate-300) */}
            <motion.div variants={itemVariants} className="min-h-[52px] sm:min-h-[56px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${slide.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-xl"
                >
                  {slide.subtitle}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Slide Metrics Compact Grid (Stacked/2x2 on Mobile, Inline on Desktop) */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-2 md:flex items-center gap-2.5 sm:gap-4 pt-1 select-none">
              {slide.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 shadow-sm"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]">{m.label}:</span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#FB7185]">{m.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Primary Action Buttons (Glow Pill CTA + Email Copy - 44px Touch Target Standard) */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Primary CTA (Soft Glowing Coral/Crimson Pill like Reference #6) */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3 rounded-full min-h-[44px] bg-gradient-to-r from-[#E11D48] to-[#FB7185] text-white font-medium text-sm tracking-wide shadow-[0_10px_30px_rgba(225,29,72,0.45)] hover:shadow-[0_15px_40px_rgba(225,29,72,0.6)] transition-all cursor-pointer"
              >
                <span>Explore Systems</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              {/* Copy Email Action Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full min-h-[44px] bg-white/[0.04] hover:bg-white/[0.08] text-[#F8FAFC] border border-white/10 hover:border-white/20 text-xs font-mono tracking-wide transition-colors cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FB7185]" />
                    <span className="text-[#FB7185]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>Copy Developer Email</span>
                  </>
                )}
              </motion.button>

              {/* Direct Inquiry Shortcut */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full min-h-[44px] bg-white/[0.02] hover:bg-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 text-xs font-mono tracking-wide transition-colors cursor-pointer"
              >
                <span>Direct Inquiry</span>
              </motion.a>
            </motion.div>

            {/* Slide Navigation Chevrons for Quick Switching (44px touch targets) */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]/60">
                <span>Slide 0{currentSlide + 1} of 0{HERO_SLIDES.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-11 h-11 sm:w-8 sm:h-8 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
                  aria-label="Previous engineering slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-11 h-11 sm:w-8 sm:h-8 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
                  aria-label="Next engineering slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Bottom Stack Bar (Styled as Authentic Minimal Tool Ticker from Reference #6) */}
            <motion.div variants={itemVariants} className="pt-8 sm:pt-10 border-t border-white/10 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#94A3B8]/70 block mb-4">
                CORE ENGINEERING FOUNDATION
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#F8FAFC]/90">
                <div className="flex items-center gap-2 group hover:text-[#FB7185] transition-colors select-none">
                  <Server className="w-4 h-4 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
                  <span className="font-semibold tracking-tight">ASP.NET Core</span>
                </div>

                <div className="flex items-center gap-2 group hover:text-[#FB7185] transition-colors select-none">
                  <Cpu className="w-4 h-4 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
                  <span className="font-semibold tracking-tight">C# (.NET 9)</span>
                </div>

                <div className="flex items-center gap-2 group hover:text-[#FB7185] transition-colors select-none">
                  <Code2 className="w-4 h-4 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
                  <span className="font-semibold tracking-tight">React 19</span>
                </div>

                <div className="flex items-center gap-2 group hover:text-[#FB7185] transition-colors select-none">
                  <Database className="w-4 h-4 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
                  <span className="font-semibold tracking-tight">SQL Server</span>
                </div>

                <div className="flex items-center gap-2 group hover:text-[#FB7185] transition-colors select-none">
                  <Boxes className="w-4 h-4 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
                  <span className="font-semibold tracking-tight">TypeScript</span>
                </div>

                <div className="flex items-center gap-2 group hover:text-[#FB7185] transition-colors select-none">
                  <Layers className="w-4 h-4 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
                  <span className="font-semibold tracking-tight">Clean Architecture</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive 3D Scene (~45% width)           */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[440px] lg:h-[580px] flex items-center justify-center select-none touch-pan-y">
            {/* Ambient Diffuse Crimson Bloom behind 3D Canvas */}
            <div className="absolute right-0 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#E11D48]/30 via-[#FB7185]/15 to-[#3872B8]/20 blur-3xl pointer-events-none" />

            {/* Interactive 3D WebGL Canvas (Metallic Iridescent Orb + Glass Refraction Slats) */}
            <div className="w-full h-full relative z-10">
              <HeroScene mouse={mousePos} />
            </div>

            {/* Status / Metric Floating Glass Badge on Right Visual */}
            <motion.div
              animate={{
                y: mousePos.y * -8 + (currentSlide % 2 === 0 ? 3 : -3),
                x: mousePos.x * -8,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="absolute -bottom-2 right-4 sm:right-8 z-30 inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#060913]/85 backdrop-blur-md border border-white/15 text-xs font-mono shadow-2xl pointer-events-auto"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FB7185]" />
              <span className="text-[#F8FAFC] font-semibold">{slide.metrics[0].label}:</span>
              <span className="text-[#FB7185]">{slide.metrics[0].value}</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
