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
    <div className="w-full py-4">
      {/* Category Filter Pills (Borderless seamless pills) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1.5 select-none">
          <Layers className="w-3.5 h-3.5 text-red-500" />
          Filter Competence:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] font-medium'
                : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Static Informational Tech Cards with Ambient Hover Bloom */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredItems.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between select-none relative group overflow-hidden"
            >
              <div className="radial-bloom" />
              <div className="relative z-10 flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded-md">
                  {tech.category}
                </span>
                <Icon className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
              </div>
              <div className="relative z-10">
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {tech.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
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
