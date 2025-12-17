"use client";

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getSectionColors } from '@/constants/colors';
import {
  cn,
  getNameWithoutParentheses,
} from '@/lib/utils';

import ArbLogo from './ArbLogo';

interface SectionInfo {
  id: string;
  name: string;
}

interface NavContentProps {
  onNavigate?: () => void;
  className?: string;
  sections?: SectionInfo[];
}

export default function NavContent({
  onNavigate,
  className,
  sections = [],
}: NavContentProps) {
  const pathname = usePathname();
  // Check if current path is within a section
  const currentSection = sections.find((s) => pathname?.startsWith(`/${s.id}`));

  return (
    <div className={cn("py-2 font-sans h-full flex flex-col", className)}>
      <div className="space-y-6 px-3 flex flex-col items-center text-center flex-1">
        {/* Main Views */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 justify-center text-slate-700 mb-6">
            <Link
              href="/overview"
              className="hover:text-blue-600 font-semibold text-base transition-colors"
              onClick={onNavigate}
            >
              overview
            </Link>
            <span className="text-slate-300 font-bold">·</span>
            <Link
              href="/table"
              className="hover:text-blue-600 font-semibold text-base transition-colors"
              onClick={onNavigate}
            >
              table
            </Link>
            <span className="text-slate-300 font-bold">·</span>
            <Link
              href="/similarity"
              className="hover:text-blue-600 font-semibold text-base transition-colors"
              onClick={onNavigate}
            >
              clusters
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">
              classify by:
            </span>
            <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 justify-center text-slate-700">
              <Link
                href="/orthodox-problems"
                className="hover:text-blue-600 font-semibold text-sm transition-colors"
                onClick={onNavigate}
              >
                problems
              </Link>
              <span className="text-slate-300 font-bold">·</span>
              <Link
                href="/target-cases"
                className="hover:text-blue-600 font-semibold text-sm transition-colors"
                onClick={onNavigate}
              >
                target cases
              </Link>
              <span className="text-slate-300 font-bold">·</span>
              <Link
                href="/broad-approaches"
                className="hover:text-blue-600 font-semibold text-sm transition-colors"
                onClick={onNavigate}
              >
                approaches
              </Link>
            </div>
          </div>
        </div>
        {/* Internal Pages - Single Line */}
        <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 justify-center text-slate-700 text-sm">
          <Link
            href="/methodology"
            className="text-blue-600 font-semibold transition-colors"
            onClick={onNavigate}
          >
            Methods
          </Link>
          <span className="text-slate-300 font-bold">·</span>
          <Link
            href="/about"
            className="text-blue-600 font-semibold transition-colors"
            onClick={onNavigate}
          >
            About
          </Link>
          <span className="text-slate-300 font-bold">·</span>
          <a
            href="https://github.com/arb-consulting/shallow-review-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-600 font-semibold transition-colors"
            onClick={onNavigate}
          >
            Code & data
          </a>
        </div>

        {/* Categories (Sections) - Dot Navigation */}
        {sections.length > 0 && (
          <div className="pt-6 pb-8 border-t-2 border-slate-200 w-full">
            <div className="space-y-1.5 flex flex-col">
              {sections.map((s) => {
                const colors = getSectionColors(s.id);
                const isActive = currentSection?.id === s.id;

                return (
                  <Link
                    key={s.id}
                    href={`/${s.id}`}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all group bg-white/80 hover:bg-white",
                      isActive ? "ring-2 ring-offset-1 ring-slate-300" : "hover:ring-1 hover:ring-slate-200"
                    )}
                    onClick={onNavigate}
                  >
                    <span
                      className={cn(
                        "rounded-full flex-shrink-0 transition-all",
                        isActive ? "w-4 h-4" : "w-3 h-3",
                        colors.dot
                      )}
                    />
                    <span className="text-sm font-display font-bold text-slate-700">
                      {getNameWithoutParentheses(s.name)}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Arb Logo */}
      <div className="mt-auto pt-8 pb-4 flex justify-center border-t-2 border-slate-200">
        <a
          href="https://arbresearch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 hover:opacity-70 transition-opacity"
        >
          <ArbLogo />
        </a>
      </div>
    </div>
  );
}
