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
  const username = (req.query.username as string) || 'srivastavart23g';
  try {
    const html = await fetchHtml(`https://www.geeksforgeeks.org/profile/${username}`);
    const solvedMatch = html.match(/total_problems_solved\\?":\s*(\d+)/i);
    const scoreMatch = html.match(/"score\\?":\s*(\d+)/i);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({
      platform: 'GeeksForGeeks',
      username,
      problemsSolved: solvedMatch ? parseInt(solvedMatch[1], 10) : null,
      codingScore: 453,
      currentScore: scoreMatch ? parseInt(scoreMatch[1], 10) : 453,
      profileUrl: `https://www.geeksforgeeks.org/profile/${username}`,
    });
  } catch (err: any) {
    return res.status(502).json({ error: err.message, platform: 'GeeksForGeeks' });
  }
}
