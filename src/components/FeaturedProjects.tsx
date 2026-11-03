import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-semibold mb-2 select-none">
              <FolderGit2 className="w-4 h-4 text-red-500" />
              Verified Production Software
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-light leading-relaxed">
              Three production systems built with strict type safety, decoupled backend logic, and responsive frontends. Use the <strong className="text-slate-200 font-medium">Under The Hood</strong> toggle on any project to inspect architectural boundaries, relational models, and security guarantees.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] text-xs font-mono text-slate-300 self-start md:self-auto select-none backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>3 Production Case Studies</span>
          </div>
        </motion.div>

        {/* Fading Hairline Divider */}
        <div className="fading-divider mt-8 mb-12" />

        {/* Fluid Case Studies Stack */}
        <div className="space-y-10">
          {projectsData.map((project, idx) => (
            <React.Fragment key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
              {idx < projectsData.length - 1 && (
                <div className="fading-divider my-6" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
