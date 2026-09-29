import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink, FolderGit2, Loader2 } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { fetchGitHubStats } from '../services/github';
import type { GitHubStats } from '../types';

export const GitHubActivity: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGitHubStats().then((data) => {
      if (isMounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-16 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <GitHubIcon className="w-4 h-4 text-neutral-800" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
                Open Source & Repositories
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              GitHub Repositories
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Dynamic statistics: Only shown if actually retrieved from GitHub API */}
            {!loading && stats && stats.publicRepos !== null && (
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-600 border border-stone-200 bg-stone-50 px-3 py-1.5 rounded-lg">
                <span>
                  Public Repos: <strong className="text-neutral-900 font-semibold">{stats.publicRepos}</strong>
                </span>
                {stats.followers !== null && stats.followers > 0 && (
                  <>
                    <span>•</span>
                    <span>
                      Followers: <strong className="text-neutral-900 font-semibold">{stats.followers}</strong>
                    </span>
                  </>
                )}
              </div>
            )}

            <a
              href="https://github.com/RISHABHXVAZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="py-12 flex flex-col items-center justify-center text-stone-400 gap-2">
            <Loader2 className="w-5 h-5 animate-spin text-neutral-500" />
            <span className="text-xs font-mono">Connecting to GitHub API...</span>
          </div>
        )}

        {/* Dynamic repository list */}
        {!loading && stats && stats.recentRepos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.recentRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-stone-50/60 hover:bg-white border border-stone-200/80 hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-neutral-500 group-hover:text-neutral-800 transition-colors" />
                      <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-950 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-colors opacity-0 group-hover:opacity-100" />
                  </div>

                  {repo.description && (
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {repo.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 pt-3 border-t border-stone-200/50">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      <span>{repo.language}</span>
                    </span>
                  )}

                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-neutral-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}

                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-neutral-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Fallback state when API is offline/rate-limited */}
        {!loading && (!stats || stats.recentRepos.length === 0) && (
          <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 text-center">
            <p className="text-xs text-neutral-600 mb-3">
              Browse repositories directly on GitHub.
            </p>
            <a
              href="https://github.com/RISHABHXVAZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Explore @RISHABHXVAZ on GitHub</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
