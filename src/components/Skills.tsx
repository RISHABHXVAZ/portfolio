import React from 'react';
import { skillCategories } from '../data/skills';
import { Code2, Layers, Database, Wrench, BookOpen } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-neutral-700" />;
      case 'Frameworks & Libraries':
        return <Layers className="w-4 h-4 text-neutral-700" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-neutral-700" />;
      case 'Developer Tools':
        return <Wrench className="w-4 h-4 text-neutral-700" />;
      case 'Core Coursework':
        return <BookOpen className="w-4 h-4 text-neutral-700" />;
      default:
        return <Code2 className="w-4 h-4 text-neutral-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#fafaf9] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
            Skills & Coursework
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Languages, frameworks, database systems, developer tooling, and foundational computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-stone-100 border border-stone-200/70">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-neutral-800 text-xs font-medium border border-stone-200/80 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
