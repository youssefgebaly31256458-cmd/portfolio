import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const DEVELOPER_EMAIL = 'youssefgebaly31256458@gmail.com';
const DEVELOPER_PHONE = '+201140423096';

export function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050507] text-[#94A3B8] selection:bg-[#00F5A0]/25 selection:text-[#00F5A0] relative overflow-x-hidden">
      {/* Centered Electric Indigo Ambient Radial Lighting (Reference #5) */}
      <div className="fixed inset-0 bg-ambient-indigo pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Top Floating Navigation */}
        <Navbar email={DEVELOPER_EMAIL} />

        {/* Main Canvas Flow */}
        <main className="space-y-4 md:space-y-8">
          {/* 1. Hero Section & Tech Stack Bar */}
          <Hero email={DEVELOPER_EMAIL} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 2. Seamless & Borderless Projects Showcase */}
          <FeaturedProjects />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 3. Clean Architecture & Engineering Standards */}
          <ArchitectureSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 4. Engineering Matrix & Core Disciplines */}
          <SkillsSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10" />
          </div>

          {/* 5. Direct Correspondence & Inquiry Form */}
          <ContactSection email={DEVELOPER_EMAIL} phone={DEVELOPER_PHONE} />
        </main>

        {/* Editorial Footer */}
        <Footer email={DEVELOPER_EMAIL} phone={DEVELOPER_PHONE} />
      </div>
    </div>
  );
}

export default App;