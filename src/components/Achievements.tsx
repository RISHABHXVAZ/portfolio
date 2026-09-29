import React from 'react';
import { achievements } from '../data/achievements';
import { Trophy, Target, Award, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (category: string, id: string) => {
    if (id === 'jee-mains') return <Sparkles className="w-5 h-5 text-neutral-800" />;
    if (id === 'problems-solved') return <Target className="w-5 h-5 text-neutral-800" />;
    if (category === 'Competitive Programming') return <Trophy className="w-5 h-5 text-neutral-800" />;
    return <Award className="w-5 h-5 text-neutral-800" />;
  };

  return (
    <section className="py-20 bg-[#fafaf9] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
            Verified Achievements
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Contest standings, problem-solving volume, and national competitive exam percentiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200/60">
                    {getAchievementIcon(item.category, item.id)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 bg-stone-50 px-2 py-0.5 rounded border border-stone-200/60">
                    {item.category}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-mono">
                  {item.metric}
                </div>
                <div className="text-xs font-semibold text-neutral-800 mt-1">
                  {item.context}
                </div>
              </div>

              <p className="mt-4 pt-4 border-t border-stone-100 text-xs text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
