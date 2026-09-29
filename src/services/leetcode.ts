import { getCached, setCached } from './cache';

export interface LeetCodeProfileData {
  rating: number;
  ratingLabel: string;
  problemsSolved: number | null;
  profileUrl: string;
  bonusDetails?: { label: string; value: string | number }[];
}

const USERNAME = 'RishabhxSrivastava';
const PROFILE_URL = `https://leetcode.com/u/${USERNAME}/`;
const VERIFIED_MAX_RATING = 1733;

export async function fetchLeetCodeProfile(): Promise<LeetCodeProfileData> {
  const cacheKey = `leetcode_${USERNAME}`;
  const cached = getCached<LeetCodeProfileData>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${USERNAME}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`LeetCode API returned ${res.status}`);
    }

    const data = await res.json();
    const solved = typeof data.totalSolved === 'number' ? data.totalSolved : null;

    const bonusDetails: { label: string; value: string | number }[] = [];
    if (typeof data.easySolved === 'number') {
      bonusDetails.push({ label: 'Easy', value: data.easySolved });
    }
    if (typeof data.mediumSolved === 'number') {
      bonusDetails.push({ label: 'Medium', value: data.mediumSolved });
    }
    if (typeof data.hardSolved === 'number') {
      bonusDetails.push({ label: 'Hard', value: data.hardSolved });
    }

    const result: LeetCodeProfileData = {
      rating: VERIFIED_MAX_RATING,
      ratingLabel: 'MAX RATING',
      problemsSolved: solved,
      profileUrl: PROFILE_URL,
      bonusDetails: bonusDetails.length > 0 ? bonusDetails : undefined,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    console.warn('Failed to fetch dynamic LeetCode data, falling back gracefully:', error);
    return {
      rating: VERIFIED_MAX_RATING,
      ratingLabel: 'MAX RATING',
      problemsSolved: null, // Gracefully renders "—"
      profileUrl: PROFILE_URL,
    };
  }
}
