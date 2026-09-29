import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { GitHubIcon } from './Icons';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding', href: '#coding' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <a
          href="#"
          className="text-base font-medium tracking-tight text-neutral-900 hover:text-neutral-700 transition-colors"
        >
          Rishabh Srivastava
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-neutral-950 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="h-4 w-px bg-stone-300" aria-hidden="true" />

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/RISHABHXVAZ/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-neutral-600 hover:text-neutral-950 transition-colors p-1"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded-md"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fafaf9] border-b border-stone-200 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-neutral-700 hover:text-neutral-950 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <a
                href="https://github.com/RISHABHXVAZ/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-950 flex items-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub Profile
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
