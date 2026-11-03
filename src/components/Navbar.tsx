import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  Menu, 
  X,
  Code2, 
  Layers, 
  ShieldCheck, 
  Mail
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
    { label: 'Featured Projects', href: '#projects', icon: Layers },
    { label: 'Architecture', href: '#architecture', icon: ShieldCheck },
    { label: 'Engineering Stack', href: '#stack', icon: Code2 },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0D0E]/80 backdrop-blur-xl py-3.5 shadow-2xl shadow-black/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a 
            href="#" 
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
              <Terminal className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                YOUSSEF.GEBALY<span className="text-red-500">_</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all"
                >
                  <IconComponent className="w-3.5 h-3.5 text-slate-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Email Copy Button */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleCopyEmail}
              className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 transition-all cursor-pointer group"
              title="Copy developer email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-sans">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 transition-colors" />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>

            {/* GitHub Profile Link */}
            <motion.a
              whileTap={{ scale: 0.96 }}
              href="https://github.com/youssefgebaly31256458-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-red-600/10 hover:bg-red-600/20 text-red-400 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#121517]/95 backdrop-blur-2xl space-y-2.5 shadow-2xl">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
                >
                  <IconComponent className="w-4 h-4 text-red-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono bg-white/[0.04] text-slate-200"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-red-400" />}
                <span>{copied ? 'Email Copied!' : email}</span>
              </button>
              <a
                href="https://github.com/youssefgebaly31256458-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium bg-red-600/15 text-red-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>youssefgebaly31256458-cmd on GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {scrolled && <div className="fading-divider mt-3.5" />}
    </header>
  );
};
