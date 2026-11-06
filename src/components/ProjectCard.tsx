import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  Database, 
  ShieldCheck, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import type { Project } from '../types/portfolio';
import { ShifaaVisual3D } from './3d/ShifaaVisual3D';
import { GreenoraVisual3D } from './3d/GreenoraVisual3D';
import { DrGebalyVisual3D } from './3d/DrGebalyVisual3D';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  // Render the corresponding bespoke 3D canvas for each project
  const renderProjectVisual3D = () => {
    switch (project.id) {
      case 'shifaa-clinic':
        return <ShifaaVisual3D hovered={isHovered} />;
      case 'greenora-platform':
        return <GreenoraVisual3D hovered={isHovered} />;
      case 'dr-gebaly-portfolio':
        return <DrGebalyVisual3D hovered={isHovered} />;
      default:
        return <ShifaaVisual3D hovered={isHovered} />;
    }
  };

  const getFloatingBadge = () => {
    switch (project.id) {
      case 'shifaa-clinic':
        return { label: 'Architecture', value: 'Clean 3-Tier + RBAC' };
      case 'greenora-platform':
        return { label: 'Persistence', value: 'Cloud MSSQL Pool' };
      case 'dr-gebaly-portfolio':
        return { label: 'Lighthouse', value: '100/100 Core Vitals' };
      default:
        return { label: 'Verified', value: 'Production Ready' };
    }
  };

  const badge = getFloatingBadge();

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-16 sm:py-24 border-b border-white/10 group transition-colors"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        {/* ========================================================= */}
        {/* LEFT SIDE: The Narrative & Specifications (~58% width)    */}
        {/* ========================================================= */}
        <div className="w-full lg:w-7/12 space-y-6">
          {/* Top Editorial Index Pill */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] shadow-[0_0_8px_rgba(225,29,72,0.8)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FB7185] font-semibold select-none">
              {project.editorialIndex || `0${index + 1} / ${project.categoryBadge}`}
            </span>
            <span className="text-white/20 select-none">/</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] select-none">
              {project.categoryBadge}
            </span>
          </div>

          {/* Project Headline in Serif */}
          <div>
            <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F8FAFC] group-hover:text-[#FB7185] transition-colors leading-[1.05]">
              {project.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            {project.valueProposition}
          </p>

          {/* Key Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {project.keyCapabilities.slice(0, 4).map((capability, cIdx) => (
              <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                <span className="text-[#FB7185] font-mono text-xs mt-0.5 select-none">—</span>
                <span>{capability}</span>
              </div>
            ))}
          </div>

          {/* Subtle Technology Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#94A3B8] group-hover:border-white/20 transition-colors select-none"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons & Architecture Drawer Toggle (44px touch target) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full min-h-[44px] bg-gradient-to-r from-[#E11D48] to-[#FB7185] text-white text-xs font-mono tracking-wide shadow-[0_8px_25px_rgba(225,29,72,0.4)] hover:shadow-[0_12px_32px_rgba(225,29,72,0.55)] transition-all cursor-pointer"
              >
                <span>Live Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full min-h-[44px] text-xs font-mono tracking-wide transition-all cursor-pointer ${
                  !project.liveUrl
                    ? 'bg-gradient-to-r from-[#E11D48] to-[#FB7185] text-white shadow-[0_8px_25px_rgba(225,29,72,0.4)] hover:shadow-[0_12px_32px_rgba(225,29,72,0.55)]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#F8FAFC] border border-white/10 hover:border-white/25'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </motion.a>
            )}

            <button
              type="button"
              onClick={() => setShowSpecs(!showSpecs)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full min-h-[44px] bg-white/[0.02] hover:bg-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 text-xs font-mono transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-[#FB7185]" />
              <span>Specs</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showSpecs ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expandable Specifications Sheet */}
          <AnimatePresence>
            {showSpecs && project.architectureDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden pt-4"
              >
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FB7185]">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Pattern</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-light leading-relaxed pl-5">
                      {project.architectureDetails.pattern}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FB7185]">
                      <Database className="w-3.5 h-3.5" />
                      <span>Relational Schema &amp; Storage</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-light leading-relaxed pl-5">
                      {project.architectureDetails.database}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FB7185]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Security &amp; Authorization</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-light leading-relaxed pl-5">
                      {project.architectureDetails.security}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* RIGHT SIDE: Customized Project 3D Visual (~42% width)     */}
        {/* ========================================================= */}
        <div className="w-full lg:w-5/12 relative h-[300px] sm:h-[400px] lg:h-[480px] flex items-center justify-center select-none touch-pan-y">
          {/* Ambient Glow Aura */}
          <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-to-tr from-[#E11D48]/20 via-[#FB7185]/10 to-[#3872B8]/20 blur-3xl pointer-events-none" />

          {/* Bespoke 3D Canvas */}
          <div className="w-full h-full relative z-10 flex items-center justify-center">
            {renderProjectVisual3D()}
          </div>

          {/* Floating Spec Status Glass Pill */}
          <div className="absolute -bottom-2 right-4 sm:right-6 z-20 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#060913]/90 backdrop-blur-md border border-white/15 text-xs font-mono shadow-xl select-none">
            <Sparkles className="w-3.5 h-3.5 text-[#FB7185]" />
            <span className="text-[#F8FAFC] font-semibold">{badge.label}:</span>
            <span className="text-[#FB7185]">{badge.value}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
