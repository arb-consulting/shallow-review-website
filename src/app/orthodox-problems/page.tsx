import { loadReviewData, loadOrthodoxProblems } from "@/lib/loadData";
import Link from "next/link";
import { Metadata } from "next";
import { APP_TITLE, APP_AUTHORS, APP_SHORT_TITLE } from "@/constants/app";
import { ChevronRight } from "lucide-react";
import AgendaLink from "@/components/AgendaLink";

export const metadata: Metadata = {
  title: `Orthodox Problems | ${APP_SHORT_TITLE}`,
  description:
    "Noncanonical problems in AI alignment that research agendas could aim to address",
};

export default function OrthodoxProblemsPage() {
  const reviewData = loadReviewData();
  const { problems, source } = loadOrthodoxProblems();

  // Build a map of problem ID -> agendas that reference it
  const problemToAgendas: Record<
    string,
    { agenda: { id: string; name: string }; section: { id: string; name: string } }[]
  > = {};

  for (const problem of problems) {
    problemToAgendas[problem.id] = [];
  }

  for (const section of reviewData.sections) {
    for (const agenda of section.agendas || []) {
      if (agenda.orthodoxProblems?.length) {
        for (const problemId of agenda.orthodoxProblems) {
          if (problemToAgendas[problemId]) {
            problemToAgendas[problemId].push({
              agenda: { id: agenda.id, name: agenda.name },
              section: { id: section.id, name: section.name },
            });
          }
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-700">Orthodox Problems</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-2 pb-4">Orthodox Problems</h1>
        <p className="text-gray-600 text-lg mb-4">
          Noncanonical problems in AI alignment that research agendas could aim to address. Each problem is a core challenge or assumption
          in one particular view of the field 
          (the "<a
            href="https://scottaaronson.blog/?p=6821"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >orthodox
          </a>" view).
        </p>
        <p className="text-gray-500 text-sm mb-8 pb-8">
          Based on{" "}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {source.title}
          </a>{" "}
          by {source.author} ({source.date})
        </p>
        <div className="space-y-8">
          {problems.map((problem) => {
            const agendas = problemToAgendas[problem.id] || [];
            return (
              <section
                key={problem.id}
                id={`problem-${problem.id}`}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-gray-400">
                    {problem.id}.
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {problem.name}
                  </h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {agendas.length} agenda{agendas.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <p className="text-gray-600 mt-2 ml-9">{problem.description}</p>

                {problem.seeAlso && problem.seeAlso.length > 0 && (
                  <div className="mt-3 ml-9">
                    <span className="text-sm text-gray-500">See: </span>
                    {problem.seeAlso.map((ref, i) => (
                      <span key={i}>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {ref.title}
                        </a>
                        {i < problem.seeAlso!.length - 1 && (
                          <span className="text-gray-400">, </span>
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {agendas.length > 0 && (
                  <div className="mt-4 ml-9">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 pt-4">
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
