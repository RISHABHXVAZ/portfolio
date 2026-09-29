import type { AchievementItem } from '../types';

export const achievements: AchievementItem[] = [
  {
    id: 'codechef-rank',
    metric: 'Rank 619',
    context: 'Top 20% Globally',
    description: 'Secured a spot in the Top 20% globally with a Rank 619 in CodeChef Starters 240.',
    category: 'Competitive Programming',
  },
  {
    id: 'leetcode-contest',
    metric: 'Rank 1074',
    context: 'out of 40,000+ Participants',
    description: 'Achieved Global Rank 1074 out of 40k+ participants in LeetCode Weekly Contest 510.',
    category: 'Competitive Programming',
  },
  {
    id: 'problems-solved',
    metric: '500+',
    context: 'Problems Solved',
    description: 'Solved 500+ problems across LeetCode, CodeChef, and GeeksforGeeks.',
    category: 'Problem Solving',
  },
  {
    id: 'jee-mains',
    metric: '99.61%ile',
    context: '100%ile in Physics',
    description: 'Scored 99.61%ile in JEE Mains, featuring a perfect 100%ile in Physics.',
    category: 'Academics',
  },
];
