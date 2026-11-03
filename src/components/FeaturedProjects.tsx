import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Reference #5 Typographic Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="pb-8 border-b border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2 select-none">
                <span className="text-[#00F5A0] font-semibold">SECTION 01</span>
                <span className="text-white/20">/</span>
                <span>SELECTED WORKS &amp; ARCHITECTURE</span>
              </div>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white">
                FEATURED <span className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-indigo-300">showcase</span>
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-3 font-light leading-relaxed max-w-2xl">
                Three production systems built with disciplined Clean Architecture, strict type safety, and resilient persistence. Toggle specifications on any project to review the underlying database models and security boundaries.
              </p>
            </div>

            <div className="text-xs font-mono tracking-widest uppercase text-[#94A3B8]/60 self-start md:self-auto select-none">
              <span>CATALOGUE: 03 CASE STUDIES</span>
            </div>
          </div>
        </motion.div>

        {/* Editorial Project List (Open, Seamless Rows) */}
        <div className="divide-y divide-white/10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
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
          ))}
        </div>
      </div>
    </section>
  );
};