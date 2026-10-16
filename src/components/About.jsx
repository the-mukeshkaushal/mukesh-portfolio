import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, Layout, Cpu, FileDown } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolio';

export default function About() {
  const prefersReduced = useReducedMotion();

  const engineeringPillars = [
    {
      icon: Layout,
      title: 'Reusable React Components',
      description:
        'Crafting composable, modular UI components with clean prop contracts, clear separation of concerns, and scalable design tokens.',
    },
    {
      icon: Layers,
      title: 'Responsive & Fluid Layouts',
      description:
        'Designing seamless cross-device experiences using modern Tailwind CSS and mobile-first principles with strict attention to typography and spacing.',
    },
    {
      icon: Cpu,
      title: 'Strong CS Fundamentals',
      description:
        'Grounding development in computer science principles with continuous algorithmic problem solving in Java and C++ data structures.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#1E2321] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141816] border border-[#232926] text-[11px] font-mono tracking-widest text-[#9E9E96] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>01 / Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F4F4EF] tracking-tight">
            {aboutData.title}
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E96] max-w-xl mt-2 font-light">
            Building intuitive user interfaces with an engineering mindset, component discipline, and genuine attention to detail.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-[#9E9E96] leading-relaxed text-base sm:text-lg font-light"
            >
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-balance">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* 3 Core Engineering Pillars */}
            <div className="pt-2 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#6F736E]">
                Core Competencies &amp; Architectural Focus:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {engineeringPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-[#121514] border border-[#232926] hover:border-accent/40 transition-colors flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-[#161B18] border border-[#262E2A] group-hover:border-accent/50 flex items-center justify-center text-accent mb-3 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-semibold text-sm text-[#F4F4EF] mb-1.5 group-hover:text-accent transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#9E9E96] leading-relaxed font-light">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Developer Specifications Card */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#121514] border border-[#232926] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E2321]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#171C19] border border-[#262E2A] flex items-center justify-center text-accent font-mono font-bold text-xs">
                  MK
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-[#F4F4EF]">
                    Developer Profile
                  </h3>
                  <p className="font-mono text-[10px] text-[#6F736E]">
                    specification.manifest
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-[10px] font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>READY</span>
              </div>
            </div>

            {/* Facts Grid */}
            <div className="divide-y divide-[#181D1A]">
              {aboutData.facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                >
                  <span className="font-mono text-[#6F736E]">{fact.label}</span>
                  <span className="font-medium text-[#F4F4EF] sm:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer with actions */}
            <div className="mt-6 pt-4 border-t border-[#1E2321] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#6F736E]">
                <span>Status:</span>
                <span className="text-emerald-400 font-medium">Open to opportunities</span>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Mukesh_Kaushal_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-accent bg-accent/10 hover:bg-accent/20 border border-accent/30 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
