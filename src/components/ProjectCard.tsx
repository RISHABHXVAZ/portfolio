import React from 'react';
import { ExternalLink, Play, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { GitHubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group relative rounded-2xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-stone-300 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Editorial Preview Header Banner */}
      <div className="bg-stone-50 border-b border-stone-200/80 p-6 sm:p-7 transition-colors group-hover:bg-stone-50/70">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            {project.id === 'profmojo' ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-200/60 text-neutral-800 text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                RBAC & Operations
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-200/60 text-neutral-800 text-xs font-mono font-medium">
                <Cpu className="w-3.5 h-3.5 text-neutral-700" />
                AI & Financial Analytics
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-neutral-500 bg-white px-2.5 py-1 rounded-md border border-stone-200">
            {project.date}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-900 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1">
          {project.tagline}
        </p>

        <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Main Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        {/* Verified Highlights */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3.5">
            Key Architecture & Features
          </h4>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-neutral-700 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack & Action Links */}
        <div className="pt-4 border-t border-stone-100 space-y-5">
          <div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-stone-100 text-neutral-700 text-xs font-medium border border-stone-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all shadow-sm group/btn"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>

            {/* Demo Button - Explicitly labeled 'Watch Demo' for ProfMojo and 'Live Demo' for Wealthify */}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-stone-50 text-neutral-800 border border-stone-200 text-xs font-medium transition-all shadow-sm hover:border-stone-300 group/btn"
              >
                {project.demoType === 'watch' ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-neutral-600 fill-neutral-600" />
                    <span>Watch Demo</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Demo</span>
                  </>
                )}
                <ExternalLink className="w-3 h-3 text-neutral-400 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
