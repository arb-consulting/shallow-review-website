import { loadReviewData, loadTargetCases, normalizeTargetCaseId } from "@/lib/loadData";
import Link from "next/link";
import { Metadata } from "next";
import { APP_TITLE, APP_AUTHORS, APP_SHORT_TITLE } from "@/constants/app";
import { ChevronRight } from "lucide-react";
import AgendaLink from "@/components/AgendaLink";

export const metadata: Metadata = {
  title: `Target Cases | ${APP_SHORT_TITLE}`,
  description:
    "Alignment difficulty assumptions: pessimistic vs. optimistic views on how hard AI alignment is",
};

export default function TargetCasesPage() {
  const reviewData = loadReviewData();
  const { cases } = loadTargetCases();

  // Build a map of case ID -> agendas that reference it
  const caseToAgendas: Record<
    string,
    { agenda: { id: string; name: string }; section: { id: string; name: string } }[]
  > = {};

  for (const targetCase of cases) {
    caseToAgendas[targetCase.id] = [];
  }

  for (const section of reviewData.sections) {
    for (const agenda of section.agendas || []) {
      if (agenda.targetCase) {
        const normalizedId = normalizeTargetCaseId(agenda.targetCase);
        if (normalizedId && caseToAgendas[normalizedId]) {
          caseToAgendas[normalizedId].push({
            agenda: { id: agenda.id, name: agenda.name },
            section: { id: section.id, name: section.name },
          });
        }
      }
    }
  }

  const caseColors: Record<string, string> = {
    pessimistic: "bg-red-50 text-red-800 hover:bg-red-100",
    optimistic: "bg-green-50 text-green-800 hover:bg-green-100",
    "average-case": "bg-blue-50 text-blue-800 hover:bg-blue-100",
    "worst-case": "bg-purple-50 text-purple-800 hover:bg-purple-100",
    mixed: "bg-gray-50 text-gray-800 hover:bg-gray-100",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-700">Target Cases</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-2 pb-4">Target Cases</h1>
        <p className="text-gray-600 text-lg mb-4">
          Assumptions about how difficult alignment is. &quot;Pessimistic&quot;
          approaches assume alignment is hard, while
          &quot;optimistic&quot; approaches assume current techniques may be sufficient.
        </p>
        <p className="text-gray-500 text-sm mb-8 pb-8">
          Inspired by:{" "}
          <a
            href="https://www.lesswrong.com/posts/67fNBeHrjdrZZNDDK/defining-alignment-research#A_better_definition_of_alignment_research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Defining Alignment Research
          </a>
        </p>
        <div className="space-y-8">
          {cases.map((targetCase) => {
            const agendas = caseToAgendas[targetCase.id] || [];
            return (
              <section
                key={targetCase.id}
                id={`case-${targetCase.id}`}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${caseColors[targetCase.id] || "bg-gray-100 text-gray-700"}`}
                  >
                    {targetCase.name}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {agendas.length} agenda{agendas.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <p className="text-gray-600 mt-3">{targetCase.description}</p>

                {agendas.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Relevant Agendas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {agendas.map(({ agenda, section }) => (
                        <AgendaLink
                          key={`${section.id}-${agenda.id}`}
                          sectionId={section.id}
                          agendaId={agenda.id}
                          name={agenda.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
