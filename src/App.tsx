import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { GitHubActivity } from './components/GitHubActivity';
import { Skills } from './components/Skills';
import { CodingProfiles } from './components/CodingProfiles';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'coding', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 flex flex-col selection:bg-neutral-200">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <GitHubActivity />
        <Skills />
        <CodingProfiles />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
