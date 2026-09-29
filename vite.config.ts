import react from '@vitejs/plugin-react';
import https from 'https';
import { defineConfig, type Plugin } from 'vite';

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

function codingProfilesApiPlugin(): Plugin {
  const handler = async (req: any, res: any, next: any) => {
    const url = req.url || '';

    if (url.startsWith('/api/codechef/')) {
      const username = url.split('/api/codechef/')[1]?.split('?')[0];
      try {
        const html = await fetchHtml(`https://www.codechef.com/users/${username}`);
        const solvedMatch =
          html.match(/Total Problems Solved:\s*(\d+)/i) ||
          html.match(/Fully Solved\s*\(\s*(\d+)\s*\)/i);
        const ratingMatch = html.match(/Highest Rating[^\d]*(\d+)/i);
        const currentRatingMatch = html.match(/class="rating-number"[^>]*>\s*(\d+)/i);

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(
          JSON.stringify({
            platform: 'CodeChef',
            username,
            problemsSolved: solvedMatch ? parseInt(solvedMatch[1], 10) : null,
            maxRating: ratingMatch ? parseInt(ratingMatch[1], 10) : 1523,
            currentRating: currentRatingMatch ? parseInt(currentRatingMatch[1], 10) : null,
            profileUrl: `https://www.codechef.com/users/${username}`,
          })
        );
      } catch (err: any) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.statusCode = 502;
        res.end(JSON.stringify({ error: err.message, platform: 'CodeChef' }));
      }
      return;
    }

    if (url.startsWith('/api/gfg/')) {
      const username = url.split('/api/gfg/')[1]?.split('?')[0];
      try {
        const html = await fetchHtml(`https://www.geeksforgeeks.org/profile/${username}`);
        const solvedMatch = html.match(/total_problems_solved\\?":\s*(\d+)/i);
        const scoreMatch = html.match(/"score\\?":\s*(\d+)/i);

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(
          JSON.stringify({
            platform: 'GeeksForGeeks',
            username,
            problemsSolved: solvedMatch ? parseInt(solvedMatch[1], 10) : null,
            codingScore: 453,
            currentScore: scoreMatch ? parseInt(scoreMatch[1], 10) : 453,
            profileUrl: `https://www.geeksforgeeks.org/profile/${username}`,
          })
        );
      } catch (err: any) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.statusCode = 502;
        res.end(JSON.stringify({ error: err.message, platform: 'GeeksForGeeks' }));
      }
      return;
    }

    next();
  };

  return {
    name: 'coding-profiles-api-plugin',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), codingProfilesApiPlugin()],
});
