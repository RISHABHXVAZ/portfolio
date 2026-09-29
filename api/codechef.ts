import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

function fetchHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
        timeout: 10000,
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(fetchHtml(res.headers.location));
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      }
    );
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const username = (req.query.username as string) || 'rishabh2814';
  try {
    const html = await fetchHtml(`https://www.codechef.com/users/${username}`);
    const solvedMatch =
      html.match(/Total Problems Solved:\s*(\d+)/i) ||
      html.match(/Fully Solved\s*\(\s*(\d+)\s*\)/i);
    const ratingMatch = html.match(/Highest Rating[^\d]*(\d+)/i);
    const currentRatingMatch = html.match(/class="rating-number"[^>]*>\s*(\d+)/i);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({
      platform: 'CodeChef',
      username,
      problemsSolved: solvedMatch ? parseInt(solvedMatch[1], 10) : null,
      maxRating: ratingMatch ? parseInt(ratingMatch[1], 10) : 1523,
      currentRating: currentRatingMatch ? parseInt(currentRatingMatch[1], 10) : null,
      profileUrl: `https://www.codechef.com/users/${username}`,
    });
  } catch (err: any) {
    return res.status(502).json({ error: err.message, platform: 'CodeChef' });
  }
}
