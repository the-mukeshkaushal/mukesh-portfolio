import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';
import { learningTimeline } from '../data/portfolio';

export default function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="learning" className="py-24 sm:py-32 border-t border-[#1E2321] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141816] border border-[#232926] text-[11px] font-mono tracking-widest text-[#9E9E96] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>04 / Technical Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F4F4EF] tracking-tight">
              Engineering Trajectory
            </h2>
            <p className="text-sm sm:text-base text-[#9E9E96] max-w-xl mt-2 font-light">
              An honest, structured record of active technical exploration, algorithmic problem-solving foundations, and long-term full-stack engineering goals.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141816] border border-[#232926] text-xs font-mono text-accent">
            <Compass className="w-4 h-4" />
            <span>Continuous Learning Track</span>
          </div>
        </div>

        {/* Structured Timeline Cards */}
        <div className="relative border-l border-[#222825] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {learningTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={prefersReduced ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.14 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-[#0B0D0C] border-2 border-accent flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              </div>

              {/* Content Card */}
              <div className="bg-[#121514] border border-[#232926] group-hover:border-[#38423C] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {item.phase}
                    </span>
                    <span className="text-[#3A423D] font-mono">•</span>
                    <span className="text-[11px] font-mono text-[#9E9E96] px-2.5 py-0.5 rounded-md bg-[#161B18] border border-[#232926]">
                      {item.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#6F736E]">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F4F4EF] mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#9E9E96] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Sub-topics and technologies being explored */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1C211E]">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#151917] border border-[#212724] text-[#8E928E] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
