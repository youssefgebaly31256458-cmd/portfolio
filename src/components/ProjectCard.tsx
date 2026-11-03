import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  ExternalLink, 
  Cpu
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import type { Project, ProjectMode } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  initialMode?: ProjectMode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  initialMode = 'overview' 
}) => {
  const [mode, setMode] = useState<ProjectMode>(initialMode);

  return (
    <article className="py-12 sm:py-16 transition-colors group">
      <div className="space-y-6">
        {/* Top Editorial Index & Meta Line */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            {/* Project Index in Mono & Mint Accent */}
            <span className="font-mono text-sm tracking-widest text-[#00F5A0] font-semibold select-none">
              {project.editorialIndex || `${project.indexNumber} / ${project.title.split(' ')[0].toUpperCase()}`}
            </span>
            <span className="text-white/20 select-none">/</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] select-none">
              {project.categoryBadge}
            </span>
          </div>

          {/* Understated Editorial Toggle */}
          <div className="flex items-center gap-1 select-none self-start sm:self-auto border border-white/10 p-1 rounded-full bg-white/[0.02]">
            <button
              type="button"
              onClick={() => setMode('overview')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                mode === 'overview'
                  ? 'bg-white/15 text-white font-medium shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Narrative
            </button>
            <button
              type="button"
              onClick={() => setMode('architecture')}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                mode === 'architecture'
                  ? 'bg-white/15 text-white font-medium shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Specifications
            </button>
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wide text-white group-hover:text-[#00F5A0] transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] mt-2">
            {project.subtitle}
          </p>
        </div>

        {/* Body Content: Narrative vs Specifications */}
        <AnimatePresence mode="wait">
          {mode === 'overview' ? (
            <motion.div
              key="narrative"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 pt-1"
            >
              {/* Editorial Summary */}
              <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed max-w-4xl">
                {project.valueProposition}
              </p>

              {/* Key Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                {project.keyCapabilities.map((capability, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed"
                  >
                    <span className="text-[#00F5A0] font-mono text-xs mt-0.5 select-none">—</span>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="specifications"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 pt-1"
            >
              {/* Architecture & DB Spec */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00F5A0] select-none">
                    <Layers className="w-3.5 h-3.5 text-[#00F5A0]" />
                    Architecture Pattern
                  </div>
                  <p className="text-xs sm:text-sm text-white font-mono leading-relaxed">
                    {project.architectureDetails.pattern}
                  </p>
                </div>

                <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00F5A0] select-none">
                    <Database className="w-3.5 h-3.5 text-[#00F5A0]" />
                    Database Relational Schema
                  </div>
                  <p className="text-xs sm:text-sm text-white font-mono leading-relaxed">
                    {project.architectureDetails.database}
                  </p>
                </div>
              </div>

              {/* Security & Access */}
              <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 select-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  Security &amp; Authorization Boundaries
                </div>
                <p className="text-xs sm:text-sm text-white font-light leading-relaxed">
                  {project.architectureDetails.security}
                </p>
              </div>

              {/* Core Highlights */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]/70 mb-3 block select-none">
                  Engineering Standards &amp; Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architectureDetails.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#94A3B8] font-light leading-relaxed"
                    >
                      <span className="text-[#00F5A0] font-mono select-none">/</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Metadata & Action Links */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2 select-none">
            <span className="text-[10px] font-mono text-[#94A3B8]/60 uppercase mr-1 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-[#00F5A0]" /> Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.02] border border-white/10 text-[#94A3B8]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs (Max 2 Actionable CTAs per card) */}
          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00F5A0] hover:bg-[#10B981] text-[#08080A] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(0,245,160,0.3)]"
              >
                <span>{project.liveLabel || 'Live Platform'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#08080A]" />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  project.liveUrl
                    ? 'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono tracking-wide transition-colors cursor-pointer'
                    : 'inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#00F5A0] hover:bg-[#10B981] text-[#08080A] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(0,245,160,0.3)]'
                }
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{project.githubLabel || 'View Source (GitHub)'}</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};