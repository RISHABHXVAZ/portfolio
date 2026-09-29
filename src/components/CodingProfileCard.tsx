import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';

export interface CodingProfileCardProps {
  platform: 'LeetCode' | 'CodeChef' | 'GeeksForGeeks';
  username: string;
  profileUrl: string;
  ratingValue: number | string;
  ratingLabel: string;
  problemsSolved: number | null;
  loading: boolean;
  bonusDetails?: { label: string; value: string | number }[];
  isLive?: boolean;
}

export const CodingProfileCard: React.FC<CodingProfileCardProps> = ({
  platform,
  username,
  profileUrl,
  ratingValue,
  ratingLabel,
  problemsSolved,
  loading,
  bonusDetails,
  isLive,
}) => {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-stone-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header: Platform & Handle */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                {platform}
              </h3>
              {isLive && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              )}
            </div>
            <p className="text-xs font-mono text-neutral-500 mt-0.5">
              @{username}
            </p>
          </div>

          <div className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-neutral-600">
            <Terminal className="w-4 h-4" />
          </div>
        </div>

        {/* Dual Metric Area: Rating/Score + Dynamically Fetched Problems Solved */}
        <div className="grid grid-cols-2 gap-3 py-4 px-5 rounded-xl bg-stone-50 border border-stone-200/80 mb-6">
          {/* Primary Verified Metric */}
          <div className="border-r border-stone-200/80 pr-2">
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 font-mono">
              {ratingValue}
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-neutral-600 mt-1 font-mono">
              {ratingLabel}
            </div>
          </div>

          {/* Dynamically Fetched Problems Solved */}
          <div className="pl-2">
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 font-mono">
              {loading ? (
                <span className="text-neutral-400 font-normal tracking-widest animate-pulse">•••</span>
              ) : problemsSolved !== null ? (
                problemsSolved
              ) : (
                <span className="text-neutral-400 font-normal">—</span>
              )}
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-neutral-600 mt-1 font-mono">
              PROBLEMS SOLVED
            </div>
          </div>
        </div>

        {/* Secondary Bonus Metrics (Easy/Med/Hard, Current Rating, etc.) */}
        {bonusDetails && bonusDetails.length > 0 && (
          <div
            className={`grid gap-2 mb-6 ${
              bonusDetails.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'
            }`}
          >
            {bonusDetails.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-stone-50/70 border border-stone-200/60">
                <div className="text-xs font-semibold text-neutral-900 font-mono">
                  {m.value}
                </div>
                <div className="text-[11px] text-neutral-600 truncate mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Button: View Profile */}
      <div className="pt-4 border-t border-stone-100">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-white hover:bg-stone-50 text-neutral-900 border border-stone-200 text-xs font-medium transition-colors shadow-sm group"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
        </a>
      </div>
    </div>
  );
};
