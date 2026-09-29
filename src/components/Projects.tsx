import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#fafaf9] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
            Featured Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
            Selected Engineering Work
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Full-stack systems engineered with Spring Boot, React, and PostgreSQL, focusing on role-based security, background processing, and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
