import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E2321] bg-[#090B0A] py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-[#141816] border border-[#232926] flex items-center justify-center font-mono font-bold text-xs tracking-wider text-[#F4F4EF] shadow-sm">
            <span className="text-accent">M</span>
            <span>K</span>
          </div>
          <div>
            <p className="text-xs text-[#F4F4EF] font-semibold font-display tracking-tight">
              {personalInfo.name}
            </p>
            <p className="text-[11px] font-mono text-[#6F736E]">
              ©{CURRENT_YEAR} • Mukesh Kaushal . All rights reserved.
            </p>
          </div>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          {personalInfo.social.github && (
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121514] border border-[#232926] hover:border-accent/40 text-[#9E9E96] hover:text-[#F4F4EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}

          {personalInfo.social.linkedin && (
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121514] border border-[#232926] hover:border-accent/40 text-[#9E9E96] hover:text-[#F4F4EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-[#121514] border border-[#232926] hover:border-accent/40 text-[#9E9E96] hover:text-[#F4F4EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Email Contact"
            title="Email Mukesh"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#141816] border border-[#232926] hover:border-accent/40 text-[#9E9E96] hover:text-accent transition-colors ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Scroll to top of page"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
