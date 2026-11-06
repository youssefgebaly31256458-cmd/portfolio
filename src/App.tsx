import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WorkflowSection } from './components/WorkflowSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const DEVELOPER_EMAIL = 'youssefgebaly31256458@gmail.com';
const DEVELOPER_PHONE = '+201140423096';

export function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#060913] text-[#94A3B8] selection:bg-[#E11D48]/25 selection:text-[#FB7185] relative overflow-x-hidden max-w-full">
      {/* Style #6 Dual Lighting: Faint Seal Blue Center-Top + Muted Crimson Pink Bottom Horizon */}
      <div className="fixed inset-0 bg-horizon-seal pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Top Navbar */}
        <Navbar email={DEVELOPER_EMAIL} />

        {/* Main Canvas Flow */}
        <main className="space-y-4 md:space-y-8">
          {/* 1. Hero Section (with Center Halo Glow + Left/Right Stats + Interactive 3D Orb) */}
          <Hero email={DEVELOPER_EMAIL} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 2. Featured Projects (Split Editorial Architecture + Custom 3D Canvases) */}
          <FeaturedProjects />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 3. The Journey from Meeting to Launch: 4-Phase Pipeline */}
          <WorkflowSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 4. Clean Architecture & Engineering Standards */}
          <ArchitectureSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 5. Engineering Matrix & Core Disciplines */}
          <SkillsSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 6. Direct Correspondence & Inquiry Form */}
          <ContactSection email={DEVELOPER_EMAIL} phone={DEVELOPER_PHONE} />
        </main>

        {/* Colophon Footer */}
        <Footer email={DEVELOPER_EMAIL} phone={DEVELOPER_PHONE} />
      </div>
    </div>
  );
}

export default App;