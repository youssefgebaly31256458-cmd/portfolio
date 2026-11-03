import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Sparkles,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { TechTicker } from './TechTicker';

interface HeroProps {
  email: string;
}

interface HeroSlide {
  id: string;
  badge: string;
  headlineRegular: string;
  headlineItalic: string;
  subtitle: string;
  leftStat1: { value: string; label: string; color?: string };
  leftStat2: { value: string; label: string; color?: string };
  rightStat1: { value: string; label: string; color?: string };
  rightStat2: { value: string; label: string; color?: string };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'systems-architecture',
    badge: 'FULL-STACK DEVELOPER • BACKEND & WEB',
    headlineRegular: 'Engineering Systems at the Speed',
    headlineItalic: 'of Thought.',
    subtitle:
      'Architecting decoupled ASP.NET Core backends, resilient cloud SQL Server databases, and sub-500ms React web interfaces with zero downtime.',
    leftStat1: { value: '3x', label: 'Faster Release Cycle' },
    leftStat2: { value: '100%', label: 'Clean Architecture', color: '#FF7A30' },
    rightStat1: { value: '100/100', label: 'Core Web Vitals', color: '#3B82F6' },
    rightStat2: { value: '3', label: 'Production Systems' },
  },
  {
    id: 'backend-database',
    badge: 'ENTERPRISE ARCHITECTURE • SCALABLE APIS',
    headlineRegular: 'Decoupled Backends with Resilient',
    headlineItalic: 'Architecture.',
    subtitle:
      'Building maintainable domain-driven APIs, secure multi-tenant role authorizations, and automated migrations with MS SQL Server.',
    leftStat1: { value: '<200ms', label: 'API Response Time', color: '#FF7A30' },
    leftStat2: { value: 'Zero', label: 'Runtime Data Leakage' },
    rightStat1: { value: 'ACID', label: 'Strict DB Compliance', color: '#3B82F6' },
    rightStat2: { value: 'EF Core', label: 'Code-First Mastery' },
  },
  {
    id: 'product-performance',
    badge: 'FRONTEND PRECISION • BUSINESS IMPACT',
    headlineRegular: 'Crafting Fluid Web Products',
    headlineItalic: 'that Convert.',
    subtitle:
      'Delivering borderless, fluid, and high-performance digital experiences built with modern React, TypeScript, and Tailwind CSS.',
    leftStat1: { value: '0.0s', label: 'Cumulative Layout Shift', color: '#FF7A30' },
    leftStat2: { value: 'Vite & React', label: 'Lightning Fast Bundles' },
    rightStat1: { value: 'A+', label: 'Security & Accessibility', color: '#3B82F6' },
    rightStat2: { value: '100%', label: 'Responsive Execution' },
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Reference #2 Dual Horizon Background Lighting */}
      <div className="absolute inset-0 bg-horizon-dual pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-10"
        >
          {/* Main Hero Row: Left Stat + Center Headline + Right Stat (Reference #2 FluxEdit Composition) */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 pt-4">
            {/* Left Side Metric Stats & Left Nav Orb */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center gap-6 text-left select-none w-64"
            >
              <motion.button
                type="button"
                onClick={prevSlide}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 122, 48, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#FF7A30]/50 flex items-center justify-center text-[#94A3B8] hover:text-white shadow-lg cursor-pointer transition-colors focus:outline-none shrink-0"
                aria-label="Previous engineering slide"
                title="Previous slide (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5 text-white/80" />
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-${slide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div>
                    <div
                      className="font-serif text-3xl font-normal"
                      style={{ color: slide.leftStat1.color || '#FFFFFF' }}
                    >
                      {slide.leftStat1.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                      {slide.leftStat1.label}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-serif text-3xl font-normal"
                      style={{ color: slide.leftStat2.color || '#FFFFFF' }}
                    >
                      {slide.leftStat2.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                      {slide.leftStat2.label}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Center Main Headline (Editorial Serif mixing regular & italic) */}
            <div className="max-w-3xl mx-auto min-h-[300px] sm:min-h-[340px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF7A30] select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A30] shadow-[0_0_8px_#FF7A30]" />
                    {slide.badge}
                  </div>

                  {/* Headline */}
                  <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] select-none">
                    {slide.headlineRegular} <br />
                    <span className="italic font-normal text-[#FF7A30]">
                      {slide.headlineItalic}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto font-light leading-relaxed">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side Metric Stats & Right Nav Orb */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center justify-end gap-6 text-right select-none w-64"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-${slide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div>
                    <div
                      className="font-serif text-3xl font-normal"
                      style={{ color: slide.rightStat1.color || '#FFFFFF' }}
                    >
                      {slide.rightStat1.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                      {slide.rightStat1.label}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-serif text-3xl font-normal"
                      style={{ color: slide.rightStat2.color || '#FFFFFF' }}
                    >
                      {slide.rightStat2.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                      {slide.rightStat2.label}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.button
                type="button"
                onClick={nextSlide}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 122, 48, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#FF7A30]/50 flex items-center justify-center text-[#94A3B8] hover:text-white shadow-lg cursor-pointer transition-colors focus:outline-none shrink-0"
                aria-label="Next engineering slide"
                title="Next slide (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5 text-white/80" />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile / Tablet Carousel Controls (Visible when side buttons are hidden) */}
          <div className="flex lg:hidden items-center justify-center gap-6 pt-2">
            <motion.button
              type="button"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-6 bg-[#FF7A30]' 
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Desktop Slide Indicator Dots */}
          <div className="hidden lg:flex items-center justify-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-7 bg-[#FF7A30] shadow-[0_0_8px_#FF7A30]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Center Halo Glowing Action Orb (Reference #2 FluxEdit "Try Now" Glowing Orb) */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group p-2 flex items-center justify-center cursor-pointer"
            >
              {/* Pulsing Orange Glow Rings */}
              <span className="absolute inset-0 rounded-full bg-[#FF7A30]/25 blur-2xl group-hover:bg-[#FF7A30]/40 transition-all duration-300" />
              
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#FF7A30]/50 bg-gradient-to-b from-white/10 via-[#FF7A30]/15 to-transparent halo-glow-orange flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-[#FF7A30]">
                <Sparkles className="w-4 h-4 text-[#FF7A30] mb-1 group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-sans font-semibold text-white tracking-wide">
                  Explore
                </span>
                <span className="text-[10px] font-mono text-[#FF7A30] tracking-widest uppercase">
                  Works &darr;
                </span>
              </div>
            </motion.a>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 text-xs font-mono tracking-wide transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FF7A30]" />
                    <span className="text-[#FF7A30]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>Copy Developer Email</span>
                  </>
                )}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/youssefgebaly31256458-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-[#94A3B8] hover:text-white border border-white/10 text-xs font-mono tracking-wide transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Archive</span>
                <ExternalLink className="w-3 h-3 text-[#94A3B8]/60" />
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Tools Stack Bar */}
          <motion.div variants={itemVariants} className="pt-8">
            <TechTicker />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};