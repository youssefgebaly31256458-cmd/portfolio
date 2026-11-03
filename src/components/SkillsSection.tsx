import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  CheckCircle2, 
  Cpu, 
  Wrench
} from 'lucide-react';
import { skillsData } from '../data/skillsData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('backend')) return Server;
    if (category.toLowerCase().includes('frontend')) return Code2;
    return Wrench;
  };

  return (
    <section id="stack" className="py-20 md:py-28 relative">
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
              <Cpu className="w-4 h-4 text-red-500" />
              Technical Competence & Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Engineering Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-light leading-relaxed">
              Every tool and language below is backed by real executed client contracts, production systems, and measurable benchmarks—not academic toy projects.
            </p>
          </div>

          {/* Category Filter Pills (Borderless seamless buttons) */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto select-none">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] font-medium'
                    : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Fading Hairline Divider */}
        <div className="fading-divider mt-8 mb-12" />

        {/* Categories Stack */}
        <div className="space-y-14">
          {displayedCategories.map((group) => {
            const GroupIcon = getCategoryIcon(group.category);
            return (
              <div key={group.category} className="space-y-5">
                {/* Group Title Bar */}
                <div className="flex items-center gap-3 select-none">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-red-500">
                    <GroupIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid - Fluid borderless cards with ambient hover bloom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] flex flex-col justify-between select-none transition-all duration-300 relative group overflow-hidden"
                    >
                      <div className="radial-bloom" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.03] px-2.5 py-0.5 rounded-md shrink-0">
                            {skill.proficiency}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {skill.description}
                        </p>
                      </div>

                      <div className="relative z-10 mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Production Verified</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
