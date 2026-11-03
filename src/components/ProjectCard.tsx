import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  Database, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
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
    <article className="relative p-7 sm:p-10 rounded-3xl bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden group">
      {/* Subtle Ambient Radial Crimson Bloom on Hover */}
      <div className="radial-bloom" />

      {/* Relative content flow */}
      <div className="relative z-10 space-y-7">
        {/* Top Header: Category + Title + Mode Switch */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2 select-none">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-red-400 font-semibold">
                {project.categoryBadge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Seamless Mode Switcher */}
          <div className="relative flex items-center self-start sm:self-center bg-white/[0.03] p-1 rounded-xl shrink-0 select-none backdrop-blur-md">
            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => setMode('overview')}
              className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                mode === 'overview'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-pressed={mode === 'overview'}
            >
              {mode === 'overview' && (
                <motion.span
                  layoutId={`active-tab-${project.id}`}
                  className="absolute inset-0 rounded-lg bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Overview</span>
              </span>
            </motion.button>

            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => setMode('architecture')}
              className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                mode === 'architecture'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-pressed={mode === 'architecture'}
            >
              {mode === 'architecture' && (
                <motion.span
                  layoutId={`active-tab-${project.id}`}
                  className="absolute inset-0 rounded-lg bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Under The Hood</span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Dynamic Mode Content Body */}
        <AnimatePresence mode="wait">
          {mode === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-4xl">
                {project.valueProposition}
              </p>

              {/* Key Capabilities in open flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {project.keyCapabilities.map((capability, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-1.5 select-none">
                    <Layers className="w-3.5 h-3.5 text-red-500" />
                    Architecture Pattern
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {project.architectureDetails.pattern}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-1.5 select-none">
                    <Database className="w-3.5 h-3.5 text-red-500" />
                    Database & Relational Model
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {project.architectureDetails.database}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-1.5 select-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                  Security & Authorization Boundary
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.architectureDetails.security}
                </p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 select-none">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                  Core Engineering Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architectureDetails.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Bar: Tech Tags & Action CTAs */}
        <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Tech Stack Pills (subtle text tags, zero heavy borders) */}
          <div className="flex flex-wrap items-center gap-2 select-none">
            <span className="text-[10px] font-mono text-slate-500 uppercase mr-1 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-red-500" /> Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links (Max 2 Actionable CTAs) */}
          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  project.liveUrl
                    ? 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white transition-colors cursor-pointer'
                    : 'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-colors cursor-pointer'
                }
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </motion.a>
            )}

            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-colors cursor-pointer"
              >
                <span>{project.liveLabel || 'Live Preview'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
