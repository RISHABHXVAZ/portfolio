export interface Project {
  id: string;
  title: string;
  date: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  demoType: 'watch' | 'live'; // 'watch' -> "Watch Demo", 'live' -> "Live Demo"
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
  scoreLabel: string;
  scoreValue: string;
  board?: string;
}

export interface AchievementItem {
  id: string;
  metric: string;
  context: string;
  description: string;
  category: 'Competitive Programming' | 'Academics' | 'Problem Solving';
}

export interface CodingProfile {
  platform: 'LeetCode' | 'CodeChef' | 'GeeksForGeeks';
  username: string;
  profileUrl: string;
  verifiedMetric: {
    label: string;
    value: string | number;
  };
  additionalVerifiedInfo?: {
    label: string;
    value: string | number;
  }[];
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubStats {
  publicRepos: number | null;
  followers: number | null;
  recentRepos: GitHubRepo[];
}
