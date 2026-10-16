import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const subjectPresets = [
    'Frontend Developer Internship',
    'Junior Software Engineer Role',
    'Project Collaboration',
    'General Inquiry',
  ];

  const copyEmail = async () => {
    const emailText = personalInfo.email;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailText);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = emailText;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.top = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (error) {
      console.error('Unable to copy email address:', error);
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    const composedSubject = subject.trim() || 'Software Engineering / Frontend Opportunity';
    const composedMessage =
      message.trim() ||
      `Hi Mukesh,\n\nI reviewed your portfolio and would like to discuss an opportunity.\n\nBest regards,`;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      composedSubject
    )}&body=${encodeURIComponent(composedMessage)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[#1E2321] relative bg-radial-vignette overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141816] border border-[#232926] text-[11px] font-mono tracking-widest text-[#9E9E96] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>05 / Contact &amp; Connect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#F4F4EF] tracking-tight mb-4 text-balance">
              Let's build something remarkable.
            </h2>
            <p className="text-base sm:text-lg text-[#9E9E96] max-w-xl mx-auto font-light leading-relaxed">
              Open to software engineering internships, junior frontend roles, and technical collaborations. Reach out directly below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quick Contact & Social Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct Email Card with One-Click Copy */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#121514] border border-[#232926] rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171C19] border border-[#262E2A] flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-[#F4F4EF]">
                      Direct Email
                    </h3>
                    <p className="font-mono text-xs text-[#6F736E]">
                      Fastest communication channel
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0E1110] border border-[#212825] flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-[#F4F4EF] truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#181D1A] hover:bg-[#202723] text-[#9E9E96] hover:text-accent transition-colors flex-shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-accent text-[#0B0D0C] hover:bg-accent-hover transition-colors shadow-md shadow-accent/15"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Default Mail App</span>
                </a>
              </motion.div>

              {/* Verified Professional Profiles */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#121514] border border-[#232926] rounded-2xl p-6 space-y-3 shadow-xl"
              >
                <h3 className="font-display font-semibold text-xs text-[#6F736E] uppercase tracking-wider mb-2">
                  Professional Profiles
                </h3>

                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#151917] border border-[#212724] hover:border-accent/40 text-[#F4F4EF] hover:bg-[#1A201D] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                      <span className="text-xs font-medium">LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6F736E] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )}

                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#151917] border border-[#212724] hover:border-accent/40 text-[#F4F4EF] hover:bg-[#1A201D] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub className="w-4 h-4 text-[#F4F4EF]" />
                      <span className="text-xs font-medium">GitHub Repositories</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6F736E] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Transparent Direct Email Composer */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-7 bg-[#121514] border border-[#232926] rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <h3 className="font-display font-semibold text-base text-[#F4F4EF]">
                    Draft &amp; Launch Email
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#6F736E]">
                  Opens your email client directly
                </span>
              </div>

              {/* Subject Presets */}
              <div className="mb-4">
                <label className="block text-[11px] font-mono text-[#6F736E] mb-2 uppercase tracking-wider">
                  Quick Subject Presets:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {subjectPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSubject(preset)}
                      className="px-2.5 py-1 rounded-lg bg-[#161B18] border border-[#232926] hover:border-accent/40 text-[11px] font-mono text-[#9E9E96] hover:text-[#F4F4EF] transition-colors"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-[#9E9E96] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E1110] border border-[#232926] text-xs text-[#F4F4EF] placeholder-[#5A5F5A] focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#9E9E96] mb-1.5"
                  >
                    Message Draft
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Mukesh, I reviewed your portfolio and would like to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E1110] border border-[#232926] text-xs text-[#F4F4EF] placeholder-[#5A5F5A] focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#6F736E]">
                    ✓ Completely transparent: Launches native mail client directly.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-accent text-[#0B0D0C] hover:bg-accent-hover transition-colors active:scale-95 shadow-md shadow-accent/15"
                  >
                    <span>Launch Email</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
