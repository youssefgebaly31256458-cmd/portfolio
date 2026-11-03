import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp,
  Phone,
  Mail
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
    <footer className="pt-16 pb-12 relative bg-[#050507] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Editorial Title */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="inline-block group">
              <span className="font-sans text-2xl font-bold text-white tracking-tight group-hover:text-[#00F5A0] transition-colors flex items-center">
                Youssef.Gebaly<span className="text-[#00F5A0] ml-0.5">_</span>
              </span>
            </a>
            <p className="text-xs text-[#00F5A0] font-mono tracking-wider uppercase font-medium">
              Full-Stack Developer &bull; Backend &amp; Web Engineering
            </p>
            <p className="text-xs text-[#94A3B8] font-light leading-relaxed max-w-sm pt-1">
              Building decoupled backend architectures with ASP.NET Core, robust cloud database layers with EF Core &amp; MSSQL, and modern responsive frontends in React.
            </p>
          </div>

          {/* Quick Index Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#94A3B8] select-none block">
              Navigation Index
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#94A3B8]">
              <li>
                <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#00F5A0]">01</span>
                  <span>Selected Projects</span>
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#00F5A0]">02</span>
                  <span>Clean Architecture</span>
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#00F5A0]">03</span>
                  <span>Engineering Stack</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#00F5A0]">04</span>
                  <span>Direct Correspondence</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Edition & Availability */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#94A3B8] select-none block">
              Edition &amp; Availability
            </span>
            <div className="space-y-2.5 text-xs font-mono text-[#94A3B8]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5A0]"></span>
                </span>
                <span className="text-white">Available for Contracts</span>
                <span className="text-white/20">|</span>
                <span className="text-[#94A3B8] text-[11px]">Verified 2026</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]/70 leading-relaxed font-light">
                Typeset in Bebas Neue, Playfair Display Italic, Plus Jakarta Sans, and JetBrains Mono. Built with ASP.NET Core principles, React 19, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Direct Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/60">
          <div className="flex items-center gap-2">
            <span>&copy; {CURRENT_YEAR} Youssef Gebaly. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {phone && (
              <>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#00F5A0]" />
                  <span>{phone}</span>
                </a>
                <span className="text-white/10">|</span>
              </>
            )}
            <a
              href={`mailto:${email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#00F5A0]" />
              <span>{email}</span>
            </a>
            <span className="text-white/10">|</span>
            <a
              href="https://github.com/youssefgebaly31256458-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span>GitHub</span>
            </a>
            <span className="text-white/10">|</span>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-[#94A3B8] hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-[#00F5A0]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};