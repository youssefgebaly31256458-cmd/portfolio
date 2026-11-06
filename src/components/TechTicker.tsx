import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Layers, 
  Code2, 
  Globe, 
  Cpu, 
  Workflow, 
  Boxes, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Architecture' | 'Cloud';
  highlight: string;
  icon: React.ElementType;
}

const techItems: TechItem[] = [
  { name: 'ASP.NET Core', category: 'Backend', highlight: 'RESTful Web APIs', icon: Server },
  { name: 'C# (.NET 8/9)', category: 'Backend', highlight: 'LINQ & Async Tasks', icon: Cpu },
  { name: 'Entity Framework Core', category: 'Backend', highlight: 'Code-First Migrations', icon: Workflow },
  { name: 'Microsoft SQL Server', category: 'Backend', highlight: '3NF Relational Schemas', icon: Database },
  { name: 'Clean Architecture', category: 'Architecture', highlight: 'Presentation / BLL / DAL', icon: Layers },
  { name: 'React 19', category: 'Frontend', highlight: 'Component Trees & Hooks', icon: Code2 },
  { name: 'TypeScript', category: 'Frontend', highlight: 'Strict Type System', icon: Boxes },
  { name: 'Next.js (App Router)', category: 'Frontend', highlight: 'SSG & Server Components', icon: Globe },
  { name: 'Tailwind CSS', category: 'Frontend', highlight: 'Design Tokens & RTL', icon: Boxes },
  { name: 'RBAC & JWT Claims', category: 'Architecture', highlight: 'Stateless Authorization', icon: ShieldCheck },
  { name: 'Zod Validation', category: 'Frontend', highlight: 'Schema Guards', icon: CheckCircle2 },
  { name: 'MSSQL Cloud & MonsterASP', category: 'Cloud', highlight: 'Connection Resilience', icon: Server },
];

export const TechTicker: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend', 'Frontend', 'Architecture', 'Cloud'];

  const filteredItems = activeCategory === 'All' 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94A3B8] select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48]" />
          <span>Core Engineering Stack</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer pb-0.5 ${
                activeCategory === cat
                  ? 'text-[#F8FAFC] border-b-2 border-[#E11D48] font-medium'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredItems.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#E11D48]/40 transition-all flex flex-col justify-between select-none group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]/70 group-hover:text-[#94A3B8] transition-colors">
                  {tech.category}
                </span>
                <Icon className="w-3.5 h-3.5 text-[#3872B8] group-hover:text-[#FB7185] transition-colors" />
              </div>
              <div>
                <h4 className="text-xs font-medium text-[#F8FAFC] group-hover:text-[#FB7185] transition-colors">
                  {tech.name}
                </h4>
                <p className="text-[11px] text-[#94A3B8] font-mono mt-0.5 truncate">
                  {tech.highlight}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};