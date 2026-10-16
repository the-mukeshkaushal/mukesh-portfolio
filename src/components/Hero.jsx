import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileDown, Terminal, Check, Copy, Sparkles, Code2 } from 'lucide-react';
import { FaReact, FaJs, FaGitAlt } from 'react-icons/fa6';
import { SiTailwindcss, SiRedux, SiVite } from 'react-icons/si';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const [copiedCode, setCopiedCode] = useState(false);

  const headlineWords = [
    { text: 'Building', accent: false },
    { text: 'digital', accent: false },
    { text: 'experiences', accent: false },
    { text: 'that', accent: false },
    { text: 'feel', accent: true },
    { text: 'different.', accent: true },
  ];

  const codeSnippet = `const developer = {
  name: "Mukesh Kaushal",
  role: "Frontend Developer & Software Engineer",
  core: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux"],
  focus: "Responsive Web Apps & Reusable Component Systems",
  status: "Available for Hire"
};`;

  const handleCopyCode = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(codeSnippet);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techIcons = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Vite', icon: SiVite, color: '#9353D3' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] pt-32 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-radial-vignette"
    >
      {/* Background Technical Grid and Floating Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7">
            {/* Top Status & Role Badges */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141816] border border-[#232926] text-[11px] font-mono tracking-widest text-[#9E9E96] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{personalInfo.hero.badge}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121614] border border-[#1E2421] text-[11px] font-mono text-[#9E9E96]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Staggered Animated Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-[#F4F4EF] leading-[1.08] mb-6 text-balance">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-2.5 sm:mr-3.5 pb-1">
                  <motion.span
                    className={`inline-block ${
                      word.accent
                        ? 'text-accent relative drop-shadow-[0_0_20px_rgba(198,255,77,0.25)]'
                        : 'text-[#F4F4EF]'
                    }`}
                    initial={prefersReduced ? false : { y: '115%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: prefersReduced ? 0 : 0.08 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Concise Introduction */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-base sm:text-lg text-[#9E9E96] leading-relaxed max-w-xl font-light mb-8 text-balance"
            >
              {personalInfo.hero.bio}
            </motion.p>

            {/* Functional Call To Actions */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3.5 mb-8"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-accent text-[#0B0D0C] hover:bg-accent-hover transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-lg shadow-accent/20"
              >
                <span>{personalInfo.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Mukesh_Kaushal_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-mono text-[#F4F4EF] bg-[#141816] border border-[#232926] hover:border-[#38423C] hover:bg-[#1A1F1D] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FileDown className="w-4 h-4 text-accent transition-colors" />
                <span>{personalInfo.hero.secondaryCta}</span>
              </a>
            </motion.div>

            {/* Quick Micro Credentials */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4 text-xs font-mono text-[#6F736E]"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>3 Featured Web Builds</span>
              </div>
              <span className="text-[#272E2B]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E9E96]" />
                <span>DSA Problem Solving</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Workbench Card */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Card Backlight */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-40 blur-xl pointer-events-none" />

            <div className="relative rounded-2xl bg-[#121514] border border-[#232926] shadow-2xl overflow-hidden">
              {/* Window Bar */}
              <div className="px-4 py-3 bg-[#151917] border-b border-[#212724] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 border border-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 border border-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 border border-[#10B981]" />
                  <span className="ml-2 font-mono text-[11px] text-[#6F736E] flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-accent" />
                    MukeshKaushal.tsx
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-md hover:bg-[#1C221F] text-[#6F736E] hover:text-accent transition-colors"
                  title="Copy developer snippet"
                  aria-label="Copy developer snippet"
                >
                  {copiedCode ? (
                    <Check className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Code Snippet Editor Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#9E9E96]">
                <div className="text-[#6F736E] mb-2">// Software Engineer &amp; Frontend Profile</div>
                <div className="text-[#6F736E]">
                  <span className="text-accent font-semibold">export const</span>{' '}
                  <span className="text-[#F4F4EF]">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#6F736E]">name:</span>{' '}
                  <span className="text-[#F4F4EF]">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#6F736E]">specialization:</span>{' '}
                  <span className="text-accent">"Frontend Architecture"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#6F736E]">primaryStack:</span> [
                  <span className="text-[#C6FF4D]">"React"</span>,{' '}
                  <span className="text-[#C6FF4D]">"JavaScript"</span>,{' '}
                  <span className="text-[#C6FF4D]">"Tailwind"</span>,{' '}
                  <span className="text-[#C6FF4D]">"Redux"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[#6F736E]">methodology:</span>{' '}
                  <span className="text-[#F4F4EF]">"Reusable Components &amp; Clean State"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#6F736E]">openTo:</span>{' '}
                  <span className="text-emerald-400">"Internships &amp; Junior SE Roles"</span>
                </div>
                <div className="text-[#6F736E]">&#125;;</div>
              </div>

              {/* Status Footer Inside Card */}
              <div className="px-5 py-3 bg-[#0E1110] border-t border-[#1E2321] flex items-center justify-between text-[11px] font-mono text-[#6F736E]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>React 19 &amp; Modern Web Ready</span>
                </div>
                <span className="text-accent">TypeScript / JS</span>
              </div>
            </div>

            {/* Floating Micro-Badge 1 */}
            <motion.div
              animate={prefersReduced ? false : { y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -bottom-4 -left-6 items-center gap-2 px-3 py-2 rounded-xl bg-[#141816]/95 border border-[#262E2A] text-xs font-mono text-[#F4F4EF] shadow-xl backdrop-blur-md"
            >
              <div className="w-5 h-5 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                <Code2 className="w-3 h-3" />
              </div>
              <span>Modular Components</span>
            </motion.div>

            {/* Floating Micro-Badge 2 */}
            <motion.div
              animate={prefersReduced ? false : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3 py-2 rounded-xl bg-[#141816]/95 border border-[#262E2A] text-xs font-mono text-[#F4F4EF] shadow-xl backdrop-blur-md"
            >
              <div className="w-5 h-5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-3 h-3" />
              </div>
              <span>Clean State Management</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Technology Ticker Marquee with Icons */}
      <div className="relative w-full border-t border-[#1E2321] bg-[#0A0C0B]/90 mt-12 py-4 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#6F736E]">
          <span>Core Technologies &amp; Tooling</span>
          <span className="hidden sm:inline">Active Production Toolkit</span>
        </div>

        {/* Endless Marquee Row */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] py-1">
            {[...techIcons, ...techIcons, ...techIcons].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#121514] border border-[#232926] text-xs font-mono text-[#F4F4EF] hover:border-accent/40 transition-colors cursor-default"
                >
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                  <span className="font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
