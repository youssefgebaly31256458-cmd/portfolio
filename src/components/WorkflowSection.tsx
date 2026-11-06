import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Code2,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { WorkflowScene3D } from './3d/WorkflowScene3D';

interface WorkflowPhase {
  id: string;
  stepNumber: string;
  code: string;
  title: string;
  arabicTitle: string;
  shortDesc: string;
  deliverables: string[];
  icon: React.ElementType;
}

const PHASES: WorkflowPhase[] = [
  {
    id: 'discovery',
    stepNumber: '01',
    code: 'DISCOVERY',
    title: 'Client Discovery & Requirements',
    arabicTitle: 'الاجتماع مع العميل وفهم المتطلبات',
    shortDesc:
      'Direct stakeholder consultation, domain modeling, and translating business workflows into technical specifications and data contracts.',
    deliverables: [
      'Domain Analysis & ERD Blueprints',
      'Feature Scoping & Priority SLAs',
      'OpenAPI 3.0 Contract Specification',
      'Architecture Feasibility Review'
    ],
    icon: Users,
  },
  {
    id: 'architecture',
    stepNumber: '02',
    code: 'ARCHITECTURE',
    title: 'Architecture & Clean Code',
    arabicTitle: 'بدء التنفيذ بكود نظيف وتصميم قواعد البيانات',
    shortDesc:
      'Domain-driven design, normalized 3NF SQL Server schema, and decoupled ASP.NET Core API paired with responsive React 19 UI.',
    deliverables: [
      'Clean 3-Tier Layer Separation',
      'Normalized SQL Server Relational Schema',
      'Claims-based JWT & RBAC Authorization',
      'Type-Safe React 19 + TypeScript Client'
    ],
    icon: Code2,
  },
  {
    id: 'delivery',
    stepNumber: '03',
    code: 'DELIVERY',
    title: 'Iteration & Milestone Delivery',
    arabicTitle: 'النتيجة والتعديل والوصول لأحسن نتيجة',
    shortDesc:
      'Continuous client feedback cycles on live staging, rigorous cross-device verification, latency benchmarking, and Arabic RTL fine-tuning.',
    deliverables: [
      'Interactive Staging Milestone Demos',
      'Sub-200ms API Latency Optimization',
      'Bi-directional Arabic RTL Layout QA',
      'Core Web Vitals & Accessibility Pass'
    ],
    icon: Rocket,
  },
  {
    id: 'reliability',
    stepNumber: '04',
    code: 'RELIABILITY',
    title: 'Production Reliability & Zero-Downtime',
    arabicTitle: 'حل المشاكل بعد الرفع ومتابعة الأداء',
    shortDesc:
      'Zero-downtime deployment, cloud database connection resilience, automated backup schedules, and proactive maintenance.',
    deliverables: [
      'Automated CI/CD Cloud Deployment',
      'Resilient Database Connection Pooling',
      'Scheduled Backups & Disaster Recovery',
      'Post-Launch Defect & Incident Support'
    ],
    icon: ShieldCheck,
  },
];

export const WorkflowSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(1);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <section id="workflow" className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient Horizon Lighting */}
      <div className="absolute inset-0 bg-horizon-seal pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#3872B8]/12 via-[#E11D48]/15 to-[#3872B8]/12 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* Single Unified Header                                     */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="pb-10 border-b border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48]" />
                <span className="text-[#FB7185] font-semibold">SECTION 02</span>
                <span className="text-white/20">/</span>
                <span>CLIENT JOURNEY PIPELINE</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F8FAFC]">
                Engineering <span className="italic font-normal text-[#FB7185]">Journey.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-3 font-light leading-relaxed max-w-2xl">
                A seamless four-stage engineering pipeline connecting discovery to production-grade deployment. Hover or click any phase to illuminate technical milestones and the synchronized 3D pipeline beacon.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* Unified Integrated Canvas: Interactive Steps + 3D View    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-10">

          {/* Left Column (lg:col-span-7): The 4 Integrated Timeline Stages (Clean Vertical Stepper on Mobile) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 relative">

            {/* Vertical Connecting Glowing Stepper Line */}
            <div className="absolute left-[24px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E11D48] via-[#FB7185] to-[#3872B8]/40 pointer-events-none z-0 block" />

            {PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const IconComp = phase.icon;

              return (
                <div
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  onMouseEnter={() => setActivePhaseIndex(idx)}
                  className={`p-4 sm:p-6 rounded-2xl transition-all cursor-pointer relative z-10 select-none border ${isActive
                      ? 'bg-white/[0.04] border-[#E11D48]/45 shadow-[0_0_25px_rgba(225,29,72,0.15)] sm:translate-x-1.5'
                      : 'bg-white/[0.015] border-white/5 hover:border-white/15 hover:bg-white/[0.025]'
                    }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Node Beacon Icon */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${isActive
                          ? 'bg-gradient-to-br from-[#E11D48] to-[#FB7185] text-white shadow-[0_0_16px_rgba(225,29,72,0.6)] scale-105'
                          : 'bg-[#060913] border border-white/15 text-[#94A3B8]'
                        }`}
                    >
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Stage Header Info */}
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-[#FB7185]">
                            PHASE {phase.stepNumber}
                          </span>
                          <span className="text-white/20">&bull;</span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                            {phase.code}
                          </span>
                        </div>

                        {/* Arabic Title */}
                        <span className="text-xs font-mono text-[#FB7185]/90 tracking-wide font-normal" dir="rtl">
                          {phase.arabicTitle}
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-lg sm:text-2xl font-normal tracking-tight transition-colors ${isActive ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'
                          }`}
                      >
                        {phase.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed pt-0.5 sm:pt-1">
                        {phase.shortDesc}
                      </p>

                      {/* Deliverables Pills */}
                      <div className="pt-2 sm:pt-2.5 flex flex-wrap gap-1.5">
                        {phase.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-colors ${isActive
                                ? 'bg-white/[0.07] text-[#F8FAFC] border border-white/20'
                                : 'bg-white/[0.02] text-[#94A3B8] border border-white/5'
                              }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (lg:col-span-5): Synchronized Live 3D Pipeline Scene */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center select-none touch-pan-y">

            {/* Ambient Diffuse Core Glow */}
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-[#E11D48]/25 via-[#FB7185]/15 to-[#3872B8]/20 blur-3xl pointer-events-none" />

            {/* Seamless 3D Canvas */}
            <div className="w-full h-[300px] sm:h-[420px] relative z-10 flex items-center justify-center">
              <WorkflowScene3D activePhase={activePhaseIndex} />
            </div>

            {/* Active Stage Indicator Card */}
            <div className="w-full relative z-20 mt-4 p-5 rounded-2xl bg-[#060913]/90 backdrop-blur-md border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">Active Pipeline Focus:</span>
                <span className="text-[#FB7185] font-semibold">Phase 0{activePhaseIndex + 1} / 04</span>
              </div>
              <h4 className="font-serif text-lg text-[#F8FAFC] font-normal">
                {activePhase.title}
              </h4>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                {activePhase.shortDesc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
