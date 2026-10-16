import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for backdrop and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'learning', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D0C]/85 backdrop-blur-xl border-b border-[#232926]/90 py-3 shadow-xl shadow-black/30'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1 -m-1"
          aria-label="Mukesh Kaushal — Home"
        >
          <div className="relative w-10 h-10 rounded-xl bg-[#141816] border border-[#232926] group-hover:border-accent/60 flex items-center justify-center font-mono font-bold text-sm tracking-wider text-[#F4F4EF] transition-all duration-300 group-hover:scale-105 shadow-sm">
            <span className="text-accent">M</span>
            <span>K</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-[#0B0D0C] animate-pulse" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-display font-semibold text-sm text-[#F4F4EF] tracking-tight group-hover:text-accent transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-[#9E9E96] tracking-wider uppercase">
              Frontend &amp; Software Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Capsule */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[#121514]/90 px-3 py-1.5 rounded-full border border-[#232926] backdrop-blur-md shadow-inner"
        >
          {navigationLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'text-[#0B0D0C] font-semibold'
                    : 'text-[#9E9E96] hover:text-[#F4F4EF]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalInfo.resumeUrl}
            download="Mukesh_Kaushal_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono text-[#9E9E96] hover:text-[#F4F4EF] bg-[#141816] border border-[#232926] hover:border-[#38423C] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            title="Download Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-accent text-[#0B0D0C] hover:bg-accent-hover transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-md shadow-accent/15"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-[#141816] border border-[#232926] text-[#F4F4EF] hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[#232926] bg-[#0B0D0C]/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3 max-w-md mx-auto">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F736E] pb-2 border-b border-[#1E2321] flex items-center justify-between">
                <span>Navigation Menu</span>
                <span className="text-accent text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Available
                </span>
              </div>

              {navigationLinks.map((link, index) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#161B18] text-accent border border-accent/20 font-semibold'
                        : 'text-[#9E9E96] hover:text-[#F4F4EF] hover:bg-[#121514]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#4D534F]" />
                    )}
                  </motion.a>
                );
              })}

              <div className="pt-4 border-t border-[#1E2321] flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-accent text-[#0B0D0C] hover:bg-accent-hover transition-colors shadow-sm"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Mukesh_Kaushal_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-[#F4F4EF] bg-[#141816] border border-[#232926] hover:border-accent/40 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-accent" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
