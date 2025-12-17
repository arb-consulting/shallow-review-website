"use client";

import Link from "next/link";
import { APP_TITLE, APP_DESCRIPTION } from "@/constants/app";
import NavContent from "./NavContent";

interface SectionInfo {
  id: string;
  name: string;
}

interface SidebarProps {
  sections?: SectionInfo[];
}

export default function Sidebar({ sections }: SidebarProps) {
  return (
    <aside className="sticky top-0 h-screen w-80 xl:w-96 shrink-0 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent border-r border-slate-200 overflow-y-auto hidden overflow-y-scroll [scrollbar-width:none] md:flex md:flex-col z-20 font-sans">
      <div className="p-8 pb-4 text-center">
        <Link href="/" className="block group">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors font-serif">
            {APP_TITLE}
          </h1>
        </Link>
        <p className="text-base text-slate-500 mt-4 leading-relaxed font-serif italic">
          {APP_DESCRIPTION}
        </p>
      </div>

      <div className="flex-1 px-4">
        <NavContent sections={sections} />
      </div>

      <div className="p-6 text-xs text-slate-400 text-center">
        &copy; 2025
      </div>
    </aside>
  );
}
