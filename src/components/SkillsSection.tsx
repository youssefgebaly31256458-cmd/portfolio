import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  CheckCircle2, 
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
        {/* Section Header */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48]" />
                <span className="text-[#FB7185] font-semibold">SECTION 04</span>
                <span className="text-white/20">/</span>
                <span>ENGINEERING MATRIX &amp; COMPETENCE</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F8FAFC]">
                Technical <span className="italic font-normal text-[#FB7185]">Competence.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-3 font-light leading-relaxed max-w-2xl">
                A verified directory of backend architectural patterns, relational database engines, and client-side interfaces backed by real executed client contracts.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 select-none self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#E11D48] text-white font-medium shadow-[0_0_20px_rgba(225,29,72,0.4)]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] bg-white/[0.02] hover:bg-white/[0.06] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categories Stack */}
        <div className="space-y-16 mt-12">
          {displayedCategories.map((group) => {
            const GroupIcon = getCategoryIcon(group.category);
            return (
              <div key={group.category} className="space-y-6">
                {/* Group Title Bar */}
                <div className="flex items-baseline justify-between border-b border-white/10 pb-3 select-none">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm tracking-widest text-[#FB7185] font-semibold">
                      {group.romanNumeral || '•'}
                    </span>
                    <GroupIcon className="w-4 h-4 text-[#FB7185]" />
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F8FAFC]">
                      {group.category}
                    </h3>
                  </div>
                  <p className="hidden md:block text-xs font-mono text-[#94A3B8]/70 max-w-md text-right">
                    {group.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 rounded-2xl bg-white/[0.015] hover:bg-white/[0.035] border border-white/10 hover:border-[#E11D48]/40 flex flex-col justify-between select-none transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="text-sm font-semibold text-[#F8FAFC]">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#FB7185] bg-[#E11D48]/10 px-2.5 py-0.5 rounded-full border border-[#E11D48]/20 shrink-0 font-medium">
                            {skill.proficiency}
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-[#3872B8]">
                        <CheckCircle2 className="w-3 h-3 text-[#3872B8]" />
                        <span>Production Verified</span>
                      </div>
                    </div>
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