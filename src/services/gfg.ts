import { getCached, setCached } from './cache';

export interface GFGProfileData {
  rating: number;
  ratingLabel: string;
  problemsSolved: number | null;
  profileUrl: string;
  bonusDetails?: { label: string; value: string | number }[];
}

const USERNAME = 'srivastavart23g';
const PROFILE_URL = `https://www.geeksforgeeks.org/profile/${USERNAME}`;
const VERIFIED_CODING_SCORE = 453;

export async function fetchGFGProfile(): Promise<GFGProfileData> {
  const cacheKey = `gfg_${USERNAME}`;
  const cached = getCached<GFGProfileData>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const res = await fetch(`/api/gfg/${USERNAME}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`GFG proxy returned ${res.status}`);
    }

    const data = await res.json();
    const solved = typeof data.problemsSolved === 'number' ? data.problemsSolved : null;

    const bonusDetails: { label: string; value: string | number }[] = [];
    if (typeof data.currentScore === 'number' && data.currentScore > VERIFIED_CODING_SCORE) {
      bonusDetails.push({ label: 'Current Score', value: data.currentScore });
    }

    const result: GFGProfileData = {
      rating: VERIFIED_CODING_SCORE,
      ratingLabel: 'CODING SCORE',
      problemsSolved: solved,
      profileUrl: PROFILE_URL,
      bonusDetails: bonusDetails.length > 0 ? bonusDetails : undefined,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    console.warn('Failed to fetch dynamic GFG data, falling back gracefully:', error);
    return {
      rating: VERIFIED_CODING_SCORE,
      ratingLabel: 'CODING SCORE',
      problemsSolved: null, // Gracefully renders "—"
      profileUrl: PROFILE_URL,
    };
  }
}
