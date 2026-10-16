import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-[#1E2321] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141816] border border-[#232926] text-[11px] font-mono tracking-widest text-[#9E9E96] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>03 / Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F4F4EF] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#9E9E96] max-w-xl mt-2 font-light">
              Real web applications demonstrating component modularity, state management, responsive layout engineering, and user-centered design.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141816] border border-[#232926] text-xs font-mono text-[#9E9E96]">
            <FolderGit2 className="w-4 h-4 text-accent" />
            <span>3 Active Implementations</span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
