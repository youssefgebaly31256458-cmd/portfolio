import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Menu, 
  X
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface NavbarProps {
  email: string;
}

export const Navbar: React.FC<NavbarProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { label: 'Works', href: '#projects', index: '01' },
    { label: 'Architecture', href: '#architecture', index: '02' },
    { label: 'Stack', href: '#stack', index: '03' },
    { label: 'Contact', href: '#contact', index: '04' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050507]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity - Reference #5 Style (Rawables. logo feel) */}
          <a 
            href="#" 
            className="group flex flex-col focus:outline-none"
            aria-label="Home"
          >
            <span className="font-sans text-xl font-bold tracking-tight text-white group-hover:text-[#00F5A0] transition-colors flex items-center">
              Youssef.Gebaly<span className="text-[#00F5A0] ml-0.5">_</span>
            </span>
            <span className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-[0.2em] -mt-0.5">
              Full-Stack Developer
            </span>
          </a>

          {/* Center Navigation Links (Reference #5 pill style) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group text-xs font-mono uppercase tracking-widest text-[#94A3B8] hover:text-white transition-colors relative py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F5A0] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Email Pill */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/25 rounded-full transition-all cursor-pointer bg-white/[0.02]"
              title="Copy developer email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00F5A0]" />
                  <span className="text-[#00F5A0]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>Email</span>
                </>
              )}
            </motion.button>

            {/* GitHub Action */}
            <motion.a
              whileTap={{ scale: 0.96 }}
              href="https://github.com/youssefgebaly31256458-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00F5A0]/50 rounded-full transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00F5A0]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 rounded-2xl bg-[#08080A] border border-white/10 space-y-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-mono uppercase tracking-wider text-[#94A3B8] hover:text-[#00F5A0] transition-colors border-b border-white/[0.05]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#00F5A0]">{link.index}</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono text-white bg-white/[0.04] border border-white/10 rounded-xl"
              >
                {copied ? <Check className="w-4 h-4 text-[#00F5A0]" /> : <Copy className="w-4 h-4 text-[#94A3B8]" />}
                <span>{copied ? 'Email Copied' : email}</span>
              </button>
              <a
                href="https://github.com/youssefgebaly31256458-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono text-white bg-white/[0.04] border border-white/10 rounded-xl"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Archive</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};