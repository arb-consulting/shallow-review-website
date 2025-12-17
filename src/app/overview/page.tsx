import React from 'react';

import Link from 'next/link';

import { getSectionColors } from '@/constants/colors';
import {
  loadReviewData,
  loadStructureInfo,
} from '@/lib/loadData';
import { Agenda } from '@/lib/types';
import { getNameWithoutParentheses } from '@/lib/utils';

export const metadata = {
  title: "Overview | Shallow Review 2025",
  description: "All research agendas organized by section",
};

export default function OverviewPage() {
  const data = loadReviewData();
  const { orderMap, parentOverrides } = loadStructureInfo();

  const totalAgendas = data.sections.reduce(
    (sum, s) => sum + (s.agendas?.length || 0),
    0
  );

  // Helper to get children for a parent from structure
  function getStructureChildren(parentId: string): string[] {
    return orderMap.get(parentId) || [];
  }

  // Helper to render agenda links
  function AgendaLink({
    agenda,
    sectionId,
    colors,
  }: {
    agenda: Agenda;
    sectionId: string;
    colors: ReturnType<typeof getSectionColors>;
  }) {
    return (
      <Link
        href={`/${sectionId}/${agenda.id}`}
        className={`text-sm text-slate-600 ${colors.hover} hover:underline transition-colors`}
      >
        {agenda.name}
      </Link>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-black text-slate-900 font-display mb-2">
            Agendas
          </h1>
          <p className="text-slate-500">
            (all of the below are clickable)
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {data.sections.map((section) => {
            const colors = getSectionColors(section.id);
            const agendas = section.agendas || [];
            const agendasById = new Map(agendas.map((a) => [a.id, a]));
            const subSections = section.subSections || [];

            // Get top-level items from structure
            const topLevelIds = getStructureChildren(section.id);

            // Group agendas by their parent
            const childrenByParent = new Map<string, Agenda[]>();
            for (const agenda of agendas) {
              const parent = parentOverrides.get(agenda.id);
              if (parent && parent !== section.id) {
                const children = childrenByParent.get(parent) || [];
                children.push(agenda);
                childrenByParent.set(parent, children);
              }
            }

            // Sort children by structure order
            for (const [parentId, children] of childrenByParent) {
              const order = orderMap.get(parentId);
              if (order) {
                const orderIndex = new Map(order.map((id, i) => [id, i]));
                children.sort(
                  (a, b) =>
                    (orderIndex.get(a.id) ?? Infinity) -
                    (orderIndex.get(b.id) ?? Infinity)
                );
              }
            }

            // Check if section has subsections/parent agendas with children
            const hasHierarchy = topLevelIds.some(
              (id) =>
                childrenByParent.has(id) || subSections.some((s) => s.id === id)
            );

            return (
              <div
                key={section.id}
                className="flex gap-6 md:gap-10 py-6 first:pt-0"
              >
                {/* Section label - fixed width on left */}
                <div className="w-36 md:w-44 flex-shrink-0">
                  <Link
                    href={`/${section.id}`}
                    className={`${colors.text} font-display text-md font-black hover:underline transition-colors block leading-snug`}
                  >
                    {getNameWithoutParentheses(section.name)}
                  </Link>
                  <span className="text-xs text-slate-400 mt-1 block font-sans">
                    {agendas.length} agendas
                  </span>
                </div>

                {/* Agendas with hierarchy */}
                <div className="flex-1 space-y-3">
                  {hasHierarchy ? (
                    // Render with subsection grouping
                    (() => {
                      // Separate grouped items from standalone items
                      const groupedItems: React.ReactNode[] = [];
                      const standaloneAgendas: Agenda[] = [];

                      topLevelIds.forEach((itemId) => {
                        const agenda = agendasById.get(itemId);
                        const subSection = subSections.find(
                          (s) => s.id === itemId
                        );
                        const children = childrenByParent.get(itemId) || [];

                        // It's a subsection or parent agenda with children
                        if ((subSection || agenda) && children.length > 0) {
                          const name =
                            subSection?.name || agenda?.name || itemId;
                          groupedItems.push(
                            <div key={itemId} className="mb-8">
                              <div
                                className={`text-sm font-semibold text-slate-400 mb-1`}
                              >
                                {getNameWithoutParentheses(name)}
                              </div>
                              <div className={`flex flex-wrap gap-x-4 gap-y-3`}>
                                {children.map((child) => (
                                  <AgendaLink
                                    key={child.id}
                                    agenda={child}
                                    sectionId={section.id}
                                    colors={colors}
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        } else if (agenda && children.length === 0) {
                          // Collect standalone items to render together
                          standaloneAgendas.push(agenda);
                        }
                      });

                      return (
                        <>
                          {groupedItems}
                          {standaloneAgendas.length > 0 && (
                            <div className="flex flex-wrap gap-x-4 gap-y-3">
                              {standaloneAgendas.map((agenda) => (
                                <AgendaLink
                                  key={agenda.id}
                                  agenda={agenda}
                                  sectionId={section.id}
                                  colors={colors}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      );
                    })()
                  ) : (
                    // Flat list for sections without hierarchy
                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {agendas.map((agenda) => (
                        <AgendaLink
                          key={agenda.id}
                          agenda={agenda}
                          sectionId={section.id}
                          colors={colors}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
