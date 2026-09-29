import { getCached, setCached } from './cache';

export interface CodeChefProfileData {
  rating: number;
  ratingLabel: string;
  problemsSolved: number | null;
  profileUrl: string;
  bonusDetails?: { label: string; value: string | number }[];
}

const USERNAME = 'rishabh2814';
const PROFILE_URL = `https://www.codechef.com/users/${USERNAME}`;
const VERIFIED_MAX_RATING = 1523;

export async function fetchCodeChefProfile(): Promise<CodeChefProfileData> {
  const cacheKey = `codechef_${USERNAME}`;
  const cached = getCached<CodeChefProfileData>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    // Try local / serverless proxy endpoint
    const res = await fetch(`/api/codechef/${USERNAME}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`CodeChef proxy returned ${res.status}`);
    }

    const data = await res.json();
    const solved = typeof data.problemsSolved === 'number' ? data.problemsSolved : null;

    const bonusDetails: { label: string; value: string | number }[] = [];
    if (typeof data.currentRating === 'number') {
      bonusDetails.push({ label: 'Current Rating', value: data.currentRating });
    }

    const result: CodeChefProfileData = {
      rating: VERIFIED_MAX_RATING,
      ratingLabel: 'MAX RATING',
      problemsSolved: solved,
      profileUrl: PROFILE_URL,
      bonusDetails: bonusDetails.length > 0 ? bonusDetails : undefined,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    console.warn('Failed to fetch dynamic CodeChef data, falling back gracefully:', error);
    return {
      rating: VERIFIED_MAX_RATING,
      ratingLabel: 'MAX RATING',
      problemsSolved: null, // Gracefully renders "—"
      profileUrl: PROFILE_URL,
    };
  }
}
