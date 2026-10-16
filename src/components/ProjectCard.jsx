import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ExternalLink,
  Headphones,
  ShieldCheck,
  Dumbbell,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  Maximize2,
  Calendar,
  Flame,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectCard({ project, index }) {
  const prefersReduced = useReducedMotion();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [gymTier, setGymTier] = useState('pro');

  const renderPreview = () => {
    switch (project.previewType) {
      case 'audiobook':
        return (
          <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#121614] via-[#141A17] to-[#18201C] select-none">
            {/* Audio Header */}
            <div className="flex items-center justify-between text-xs text-[#6F736E] font-mono border-b border-[#212825] pb-3">
              <span className="flex items-center gap-2 text-accent font-medium">
                <Headphones className="w-4 h-4" />
                AudioVerse Player
              </span>
              <div className="flex items-center gap-1.5">
                {/* Animated Equalizer Wave */}
                <div className="flex items-end gap-0.5 h-3.5">
                  {[40, 90, 60, 100, 50, 80].map((h, i) => (
                    <span
                      key={i}
                      className="w-0.5 bg-accent rounded-full transition-all duration-300"
                      style={{
                        height: isPlayingAudio ? `${h}%` : '20%',
                        opacity: isPlayingAudio ? 1 : 0.4,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-[#9E9E96]">320 kbps</span>
              </div>
            </div>

            {/* Audio Track Main Card */}
            <div className="my-3 flex items-center gap-4 bg-[#0E1110] p-4 rounded-xl border border-[#232A26] shadow-md">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E2521] to-[#151A18] border border-accent/40 flex items-center justify-center text-accent shadow-inner flex-shrink-0">
                <Headphones className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[#F4F4EF] truncate">
                    The Pragmatic Programmer
                  </h4>
                  <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20 flex-shrink-0">
                    Ch. 4
                  </span>
                </div>
                <p className="text-xs text-[#9E9E96] truncate">Andy Hunt &amp; Dave Thomas</p>

                {/* Simulated Progress bar */}
                <div className="mt-2.5 w-full bg-[#1A201D] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-accent h-full rounded-full transition-all duration-500"
                    style={{ width: isPlayingAudio ? '65%' : '38%' }}
                  />
                </div>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#9E9E96]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-8 h-8 rounded-full bg-accent text-[#0B0D0C] hover:bg-accent-hover flex items-center justify-center font-bold shadow-md shadow-accent/20 transition-transform active:scale-90"
                  aria-label={isPlayingAudio ? 'Pause preview' : 'Play preview'}
                  title={isPlayingAudio ? 'Pause' : 'Play'}
                >
                  {isPlayingAudio ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </button>
                <span className="text-xs">{isPlayingAudio ? '12:45 / 45:10' : '04:18 / 45:10'}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#6F736E]">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Stereo Audio API</span>
              </div>
            </div>
          </div>
        );

      case 'screening':
        return (
          <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#121614] via-[#141917] to-[#161F1B] select-none">
            {/* Screening Header */}
            <div className="flex items-center justify-between text-xs text-[#6F736E] font-mono border-b border-[#212825] pb-3">
              <span className="flex items-center gap-2 text-accent font-medium">
                <ShieldCheck className="w-4 h-4" />
                Identity Verification System
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE WORKFLOW
              </span>
            </div>

            {/* Verification Checklist */}
            <div className="my-2 space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0E1110] border border-[#212825] text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[#F4F4EF] font-mono">Document Format Check</span>
                </div>
                <span className="text-accent font-mono text-[10px] bg-accent/10 px-2 py-0.5 rounded">
                  VALIDATED
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0E1110] border border-[#212825] text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[#F4F4EF] font-mono">Field Consistency Validation</span>
                </div>
                <span className="text-accent font-mono text-[10px] bg-accent/10 px-2 py-0.5 rounded">
                  MATCHED
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0E1110] border border-[#212825] text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[#F4F4EF] font-mono">Fraud Risk Evaluation</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LOW RISK (0.02)
                </span>
              </div>
            </div>

            {/* Screening Footer */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#6F736E] border-t border-[#1C211E]">
              <span>Form State Handling</span>
              <span className="text-accent">Instant Visual Feedback</span>
            </div>
          </div>
        );

      case 'fitness':
      default:
        return (
          <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#121614] via-[#141A17] to-[#18221D] select-none">
            {/* Fitness Header */}
            <div className="flex items-center justify-between text-xs text-[#6F736E] font-mono border-b border-[#212825] pb-3">
              <span className="flex items-center gap-2 text-accent font-medium">
                <Dumbbell className="w-4 h-4" />
                Fitness Studio Platform
              </span>
              <span className="text-[#9E9E96] font-mono text-[11px]">Modern CSS Grid</span>
            </div>

            {/* Interactive Tier Comparison Preview */}
            <div className="my-2 grid grid-cols-2 gap-3">
              <div
                onClick={() => setGymTier('starter')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  gymTier === 'starter'
                    ? 'bg-[#151C18] border-accent/50 shadow-md'
                    : 'bg-[#0E1110] border-[#212825] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-[#6F736E] uppercase">Core</span>
                  <Flame className="w-3 h-3 text-[#9E9E96]" />
                </div>
                <div className="text-sm font-bold text-[#F4F4EF]">Starter Pass</div>
                <div className="text-xs text-accent mt-1">Gym &amp; Cardio</div>
              </div>

              <div
                onClick={() => setGymTier('pro')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  gymTier === 'pro'
                    ? 'bg-[#151C18] border-accent shadow-md'
                    : 'bg-[#0E1110] border-[#212825] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-accent uppercase font-bold">Popular</span>
                  <Flame className="w-3 h-3 text-accent" />
                </div>
                <div className="text-sm font-bold text-[#F4F4EF]">Pro Athlete</div>
                <div className="text-xs text-accent mt-1">All-Access &amp; Trainer</div>
              </div>
            </div>

            {/* Timetable / Feature tags */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#6F736E] border-t border-[#1C211E]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-accent" />
                Responsive Navigation
              </span>
              <span className="text-accent">High-Energy UI</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#121514] border border-[#232926] hover:border-[#38443E] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col lg:flex-row shadow-xl hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Left Column: Simulated Browser Chrome & Visual Interface */}
      <div className="lg:w-1/2 p-5 sm:p-7 flex flex-col justify-center bg-[#0E1110]/60 border-b lg:border-b-0 lg:border-r border-[#1E2321]">
        <div className="rounded-2xl border border-[#232926] overflow-hidden bg-[#121514] shadow-lg group-hover:border-[#333C37] transition-all">
          {/* Browser Top Window Bar */}
          <div className="px-4 py-2.5 bg-[#171B19] border-b border-[#212724] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
            </div>

            {/* Clickable URL Pill in address bar */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-0.5 rounded-md bg-[#0F1211] border border-[#232926] hover:border-accent/40 text-[11px] font-mono text-[#9E9E96] hover:text-[#F4F4EF] truncate max-w-[220px] transition-colors"
              title={`Visit ${project.title}`}
            >
              {project.liveUrl.replace('https://', '')}
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6F736E] hover:text-accent transition-colors"
              aria-label={`Open ${project.title} in new tab`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Screen Preview */}
          <div className="h-60 sm:h-72 overflow-hidden relative">
            <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-[1.01]">
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Project Description & Actions */}
      <div className="lg:w-1/2 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
        <div>
          {/* Meta header */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-accent">
                {project.number}
              </span>
              <span className="text-[#3A423D] font-mono">•</span>
              <span className="font-mono text-xs text-[#9E9E96]">
                {project.category}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Deployment
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F4F4EF] group-hover:text-accent transition-colors mb-3">
            {project.title}
          </h3>

          {/* Detailed description */}
          <p className="text-sm sm:text-base text-[#9E9E96] leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          {/* Technical highlights */}
          {project.highlights && (
            <div className="mb-6 space-y-2.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F736E] block">
                Key Technical Highlights:
              </span>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-xs text-[#9E9E96] flex items-start gap-2.5 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#161B18] text-[#9E9E96] border border-[#232926] hover:border-accent/40 hover:text-[#F4F4EF] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#1E2321]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-accent text-[#0B0D0C] hover:bg-accent-hover transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-md shadow-accent/15"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono text-[#F4F4EF] bg-[#161B18] border border-[#232926] hover:border-[#38423C] hover:bg-[#1C221F] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaGithub className="w-3.5 h-3.5 text-[#9E9E96]" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
