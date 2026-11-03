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
    <div className="min-h-screen bg-[#0B0D0E] text-[#E2E8F0] selection:bg-red-500/25 selection:text-white relative">
      {/* Top Floating Navigation */}
      <Navbar email={DEVELOPER_EMAIL} />

      {/* Main Continuous Canvas Flow */}
      <main className="space-y-4 md:space-y-8">
        {/* 1. Hero Section & Tech Ticker */}
        <Hero email={DEVELOPER_EMAIL} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fading-divider" />
        </div>

        {/* 2. Fluid Featured Projects Showcase */}
        <FeaturedProjects />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fading-divider" />
        </div>

        {/* 3. Architecture & Philosophy */}
        <ArchitectureSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fading-divider" />
        </div>

        {/* 4. Engineering Matrix & Skills */}
        <SkillsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fading-divider" />
        </div>

        {/* 5. Contact & Structured Inquiry */}
        <ContactSection email={DEVELOPER_EMAIL} phone={DEVELOPER_PHONE} />
      </main>

      {/* Minimalist Developer Footer */}
      <Footer email={DEVELOPER_EMAIL} phone={DEVELOPER_PHONE} />
    </div>
  );
}

export default App;
