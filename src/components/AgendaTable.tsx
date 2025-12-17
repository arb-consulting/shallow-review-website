"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FlattenedAgenda } from "@/lib/types";
import { TARGET_CASE_COLORS, PROBLEM_COLORS, getSectionColors } from "@/constants/colors";
import ApproachBadge from "./ApproachBadge";
import { getNameWithoutParentheses } from "@/lib/utils";
import AgendaLink from "./AgendaLink";

type SortField =
  | "name"
  | "section"
  | "papers"
  | "ftes"
  | "targetCase"
  | "approaches"
  | "problems"
  | "fundedBy"
  | "names";

type SortDirection = "asc" | "desc";

interface AgendaTableProps {
  agendas: FlattenedAgenda[];
  initialSortField?: SortField;
  sectionOrder?: string[];
  className?: string;
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export default function AgendaTable({ agendas, initialSortField = "name", sectionOrder = [], className = "" }: AgendaTableProps) {
  const [sortField, setSortField] = useState<SortField>(initialSortField);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedAgendas = useMemo(() => {
    const sorted = [...agendas].sort((a, b) => {
      let comparison = 0;

      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "section":
          // Primary sort by section order (from data), secondary sort by agenda name
          if (sectionOrder.length > 0) {
            const aIndex = sectionOrder.indexOf(a.sectionId);
            const bIndex = sectionOrder.indexOf(b.sectionId);
            comparison = aIndex - bIndex;
          } else {
            comparison = a.sectionName.localeCompare(b.sectionName);
          }
          if (comparison === 0) {
            comparison = a.name.localeCompare(b.name);
          }
          break;
        case "papers":
          comparison = (a.papers?.length || 0) - (b.papers?.length || 0);
          break;
        case "ftes":
          comparison = (a.estimatedFTEs || "").localeCompare(
            b.estimatedFTEs || ""
          );
          break;
        case "targetCase":
          comparison = (a.resolvedTargetCase?.name || "").localeCompare(
            b.resolvedTargetCase?.name || ""
          );
          break;
        case "approaches":
          comparison = a.resolvedApproaches.length - b.resolvedApproaches.length;
          break;
        case "problems":
          comparison = a.resolvedProblems.length - b.resolvedProblems.length;
          break;
        case "fundedBy":
          comparison = a.resolvedFunders.length - b.resolvedFunders.length;
          break;
        case "names":
          comparison = (a.someNames?.join(", ") || "").localeCompare(
            b.someNames?.join(", ") || ""
          );
          break;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [agendas, sortField, sortDirection, sectionOrder]);

  const SortHeader = ({
    field,
    children,
    className = "",
  }: {
    field: SortField;
    children: React.ReactNode;
    className?: string;
  }) => (
    <th
      className={`px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none ${className}`}
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        <span className="text-gray-400">
          {sortField === field ? (sortDirection === "asc" ? "▲" : "▼") : ""}
        </span>
      </div>
    </th>
  );

  return (
    <div className={`overflow-auto relative ${className} rounded-lg shadow-sm border border-gray-200 bg-white`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-slate-50 sticky top-0 z-10 shadow-sm">
          <tr>
            <SortHeader field="name">Name</SortHeader>
            <SortHeader field="section">Section</SortHeader>
            <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[400px]">
              Summary
            </th>
            <SortHeader field="papers" className="text-right w-20">
              Papers
            </SortHeader>
            <SortHeader field="ftes" className="w-24">FTEs</SortHeader>
            <SortHeader field="targetCase" className="w-32">Target Case</SortHeader>
            <SortHeader field="approaches" className="w-40">Approaches</SortHeader>
            <SortHeader field="problems" className="w-32">Problems</SortHeader>
            <SortHeader field="fundedBy" className="w-40">Funded By</SortHeader>
            <SortHeader field="names" className="min-w-[280px]">Names</SortHeader>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedAgendas.map((agenda) => (
            <tr
              key={`${agenda.sectionId}-${agenda.id}`}
              className="hover:bg-slate-50"
            >
              {/* Name */}
              <td className="px-4 py-4 min-w-[200px] max-w-[280px]">
                <AgendaLink
                  sectionId={agenda.sectionId}
                  agendaId={agenda.id}
                  name={agenda.name}
                  className="font-bold"
                />
              </td>

              {/* Section */}
              <td className="px-4 py-4 whitespace-nowrap">
                <Link
                  href={`/${agenda.sectionId}`}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${getSectionColors(agenda.sectionId).dot}`} />
                  <span className="text-sm font-display font-bold text-slate-700">
                    {getNameWithoutParentheses(agenda.sectionName)}
                  </span>
                </Link>
              </td>

              {/* Summary */}
              <td
                className="px-4 py-4 text-sm text-slate-600 font-serif"
                title={agenda.summary || ""}
              >
                {agenda.summary ? truncate(agenda.summary, 200) : "—"}
              </td>

              {/* Papers */}
              <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-600">
                {agenda.papers?.length || 0}
              </td>

              {/* FTEs */}
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                {agenda.estimatedFTEs || "—"}
              </td>

              {/* Target Case */}
              <td className="px-4 py-4 whitespace-nowrap">
                {agenda.resolvedTargetCase ? (
                  <Link
                    href={`/target-cases#case-${agenda.resolvedTargetCase.id}`}
                    className={`inline-block text-xs px-2 py-1 rounded ${TARGET_CASE_COLORS[agenda.resolvedTargetCase.id] || "bg-gray-100 text-gray-700"}`}
                    title={agenda.resolvedTargetCase.description}
                  >
                    {agenda.resolvedTargetCase.name}
                  </Link>
                ) : agenda.targetCase ? (
                  <span className="text-xs text-gray-500">
                    {agenda.targetCase}
                  </span>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>

              {/* Broad Approaches */}
              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-1">
                  {agenda.resolvedApproaches.length > 0 ? (
                    agenda.resolvedApproaches.map((approach) => (
                      <ApproachBadge
                        key={approach.id}
                        id={approach.id}
                        name={approach.name}
                        description={approach.description}
                        size="sm"
                      />
                    ))
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </div>
              </td>

              {/* Orthodox Problems */}
              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-1">
                  {agenda.resolvedProblems.length > 0 ? (
                    agenda.resolvedProblems.map((problem) => (
                      <Link
                        key={problem.id}
                        href={`/orthodox-problems#problem-${problem.id}`}
                        className={`inline-block text-xs px-2 py-0.5 rounded ${PROBLEM_COLORS}`}
                        title={problem.description}
                      >
                        {problem.id}
                      </Link>
                    ))
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </div>
              </td>

              {/* Funded By */}
              <td className="px-4 py-4 text-sm text-gray-600 max-w-[200px]">
                {agenda.fundedByText ? (
                  <span title={agenda.fundedByText}>
                    {truncate(agenda.fundedByText, 60)}
                  </span>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>

              {/* Some Names */}
              <td className="px-4 py-4 text-sm text-gray-600">
                {agenda.someNames && agenda.someNames.length > 0
                  ? truncate(agenda.someNames.join(", "), 100)
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
