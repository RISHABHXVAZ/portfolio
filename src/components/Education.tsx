import React from 'react';
import { educationList } from '../data/education';
import { Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
            Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
            Education
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Formal educational background and academic evaluation records.
          </p>
        </div>

        <div className="relative border-l-2 border-stone-200 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          {educationList.map((edu, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-neutral-900 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-7 rounded-2xl bg-stone-50/70 border border-stone-200/80 hover:bg-white hover:border-stone-300 hover:shadow-sm transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950 tracking-tight">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-medium text-neutral-800 mt-0.5">
                      {edu.degree}
                      {edu.field && (
                        <span className="text-neutral-600 font-normal">
                          {' '}• {edu.field}
                        </span>
                      )}
                    </div>
                    {edu.board && (
                      <div className="text-xs text-neutral-500 mt-1 font-mono">
                        {edu.board}
                      </div>
                    )}
                  </div>

                  {/* Score pill */}
                  <div className="shrink-0 sm:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-xs font-mono font-semibold text-neutral-900 shadow-sm">
                      <span className="text-neutral-500 font-normal">{edu.scoreLabel}:</span>
                      <span>{edu.scoreValue}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 pt-3 border-t border-stone-200/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                  {edu.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
