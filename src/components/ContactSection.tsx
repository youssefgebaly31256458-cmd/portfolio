import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Terminal,
  MessageSquareCode
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ContactSectionProps {
  email: string;
  phone?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  email, 
  phone = '+201140423096' 
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryType, setInquiryType] = useState('Full-Stack Contract');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Technical Inquiry] ${inquiryType} - from ${senderEmail || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Youssef,\n\nI am contacting you regarding a ${inquiryType}.\n\nDetails:\n${inquiryMessage}\n\nBest regards,\n${senderEmail}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-crimson-bottom pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-semibold mb-2 select-none">
            <Mail className="w-4 h-4 text-red-500" />
            Direct Communications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate Technical Inquiry
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light leading-relaxed">
            Whether you need decoupled backend architecture in ASP.NET Core, resilient cloud SQL persistence, or a high-performance React/Next.js frontend, let’s discuss technical requirements and delivery milestones.
          </p>
        </motion.div>

        {/* Fading Hairline Divider */}
        <div className="fading-divider mt-8 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Availability Profile */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Email Card - Borderless fluid card */}
            <div className="p-7 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] transition-all relative group overflow-hidden">
              <div className="radial-bloom" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 select-none">
                  Primary Channel
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-1">
                  Direct Developer Email
                </h3>
                <p className="text-xs text-slate-400 mb-5 font-mono break-all">
                  {email}
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={handleCopyEmail}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </motion.button>

                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white text-xs font-mono transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-400" />
                    <span>Open Client</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Direct Phone Line Card */}
            {phone && (
              <div className="p-7 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] transition-all relative group overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 select-none">
                    Voice & Direct Line
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-1">
                    Direct Phone Number
                  </h3>
                  <p className="text-xs text-slate-400 mb-5 font-mono">
                    {phone}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={handleCopyPhone}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] cursor-pointer"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Phone Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Phone Number</span>
                        </>
                      )}
                    </motion.button>

                    <motion.a
                      whileTap={{ scale: 0.96 }}
                      href={`tel:${phone}`}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white text-xs font-mono transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>Call Direct</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            )}

            {/* GitHub Card */}
            <div className="p-7 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] transition-all relative group overflow-hidden">
              <div className="radial-bloom" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-slate-200">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">GitHub Codebase</h4>
                      <span className="text-xs font-mono text-slate-400">@youssefgebaly31256458-cmd</span>
                    </div>
                  </div>
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href="https://github.com/youssefgebaly31256458-cmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-red-600/15 hover:bg-red-600/25 text-red-400 transition-colors"
                  >
                    <span>Explore</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Inspect public repositories, commit patterns, and architectural implementations across C#, ASP.NET Core, and TypeScript.
                </p>
              </div>
            </div>

            {/* Operating Availability Parameters */}
            <div className="p-7 rounded-3xl bg-white/[0.015] space-y-3 relative overflow-hidden select-none">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Availability & Service Parameters
              </h4>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Response Time:
                  </span>
                  <span className="text-white font-medium">&lt; 24 Business Hours</span>
                </div>
                {phone && (
                  <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone / Voice:
                    </span>
                    <a href={`tel:${phone}`} className="text-white hover:text-red-400 font-medium transition-colors">
                      {phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-400" /> Working Model:
                  </span>
                  <span className="text-white font-medium">Global Remote / Hybrid</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-slate-400" /> Technical Focus:
                  </span>
                  <span className="text-emerald-400 font-medium">Full-Stack & Backend Web</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Inquiry Form - Fluid container */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.015] hover:bg-white/[0.025] transition-all h-full flex flex-col justify-between relative group overflow-hidden">
              <div className="radial-bloom" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 select-none">
                    <MessageSquareCode className="w-4 h-4 text-red-500" />
                    Structured Project Dispatch
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 select-none">
                    Direct Routing
                  </span>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-5">
                  {/* Scope / Inquiry Type Selection */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2.5 select-none">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'Full-Stack Contract',
                        'Backend / ASP.NET',
                        'Frontend / Next.js',
                        'Backend & API Review',
                        'Technical Consultation',
                        'General Discussion'
                      ].map((type) => (
                        <motion.button
                          type="button"
                          key={type}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setInquiryType(type)}
                          className={`px-3 py-2.5 text-xs font-mono rounded-xl text-left transition-all cursor-pointer ${
                            inquiryType === type
                              ? 'bg-red-600 text-white font-medium shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                              : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06]'
                          }`}
                        >
                          {type}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Sender Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 select-none">
                      Your Email / Organization
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@enterprise.io"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] focus:bg-white/[0.06] text-xs sm:text-sm font-mono text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Details */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 select-none">
                      Technical Overview & Timeline
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Outline your tech stack requirements, target timelines, or project goals..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] focus:bg-white/[0.06] text-xs sm:text-sm font-mono text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Dispatch */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] font-mono text-slate-500 select-none">
                      Dispatches directly to {email} via mail transport.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-[0_0_20px_rgba(239,68,68,0.35)] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch Technical Inquiry</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
