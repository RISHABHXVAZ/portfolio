import React from 'react';
import { GraduationCap, Award, MapPin, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
              About
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
              Background & Focus
            </h2>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Academic standing, core focus areas, and technical foundation from coursework and project engineering.
            </p>
          </div>

          {/* Content Block */}
          <div className="lg:col-span-8 space-y-6">
            <div className="prose prose-neutral max-w-none text-neutral-700 text-base leading-relaxed">
              <p>
                I am currently pursuing a <strong className="font-semibold text-neutral-900">Bachelor of Technology in Computer Science and Engineering</strong> at the{' '}
                <strong className="font-semibold text-neutral-900">Motilal Nehru National Institute of Technology Allahabad (MNNIT Allahabad)</strong> in Prayagraj, maintaining a <strong className="font-semibold text-neutral-900">CPI of 8.91/10</strong>.
              </p>
              <p>
                My technical work focuses on building full-stack applications using <strong className="font-semibold text-neutral-900">Java</strong>, <strong className="font-semibold text-neutral-900">Spring Boot</strong>, <strong className="font-semibold text-neutral-900">Spring Security</strong>, and <strong className="font-semibold text-neutral-900">React.js</strong>, coupled with relational databases (<strong className="font-semibold text-neutral-900">PostgreSQL</strong>, <strong className="font-semibold text-neutral-900">MySQL</strong>) and developer tooling including <strong className="font-semibold text-neutral-900">Docker</strong> and <strong className="font-semibold text-neutral-900">Git</strong>.
              </p>
            </div>

            {/* Quick Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-neutral-800 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-500">Program</div>
                  <div className="text-sm font-semibold text-neutral-900 mt-0.5">B.Tech in CSE</div>
                  <div className="text-xs text-neutral-600">MNNIT Allahabad (2024 – Present)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-neutral-800 shadow-sm">
                  <Award className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-500">Academic Standing</div>
                  <div className="text-sm font-semibold text-neutral-900 mt-0.5">8.91 / 10 CPI</div>
                  <div className="text-xs text-neutral-600">Computer Science & Engineering</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-neutral-800 shadow-sm">
                  <Code2 className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-500">Core Stack</div>
                  <div className="text-sm font-semibold text-neutral-900 mt-0.5">Java, Spring Boot, React</div>
                  <div className="text-xs text-neutral-600">PostgreSQL, Docker, Spring Security</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-neutral-800 shadow-sm">
                  <MapPin className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-500">Location</div>
                  <div className="text-sm font-semibold text-neutral-900 mt-0.5">Prayagraj, Uttar Pradesh</div>
                  <div className="text-xs text-neutral-600">MNNIT Campus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
