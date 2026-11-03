import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  Clock, 
  Globe, 
  Code2,
  FileCheck2
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Bottom Ambient Glow */}
      <div className="absolute inset-0 bg-ambient-indigo-bottom pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#00F5A0] font-semibold mb-3 select-none">
            <span>SECTION 04</span>
            <span className="text-white/20">/</span>
            <span>CORRESPONDENCE &amp; INQUIRIES</span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white">
            DIRECT <span className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-indigo-300">correspondence</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 font-light leading-relaxed">
            Available for full-stack engineering contracts, backend architecture in ASP.NET Core, and high-performance React frontends. Connect directly to discuss technical requirements, architecture reviews, or delivery milestones.
          </p>
        </motion.div>

        {/* Fine Hairline Divider */}
        <div className="border-b border-white/10 mt-8 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Availability Profile */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Email Card */}
            <div className="p-7 rounded-2xl bg-[#08080A] border border-white/10 hover:border-[#00F5A0]/40 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] select-none flex items-center gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-[#00F5A0]" />
                Primary Channel
              </span>
              <h3 className="font-display text-2xl text-white tracking-wide mt-1 mb-1">
                Direct Developer Email
              </h3>
              <p className="text-xs text-[#94A3B8] mb-5 font-mono break-all">
                {email}
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#00F5A0] hover:bg-[#10B981] text-[#08080A] font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#08080A]" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#08080A]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-mono transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>Open Client</span>
                </motion.a>
              </div>
            </div>

            {/* Direct Phone Line Card */}
            {phone && (
              <div className="p-7 rounded-2xl bg-[#08080A] border border-white/10 hover:border-[#00F5A0]/40 transition-all">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] select-none font-medium">
                  Voice &amp; Direct Line
                </span>
                <h3 className="font-display text-2xl text-white tracking-wide mt-1 mb-1">
                  Telephone Contact
                </h3>
                <p className="text-xs text-[#94A3B8] mb-5 font-mono">
                  {phone}
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={handleCopyPhone}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#00F5A0] hover:bg-[#10B981] text-[#08080A] font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)] cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-4 h-4 text-[#08080A]" />
                        <span>Phone Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#08080A]" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </motion.button>

                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-mono transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>Call Direct</span>
                  </motion.a>
                </div>
              </div>
            )}

            {/* GitHub Card */}
            <div className="p-7 rounded-2xl bg-[#08080A] border border-white/10 hover:border-[#00F5A0]/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-white tracking-wide">GitHub Repositories</h4>
                    <span className="text-xs font-mono text-[#94A3B8]">@youssefgebaly31256458-cmd</span>
                  </div>
                </div>
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/youssefgebaly31256458-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#00F5A0]/10 hover:bg-[#00F5A0]/20 border border-[#00F5A0]/30 text-[#00F5A0] transition-colors"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                Inspect public source repositories, commit histories, and architectural implementations across ASP.NET Core, C#, EF Core, and React.
              </p>
            </div>

            {/* Operating Availability Parameters */}
            <div className="p-7 rounded-2xl bg-[#08080A] border border-white/10 space-y-3 select-none">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#00F5A0]" />
                Engagement &amp; Availability Parameters
              </h4>
              <div className="space-y-2.5 text-xs font-mono text-[#94A3B8] pt-1">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-white/40 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#94A3B8]" /> Response Latency:
                  </span>
                  <span className="text-white font-medium">&lt; 24 Business Hours</span>
                </div>
                {phone && (
                  <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                    <span className="text-white/40 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#94A3B8]" /> Phone Direct:
                    </span>
                    <a href={`tel:${phone}`} className="text-white hover:text-[#00F5A0] font-medium transition-colors">
                      {phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-white/40 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#94A3B8]" /> Collaboration Model:
                  </span>
                  <span className="text-white font-medium">Remote / Hybrid Engagements</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/40 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#94A3B8]" /> Primary Specialization:
                  </span>
                  <span className="text-[#00F5A0] font-medium">Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#08080A] border border-white/10 hover:border-white/20 transition-all h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] select-none font-medium">
                      Correspondence Protocol
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mt-1">
                      Dispatch Technical Inquiry
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] select-none">
                    Direct Mail Transport
                  </span>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-6">
                  {/* Scope / Inquiry Type Selection */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-2.5 select-none uppercase tracking-wider">
                      Engagement Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'Full-Stack Contract',
                        'Backend / ASP.NET',
                        'Frontend / React',
                        'Architecture Review',
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
                              ? 'bg-[#00F5A0] text-[#08080A] font-bold shadow-[0_0_15px_rgba(0,245,160,0.3)]'
                              : 'bg-white/[0.02] border border-white/10 text-[#94A3B8] hover:text-white hover:bg-white/[0.05]'
                          }`}
                        >
                          {type}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Sender Email */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-2 select-none uppercase tracking-wider">
                      Your Email / Organization
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@enterprise.io"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 focus:border-[#00F5A0] focus:bg-white/[0.04] text-xs sm:text-sm font-mono text-white placeholder:text-[#94A3B8]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Details */}
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-2 select-none uppercase tracking-wider">
                      Technical Scope &amp; Specifications
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Outline target tech stack requirements, project scope, database complexity, or timelines..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 focus:border-[#00F5A0] focus:bg-white/[0.04] text-xs sm:text-sm font-mono text-white placeholder:text-[#94A3B8]/40 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Dispatch */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] font-mono text-[#94A3B8]/60 select-none">
                      Routes directly to {email}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00F5A0] hover:bg-[#10B981] text-[#08080A] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-[0_0_25px_rgba(0,245,160,0.35)] cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#08080A]" />
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