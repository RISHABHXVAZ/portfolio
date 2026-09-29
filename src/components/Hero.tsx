import React from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle minimalist background grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#18181b 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-600 font-mono">
                Computer Science & Engineering
              </span>
            </div>

            {/* Large heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 mb-6 leading-[1.12]">
              Hi, I'm <span className="text-neutral-900">Rishabh Srivastava</span>.
            </h1>

            {/* Supporting text */}
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mb-8">
              Computer Science and Engineering undergraduate at MNNIT Allahabad, interested in building practical full-stack applications and solving problems with Java.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all shadow-sm hover:shadow"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="https://github.com/RISHABHXVAZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-stone-100 text-neutral-800 border border-stone-200 text-sm font-medium transition-all shadow-sm"
              >
                <GitHubIcon className="w-4 h-4 text-neutral-700" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/rishabh-srivastava-45a739314/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center justify-center p-3 rounded-lg bg-white hover:bg-stone-100 text-neutral-700 border border-stone-200 transition-all shadow-sm"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Subtle credential highlight badge */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-900">MNNIT Allahabad</span>
                <span>•</span>
                <span>B.Tech CSE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-900">CPI 8.91</span>
                <span>•</span>
                <span>Prayagraj</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Subtle architectural frame */}
              <div className="relative rounded-2xl bg-white p-3 border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src="/rishabh.jpg"
                    alt="Rishabh Srivastava"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle vignette/border protection */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
                </div>

                {/* Subtitle tag beneath photo */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Rishabh Srivastava</span>
                  <span className="text-neutral-600">CSE '28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
