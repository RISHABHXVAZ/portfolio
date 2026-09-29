import React, { useEffect, useState } from 'react';
import { CodingProfileCard } from './CodingProfileCard';
import { fetchLeetCodeProfile, type LeetCodeProfileData } from '../services/leetcode';
import { fetchCodeChefProfile, type CodeChefProfileData } from '../services/codechef';
import { fetchGFGProfile, type GFGProfileData } from '../services/gfg';

interface PlatformCardState {
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

export const CodingProfiles: React.FC = () => {
  const [profiles, setProfiles] = useState<Record<string, PlatformCardState>>({
    leetcode: {
      platform: 'LeetCode',
      username: 'RishabhxSrivastava',
      profileUrl: 'https://leetcode.com/u/RishabhxSrivastava/',
      ratingValue: 1733,
      ratingLabel: 'MAX RATING',
      problemsSolved: null,
      loading: true,
    },
    codechef: {
      platform: 'CodeChef',
      username: 'rishabh2814',
      profileUrl: 'https://www.codechef.com/users/rishabh2814',
      ratingValue: 1523,
      ratingLabel: 'MAX RATING',
      problemsSolved: null,
      loading: true,
    },
    gfg: {
      platform: 'GeeksForGeeks',
      username: 'srivastavart23g',
      profileUrl: 'https://www.geeksforgeeks.org/profile/srivastavart23g',
      ratingValue: 453,
      ratingLabel: 'CODING SCORE',
      problemsSolved: null,
      loading: true,
    },
  });

  useEffect(() => {
    let isMounted = true;

    // 1. Fetch LeetCode
    fetchLeetCodeProfile()
      .then((data: LeetCodeProfileData) => {
        if (!isMounted) return;
        setProfiles((prev) => ({
          ...prev,
          leetcode: {
            ...prev.leetcode,
            ratingValue: data.rating,
            ratingLabel: data.ratingLabel,
            problemsSolved: data.problemsSolved,
            profileUrl: data.profileUrl,
            bonusDetails: data.bonusDetails,
            loading: false,
            isLive: data.problemsSolved !== null,
          },
        }));
      })
      .catch(() => {
        if (!isMounted) return;
        setProfiles((prev) => ({
          ...prev,
          leetcode: { ...prev.leetcode, loading: false, isLive: false },
        }));
      });

    // 2. Fetch CodeChef
    fetchCodeChefProfile()
      .then((data: CodeChefProfileData) => {
        if (!isMounted) return;
        setProfiles((prev) => ({
          ...prev,
          codechef: {
            ...prev.codechef,
            ratingValue: data.rating,
            ratingLabel: data.ratingLabel,
            problemsSolved: data.problemsSolved,
            profileUrl: data.profileUrl,
            bonusDetails: data.bonusDetails,
            loading: false,
            isLive: data.problemsSolved !== null,
          },
        }));
      })
      .catch(() => {
        if (!isMounted) return;
        setProfiles((prev) => ({
          ...prev,
          codechef: { ...prev.codechef, loading: false, isLive: false },
        }));
      });

    // 3. Fetch GeeksForGeeks
    fetchGFGProfile()
      .then((data: GFGProfileData) => {
        if (!isMounted) return;
        setProfiles((prev) => ({
          ...prev,
          gfg: {
            ...prev.gfg,
            ratingValue: data.rating,
            ratingLabel: data.ratingLabel,
            problemsSolved: data.problemsSolved,
            profileUrl: data.profileUrl,
            bonusDetails: data.bonusDetails,
            loading: false,
            isLive: data.problemsSolved !== null,
          },
        }));
      })
      .catch(() => {
        if (!isMounted) return;
        setProfiles((prev) => ({
          ...prev,
          gfg: { ...prev.gfg, loading: false, isLive: false },
        }));
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="coding" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
            Competitive Programming
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
            Coding Profiles & Ratings
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Public ratings, contest statistics, and problem-solving benchmarks across LeetCode, CodeChef, and GeeksforGeeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CodingProfileCard {...profiles.leetcode} />
          <CodingProfileCard {...profiles.codechef} />
          <CodingProfileCard {...profiles.gfg} />
        </div>
      </div>
    </section>
  );
};
