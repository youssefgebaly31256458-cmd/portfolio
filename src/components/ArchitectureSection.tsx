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
      {/* Subtle Top Electric Blue Glow */}
      <div className="absolute inset-0 bg-horizon-blue pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="pb-8 border-b border-white/10"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A30]" />
              <span className="text-[#FF7A30] font-semibold">SECTION 02</span>
              <span className="text-white/20">/</span>
              <span>ENGINEERING PRINCIPLES &amp; STANDARDS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white">
              System <span className="italic font-normal text-[#FF7A30]">Architecture.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-3 font-light leading-relaxed max-w-2xl">
              Scalable software demands decoupled domain logic, predictable lifecycles, and defensive persistence. Below is the technical breakdown governing backend boundaries, multi-tier API security, and cloud release automation.
            </p>
          </div>
        </motion.div>

        {/* Roman Numeral Tabs */}
        <div className="flex flex-wrap items-center gap-3 my-8 pb-4 border-b border-white/10 select-none">
          {architectureTopics.map((topic) => {
            const Icon = getTopicIcon(topic.id);
            const isActive = activeTabId === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveTabId(topic.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF7A30] text-white font-medium shadow-[0_0_20px_rgba(255,122,48,0.4)]'
                    : 'text-[#94A3B8] hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10'
                }`}
              >
                <span>{topic.romanNumeral}.</span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#94A3B8]'}`} />
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTopic.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-10"
          >
            {/* Topic Summary Banner */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.015] border border-white/10 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-[#FF7A30] font-semibold tracking-widest uppercase select-none">
                    DISCIPLINE {activeTopic.romanNumeral}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-2">
                    {activeTopic.title}
                  </h3>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1 uppercase tracking-wider">
                    {activeTopic.tagline}
                  </p>
                </div>

                {/* Quick specs pill row */}
                <div className="flex flex-wrap gap-2 select-none self-start lg:self-auto">
                  {activeTopic.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#94A3B8]"
                    >
                      <span className="text-white/40 mr-1.5">{spec.label}:</span>
                      <strong className="text-white font-medium">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed max-w-4xl pt-2 border-t border-white/10">
                {activeTopic.summary}
              </p>
            </div>

            {/* Visual Workflow Card 1: Clean Architecture & Layered Systems */}
            {activeTopic.id === 'clean-architecture' && (
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.015] border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white select-none">
                    <Workflow className="w-4 h-4 text-[#FF7A30]" />
                    Layer Dependency Direction: API → BLL → DAL → Persistence
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF7A30] select-none">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inversion of Control Verified</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#FF7A30] uppercase tracking-wider mb-1 select-none">
                        Layer 01: Presentation
                      </div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#FF7A30]" />
                        API Controllers
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed font-light">
                        HTTP transport, route dispatching, middleware pipeline, Swagger OAS contracts, and RFC 7807 responses.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-white/10 text-[11px] font-mono text-[#94A3B8]/60 flex items-center justify-between select-none">
                      <span>Depends on BLL</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF7A30]" />
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-[#3B82F6]/30 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-wider mb-1 select-none">
                        Layer 02: Core Domain
                      </div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <Workflow className="w-4 h-4 text-[#3B82F6]" />
                        Business Logic (BLL)
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed font-light">
                        Pure business rules, domain invariants, transaction workflows, and DTO validation contracts.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-white/10 text-[11px] font-mono text-[#94A3B8]/60 flex items-center justify-between select-none">
                      <span>Zero Framework Leak</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#FF7A30] uppercase tracking-wider mb-1 select-none">
                        Layer 03: Persistence
                      </div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <Database className="w-4 h-4 text-[#FF7A30]" />
                        Data Access (DAL)
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed font-light">
                        Entity Framework Core DbContext, repository implementations, Code-First migrations, and query tuning.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-white/10 text-[11px] font-mono text-[#94A3B8]/60 flex items-center justify-between select-none">
                      <span>Implements Interfaces</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF7A30]" />
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1 select-none">
                        Database Engine
                      </div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <Server className="w-4 h-4 text-[#94A3B8]" />
                        SQL Server 3NF
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed font-light">
                        Normalized 3NF relational schema, foreign key indexing, ACID transactions, and automated snapshots.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-white/10 text-[11px] font-mono text-[#FF7A30] flex items-center gap-1 select-none">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Resilient Pooling</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Workflow Card 2: Secure APIs */}
            {activeTopic.id === 'secure-apis' && (
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.015] border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white select-none">
                    <Lock className="w-4 h-4 text-[#FF7A30]" />
                    Multi-Tier Security &amp; Authorization Gate
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#3B82F6] select-none">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Stateless Zero-Trust Architecture</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-[#FF7A30] uppercase select-none">Phase 1: Verification</span>
                    <h5 className="text-sm font-semibold text-white mt-1">Bearer Token Verification</h5>
                    <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed">
                      Stateless cryptographically signed JWT tokens validated against RSA/HMAC-256 keys with expiration enforcement.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#94A3B8] select-none">
                      <Zap className="w-3 h-3 text-[#FF7A30]" />
                      <span>HMAC-SHA256 Signatures</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-[#3B82F6] uppercase select-none">Phase 2: Authorization</span>
                    <h5 className="text-sm font-semibold text-white mt-1">Claims Policy Enforcement</h5>
                    <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed">
                      Fine-grained Role-Based Access Control (Admin, Doctor, Receptionist) checking tenant claims on every endpoint.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#94A3B8] select-none">
                      <Boxes className="w-3 h-3 text-[#3B82F6]" />
                      <span>Granular RBAC Claims</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-[#FF7A30] uppercase select-none">Phase 3: Defense &amp; Audit</span>
                    <h5 className="text-sm font-semibold text-white mt-1">RFC 7807 &amp; Tamper-Proof Audit</h5>
                    <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed">
                      Standardized Problem Details responses shielding internal stack traces, paired with immutable user audit logs.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#94A3B8] select-none">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>Tamper-Evident History</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Workflow Card 3: Production Reliability */}
            {activeTopic.id === 'production-reliability' && (
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.015] border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white select-none">
                    <Server className="w-4 h-4 text-[#3B82F6]" />
                    Automated Safe Deployment Routine &amp; Zero-Downtime Pipeline
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#3B82F6] select-none">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Dry-Run Pre-Flight Verified</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-[#3B82F6] uppercase select-none">Step 01: Pre-Flight</span>
                    <h5 className="text-sm font-semibold text-white mt-1">Zero-Warning Build Gate</h5>
                    <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed">
                      Automated build routines executing strict compilation and type checks with exit-code verification before packaging.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#94A3B8] select-none">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>Strict Compiler Checks</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-[#FF7A30] uppercase select-none">Step 02: Schema Sync</span>
                    <h5 className="text-sm font-semibold text-white mt-1">EF Core Dry-Run &amp; Sync</h5>
                    <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed">
                      Target database schema validation against migration scripts on remote MSSQL hosts prior to binary bundle deployment.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#94A3B8] select-none">
                      <Database className="w-3.5 h-3.5 text-[#FF7A30]" />
                      <span>Schema Migration Check</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-[#3B82F6] uppercase select-none">Step 03: Safe Rotation</span>
                    <h5 className="text-sm font-semibold text-white mt-1">Backup Snapshot &amp; Rollback</h5>
                    <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed">
                      Automatic backup snapshots generated on disk before asset rotation to guarantee zero-downtime and instant rollbacks.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#94A3B8] select-none">
                      <RefreshCw className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>Instant Hot-Rollback</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTopic.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-[#FF7A30]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A30] mb-2 select-none">
                      <span className="uppercase tracking-wider font-semibold">
                        Principle {idx + 1}
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl font-normal text-white tracking-tight mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
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