import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [copiedCollege, setCopiedCollege] = useState(false);

  const copyToClipboard = (text: string, isCollege: boolean) => {
    navigator.clipboard.writeText(text);
    if (isCollege) {
      setCopiedCollege(true);
      setTimeout(() => setCopiedCollege(false), 2000);
    } else {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#fafaf9] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 font-mono">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-2">
            Have a project or opportunity in mind?
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Feel free to reach out directly via email or connect on LinkedIn and GitHub.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="mailto:srivastavarishabh799@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all shadow-sm hover:shadow"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {/* Primary Email */}
          <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-neutral-500">Personal Email</span>
                <Mail className="w-4 h-4 text-neutral-500" />
              </div>
              <a
                href="mailto:srivastavarishabh799@gmail.com"
                className="text-sm font-medium text-neutral-900 hover:text-blue-700 transition-colors break-all"
              >
                srivastavarishabh799@gmail.com
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Direct response</span>
              <button
                onClick={() => copyToClipboard('srivastavarishabh799@gmail.com', false)}
                className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-950 font-mono transition-colors"
                title="Copy email to clipboard"
              >
                {copiedPersonal ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* College Email */}
          <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-neutral-500">Institutional Email</span>
                <Mail className="w-4 h-4 text-neutral-500" />
              </div>
              <a
                href="mailto:rishabh.20243236@mnnit.ac.in"
                className="text-sm font-medium text-neutral-900 hover:text-blue-700 transition-colors break-all"
              >
                rishabh.20243236@mnnit.ac.in
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">MNNIT Allahabad</span>
              <button
                onClick={() => copyToClipboard('rishabh.20243236@mnnit.ac.in', true)}
                className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-950 font-mono transition-colors"
                title="Copy email to clipboard"
              >
                {copiedCollege ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-neutral-500">Phone</span>
                <Phone className="w-4 h-4 text-neutral-500" />
              </div>
              <a
                href="tel:+916393133515"
                className="text-sm font-medium text-neutral-900 hover:text-blue-700 transition-colors font-mono"
              >
                +91-6393133515
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">India</span>
              <a
                href="tel:+916393133515"
                className="text-xs text-neutral-600 hover:text-neutral-950 font-medium"
              >
                Call
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-neutral-500">GitHub</span>
                <GitHubIcon className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="text-sm font-medium text-neutral-900">
                github.com/RISHABHXVAZ
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Open source</span>
              <a
                href="https://github.com/RISHABHXVAZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-neutral-700 hover:text-neutral-950 font-medium"
              >
                <span>Visit</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-neutral-500">LinkedIn</span>
                <LinkedInIcon className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="text-sm font-medium text-neutral-900">
                Rishabh Srivastava
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                linkedin.com/in/rishabh-srivastava-45a739314/
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Professional profile</span>
              <a
                href="https://www.linkedin.com/in/rishabh-srivastava-45a739314/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-neutral-700 hover:text-neutral-950 font-medium"
              >
                <span>Connect</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
