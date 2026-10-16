import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layout, Cpu, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { FaReact, FaJs, FaJava, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNpm } from 'react-icons/fa6';
import { SiTailwindcss, SiRedux, SiVite, SiCplusplus } from 'react-icons/si';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const prefersReduced = useReducedMotion();

  const getSkillIcon = (name) => {
    switch (name) {
      case 'React.js':
        return <FaReact className="w-5 h-5 text-[#61DAFB]" />;
      case 'JavaScript (ES6+)':
        return <FaJs className="w-5 h-5 text-[#F7DF1E]" />;
      case 'Tailwind CSS':
        return <SiTailwindcss className="w-5 h-5 text-[#38BDF8]" />;
      case 'HTML5':
        return <FaHtml5 className="w-5 h-5 text-[#E34F26]" />;
      case 'CSS3':
        return <FaCss3Alt className="w-5 h-5 text-[#1572B6]" />;
      case 'Redux / Redux Toolkit':
        return <SiRedux className="w-5 h-5 text-[#764ABC]" />;
      case 'Vite':
        return <SiVite className="w-5 h-5 text-[#9353D3]" />;
      case 'Git':
        return <FaGitAlt className="w-5 h-5 text-[#F05032]" />;
      case 'GitHub':
        return <FaGithub className="w-5 h-5 text-[#F4F4EF]" />;
      case 'npm':
        return <FaNpm className="w-5 h-5 text-[#CB3837]" />;
      case 'Java':
        return <FaJava className="w-5 h-5 text-[#ED8B00]" />;
      case 'C++':
        return <SiCplusplus className="w-5 h-5 text-[#00599C]" />;
      default:
        return <Terminal className="w-5 h-5 text-accent" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-4 h-4 text-accent" />;
      case 'State Management & Tools':
        return <Wrench className="w-4 h-4 text-accent" />;
      case 'Programming':
        return <Cpu className="w-4 h-4 text-accent" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent" />;
    }
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredGroups =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#1E2321] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141816] border border-[#232926] text-[11px] font-mono tracking-widest text-[#9E9E96] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>02 / Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F4F4EF] tracking-tight">
              Tools &amp; Technologies
            </h2>
            <p className="text-sm sm:text-base text-[#9E9E96] max-w-xl mt-2 font-light">
              Technologies and languages I actively engineer with. Grouped by architectural domain without artificial proficiency percentages.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'text-[#0B0D0C] font-semibold'
                      : 'text-[#9E9E96] hover:text-[#F4F4EF] bg-[#141816] border border-[#232926] hover:border-[#38423C]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-accent rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-[#121514] border border-[#232926] hover:border-[#333C36] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#171C19] border border-[#262E2A] group-hover:border-accent/40 transition-colors">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-[#F4F4EF]">
                      {group.category}
                    </h3>
                    <p className="text-[11px] font-mono text-[#6F736E]">
                      {group.skills.length} core competencies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#9E9E96] mb-5 leading-relaxed font-light">
                  {group.description}
                </p>

                {/* Skill Items */}
                <div className="flex flex-col gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#151917] border border-[#212724] hover:border-[#2E3A34] hover:bg-[#19201D] transition-all flex items-center justify-between group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#0E1110] border border-[#1E2321] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-xs font-medium text-[#F4F4EF]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8E928E] px-2 py-0.5 rounded bg-[#0E1110] border border-[#1E2321]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-3.5 border-t border-[#1C211E] flex items-center justify-between text-[11px] font-mono text-[#6F736E]">
                <span>Continuous Practice</span>
                <span className="text-accent flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0E1110] border border-[#212825] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#9E9E96]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Philosophy: Solid fundamentals, readable code, and responsive design over fleeting trends.</span>
          </div>
          <span className="text-accent">Mukesh Kaushal Toolkit</span>
        </div>
      </div>
    </section>
  );
}
