import type { GitHubRepo, GitHubStats } from '../types';

const GITHUB_USERNAME = 'RISHABHXVAZ';

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!userRes.ok) {
      return null;
    }

    const userData = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=6`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    let recentRepos: GitHubRepo[] = [];
    if (reposRes.ok) {
      const reposData = await reposRes.json();
      if (Array.isArray(reposData)) {
        recentRepos = reposData.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count || 0,
          forks_count: repo.forks_count || 0,
          language: repo.language || null,
          updated_at: repo.pushed_at || repo.updated_at,
        }));
      }
    }

    return {
      publicRepos: typeof userData.public_repos === 'number' ? userData.public_repos : null,
      followers: typeof userData.followers === 'number' ? userData.followers : null,
      recentRepos,
    };
  } catch (error) {
    console.warn('GitHub API fetch failed or rate-limited. Falling back gracefully without fake data.', error);
    return null;
  }
}
