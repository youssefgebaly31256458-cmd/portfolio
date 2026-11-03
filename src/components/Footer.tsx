import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  ArrowUp,
  Phone
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface FooterProps {
  email: string;
  phone?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ email, phone }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 relative bg-[#0B0D0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fading Hairline Divider at Top of Footer */}
        <div className="fading-divider mb-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-4">
          {/* Brand & Focus */}
          <div className="space-y-1.5">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4 text-red-500" />
              </div>
              <span className="font-mono text-sm font-bold text-white tracking-tight">
                YOUSSEF.GEBALY<span className="text-red-500">_</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 font-mono">
              Full-Stack Developer (Backend & Web)
            </p>
          </div>

          {/* System Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] text-xs font-mono text-slate-300 select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All systems nominal</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[11px]">Production Verified 2026</span>
          </div>

          {/* Back to top button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Fading Hairline Divider */}
        <div className="fading-divider my-8" />

        {/* Footer Sub-row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Built with ASP.NET Core principles, React 19, TypeScript & Tailwind CSS.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {phone && (
              <>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-slate-300 transition-colors flex items-center gap-1.5 font-mono"
                >
                  <Phone className="w-3 h-3 text-red-500" />
                  <span>{phone}</span>
                </a>
                <span className="text-slate-700">|</span>
              </>
            )}
            <a
              href={`mailto:${email}`}
              className="hover:text-slate-300 transition-colors font-mono"
            >
              {email}
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://github.com/youssefgebaly31256458-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">|</span>
            <span>&copy; {CURRENT_YEAR} Youssef Gebaly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
