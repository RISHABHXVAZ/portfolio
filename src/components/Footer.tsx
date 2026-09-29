import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-stone-200/80 text-center">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <div>
          <div className="text-base font-semibold text-neutral-900 tracking-tight">
            Rishabh Srivastava
          </div>
          <div className="text-xs text-neutral-500 font-mono mt-0.5">
            Computer Science & Engineering • MNNIT Allahabad
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-neutral-600 font-medium">
          <a
            href="https://github.com/RISHABHXVAZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/rishabh-srivastava-45a739314/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="mailto:srivastavarishabh799@gmail.com"
            className="hover:text-neutral-950 transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-xs text-neutral-500 font-mono pt-2">
          © {new Date().getFullYear()} Rishabh Srivastava. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
