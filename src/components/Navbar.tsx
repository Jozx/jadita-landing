import React, { useState, useEffect, useCallback } from 'react';
import { SECTIONS } from '../constants/sections';
import { BrandConfig, NavItem } from '../types/site.types';

interface NavbarProps {
  brand: BrandConfig;
  navLinks: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ brand, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav 
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-bg/95 backdrop-blur shadow-sm' : 'bg-transparent py-2'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href={`#${SECTIONS.HERO}`} className="font-heading text-3xl font-bold text-primary tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            {brand.name.split(' ')[0]}
          </a>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-text hover:text-primary transition-colors duration-200 font-body font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                {link.label}
              </a>
            ))}
          </div>
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-text hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded" 
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`md:hidden absolute top-full left-0 w-full bg-bg shadow-lg transform transition-transform duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu} className="block px-3 py-3 text-text hover:text-primary hover:bg-secondary/30 rounded-md font-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
