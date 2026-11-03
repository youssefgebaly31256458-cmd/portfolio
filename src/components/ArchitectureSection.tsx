import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Layers, 
  Server, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Database,
  Cpu,
  Boxes,
  Zap,
  RefreshCw
} from 'lucide-react';
import { architectureTopics } from '../data/architectureData';

export const ArchitectureSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(architectureTopics[0].id);

  const activeTopic = architectureTopics.find((t) => t.id === activeTabId) || architectureTopics[0];

  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'clean-architecture':
        return Layers;
      case 'secure-apis':
        return ShieldCheck;
      case 'production-reliability':
        return Server;
      default:
        return Workflow;
    }
  };

  return (
    <section id="architecture" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-semibold mb-2 select-none">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            Engineering Standards & Deep Tech
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Architecture & Philosophy
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light leading-relaxed">
            Scalable engineering is about strict domain boundaries, predictable lifecycles, and resilient persistence. Below is the visual architectural breakdown governing backend data flow, multi-layer API authorization, and automated cloud deployments.
          </p>
        </motion.div>

        {/* Fading Hairline Divider */}
        <div className="fading-divider mt-8 mb-10" />

        {/* Seamless Topic Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-white/[0.02] backdrop-blur-md inline-flex select-none">
          {architectureTopics.map((topic) => {
            const Icon = getTopicIcon(topic.id);
            const isActive = activeTabId === topic.id;
            return (
              <motion.button
                key={topic.id}
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTabId(topic.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{topic.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTopic.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {/* Topic Summary Banner - Fluid borderless surface */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.015] hover:bg-white/[0.03] transition-all relative group overflow-hidden">
              <div className="radial-bloom" />
              <div className="relative z-10 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-medium select-none">
                      Architectural Standard
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {activeTopic.title}
                    </h3>
                    <p className="text-sm font-mono text-red-300 mt-1">
                      {activeTopic.tagline}
                    </p>
                  </div>

                  {/* Specs pill row (no harsh borders) */}
                  <div className="flex flex-wrap gap-2 select-none">
                    {activeTopic.specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] text-[11px] font-mono text-slate-300"
                      >
                        <span className="text-slate-500 mr-1.5">{spec.label}:</span>
                        <strong className="text-white font-medium">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-2 max-w-4xl">
                  {activeTopic.summary}
                </p>
              </div>
            </div>

            {/* Visual Workflow Card 1: Clean Architecture & Layered Systems */}
            {activeTopic.id === 'clean-architecture' && (
              <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.015] space-y-6 relative group overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative z-10 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 select-none">
                      <Workflow className="w-4 h-4 text-red-500" />
                      Layered Dependency Direction: API → BLL → DAL → Persistence
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 select-none">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Inversion of Control Verified</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider mb-1 select-none">
                          Layer 01: Presentation
                        </div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Cpu className="w-4 h-4 text-red-500" />
                          API Controllers
                        </h4>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                          HTTP transport, route dispatching, middleware pipeline, Swagger OAS contracts, and RFC 7807 responses.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-center justify-between select-none">
                        <span>Depends on BLL</span>
                        <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-[0_0_25px_rgba(239,68,68,0.08)]">
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 select-none">
                          Layer 02: Core Domain
                        </div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Workflow className="w-4 h-4 text-emerald-400" />
                          Business Logic (BLL)
                        </h4>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                          Pure business rules, domain invariants, transaction workflows, and DTO validation contracts.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-center justify-between select-none">
                        <span>Zero Framework Leak</span>
                        <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider mb-1 select-none">
                          Layer 03: Persistence
                        </div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Database className="w-4 h-4 text-red-500" />
                          Data Access (DAL)
                        </h4>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                          Entity Framework Core DbContext, repository implementations, Code-First migrations, and query tuning.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-center justify-between select-none">
                        <span>Implements Interfaces</span>
                        <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 select-none">
                          Database Engine
                        </div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Server className="w-4 h-4 text-slate-400" />
                          SQL Server 3NF
                        </h4>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                          Normalized 3NF relational schema, foreign key indexing, ACID transactions, and automated snapshots.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-white/[0.05] text-[11px] font-mono text-emerald-400 flex items-center gap-1 select-none">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Resilient Pooling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Workflow Card 2: Secure APIs & Enterprise Defense */}
            {activeTopic.id === 'secure-apis' && (
              <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.015] space-y-6 relative group overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative z-10 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 select-none">
                      <Lock className="w-4 h-4 text-red-500" />
                      Multi-Tier Security & Authorization Gate
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 select-none">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Stateless Zero-Trust Architecture</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <span className="text-[10px] font-mono text-red-400 uppercase select-none">Phase 1: Verification</span>
                      <h5 className="text-sm font-semibold text-white mt-1">Bearer Token Verification</h5>
                      <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                        Stateless cryptographically signed JWT tokens validated against RSA/HMAC-256 keys with expiration enforcement.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-400 select-none">
                        <Zap className="w-3 h-3 text-red-400" />
                        <span>HMAC-SHA256 Signatures</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <span className="text-[10px] font-mono text-red-400 uppercase select-none">Phase 2: Authorization</span>
                      <h5 className="text-sm font-semibold text-white mt-1">Claims Policy Enforcement</h5>
                      <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                        Fine-grained Role-Based Access Control (Admin, Doctor, Receptionist) checking tenant claims on every endpoint.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-400 select-none">
                        <Boxes className="w-3 h-3 text-red-400" />
                        <span>Granular RBAC Claims</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <span className="text-[10px] font-mono text-red-400 uppercase select-none">Phase 3: Defense & Audit</span>
                      <h5 className="text-sm font-semibold text-white mt-1">RFC 7807 & Tamper-Proof Audit</h5>
                      <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                        Standardized Problem Details responses shielding internal stack traces, paired with immutable user audit logs.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-400 select-none">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tamper-Evident History</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Workflow Card 3: Production Reliability & Safe Deploy */}
            {activeTopic.id === 'production-reliability' && (
              <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.015] space-y-6 relative group overflow-hidden">
                <div className="radial-bloom" />
                <div className="relative z-10 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 select-none">
                      <Server className="w-4 h-4 text-emerald-400" />
                      Automated Safe Deployment Routine & Zero-Downtime Pipeline
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 select-none">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Dry-Run Pre-Flight Verified</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase select-none">Step 01: Pre-Flight</span>
                      <h5 className="text-sm font-semibold text-white mt-1">Zero-Warning Build Gate</h5>
                      <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                        Automated build routines executing strict compilation and type checks with exit-code verification before packaging.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-400 select-none">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Strict Compiler Checks</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase select-none">Step 02: Schema Sync</span>
                      <h5 className="text-sm font-semibold text-white mt-1">EF Core Dry-Run & Sync</h5>
                      <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                        Target database schema validation against migration scripts on remote MSSQL hosts prior to binary bundle deployment.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-400 select-none">
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Schema Migration Check</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase select-none">Step 03: Safe Rotation</span>
                      <h5 className="text-sm font-semibold text-white mt-1">Backup Snapshot & Rollback</h5>
                      <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                        Automatic backup snapshots generated on disk before asset rotation to guarantee zero-downtime and instant rollbacks.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-400 select-none">
                        <RefreshCw className="w-3 h-3 text-emerald-400" />
                        <span>Instant Hot-Rollback</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Principles & Deep Breakdown Grid (Pure fluid cards, zero harsh borders) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTopic.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] transition-all flex flex-col justify-between relative group overflow-hidden"
                >
                  <div className="radial-bloom" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-2 select-none">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                      <span className="uppercase tracking-wider font-semibold">
                        Principle {idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
