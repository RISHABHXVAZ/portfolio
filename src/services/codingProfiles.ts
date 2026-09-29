export interface DynamicProfileMetrics {
  platform: 'LeetCode' | 'CodeChef' | 'GeeksForGeeks';
  primaryMetric: {
    label: string;
    value: string | number;
    isDynamic: boolean;
  };
  secondaryMetrics?: {
    label: string;
    value: string | number;
  }[];
}

export async function fetchLeetCodeData(username: string): Promise<Partial<DynamicProfileMetrics> | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) return null;
    const data = await res.json();

    const secondaryMetrics: { label: string; value: string | number }[] = [];
    if (typeof data.totalSolved === 'number') {
      secondaryMetrics.push({ label: 'Problems Solved', value: data.totalSolved });
    }
    if (typeof data.mediumSolved === 'number') {
      secondaryMetrics.push({ label: 'Medium Solved', value: data.mediumSolved });
    }
    if (typeof data.hardSolved === 'number') {
      secondaryMetrics.push({ label: 'Hard Solved', value: data.hardSolved });
    }

    return {
      platform: 'LeetCode',
      secondaryMetrics,
    };
  } catch {
    // Graceful fallback to verified resume values
    return null;
  }
}
