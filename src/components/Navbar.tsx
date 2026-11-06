import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Copy, 
  Check, 
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
    { label: 'Projects', href: '#projects', isFeatured: true },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060913]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity - Style #6 Waveform mark */}
          <a 
            href="#" 
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Home"
          >
            {/* Tech Waveform Icon */}
            <div className="flex items-center gap-0.5 h-6">
              <span className="w-1 h-3.5 rounded-full bg-[#3872B8] group-hover:h-5 transition-all duration-200" />
              <span className="w-1 h-5 rounded-full bg-[#E11D48] group-hover:h-3.5 transition-all duration-200" />
              <span className="w-1 h-4 rounded-full bg-[#F8FAFC] group-hover:h-6 transition-all duration-200" />
              <span className="w-1 h-2 rounded-full bg-[#3872B8] group-hover:h-4 transition-all duration-200" />
            </div>

            <div>
              <span className="font-sans text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#FB7185] transition-colors flex items-center">
                Youssef.Gebaly
              </span>
              <span className="block font-mono text-[9px] text-[#94A3B8] uppercase tracking-[0.2em] -mt-0.5">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Center Navigation Links with Crimson Dot */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group text-xs font-sans tracking-wide text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 py-1"
              >
                {link.isFeatured && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Copy Button */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-sans tracking-wide text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              title="Copy developer email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#FB7185]" />
                  <span className="text-[#FB7185]">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>

            {/* Glowing Pill Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="flex items-center justify-center px-5 py-2 text-xs font-sans font-medium text-[#F8FAFC] bg-[#E11D48]/15 hover:bg-[#E11D48]/25 border border-[#E11D48]/40 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.25)] hover:shadow-[0_0_20px_rgba(225,29,72,0.45)] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Button (44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-[#94A3B8] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FB7185]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 rounded-2xl bg-[#080D1A] border border-white/10 space-y-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center justify-between py-2.5 text-sm font-sans text-[#94A3B8] hover:text-[#FB7185] transition-colors border-b border-white/[0.05]"
              >
                <span>{link.label}</span>
                {link.isFeatured && (
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                )}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={handleCopyEmail}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-3 text-xs font-sans text-white bg-white/[0.04] border border-white/10 rounded-xl"
              >
                {copied ? <Check className="w-4 h-4 text-[#FB7185]" /> : <Copy className="w-4 h-4 text-[#94A3B8]" />}
                <span>{copied ? 'Email Copied' : email}</span>
              </button>
              <a
                href="https://github.com/youssefgebaly31256458-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-3 text-xs font-sans text-white bg-white/[0.04] border border-white/10 rounded-xl"
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