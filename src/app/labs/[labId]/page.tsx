import {
  loadLabs,
  loadFunders,
  getFundersByIds,
  loadResearchers,
  getResearchersByIds,
  loadKeywords,
  getKeywordsByIds,
  loadLesswrongTags,
  createTagsLookup,
} from "@/lib/loadData";
import Link from "next/link";
import { notFound } from "next/navigation";
import PaperCard from "@/components/PaperCard";
import { FUNDER_COLORS } from "@/constants/colors";
import Markdown from "@/components/Markdown";
import {
  ExternalLink,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Users,
  FileText,
  Building2,
} from "lucide-react";
import TableOfContents, { TOCItem } from "@/components/TableOfContents";
import Section from "@/components/Section";

interface PageProps {
  params: Promise<{ labId: string }>;
}

export async function generateStaticParams() {
  const { labs } = loadLabs();
  return labs.map((lab) => ({
    labId: lab.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { labId } = await params;
  const decodedLabId = decodeURIComponent(labId);
  const { labs } = loadLabs();
  const lab = labs.find((l) => l.id === decodedLabId);

  if (!lab) return { title: "Not Found" };

  return {
    title: `${lab.name} | Shallow Review 2025`,
    description: `AI safety efforts at ${lab.name}`,
  };
}

export default async function LabPage({ params }: PageProps) {
  const { labId } = await params;
  const decodedLabId = decodeURIComponent(labId);
  const { labs } = loadLabs();
  const { funders: allFunders } = loadFunders();
  const { researchers: allResearchers } = loadResearchers();
  const { keywords: allKeywords } = loadKeywords();
  const { tags } = loadLesswrongTags();
  const tagsLookup = createTagsLookup(tags);

  const lab = labs.find((l) => l.id === decodedLabId);

  if (!lab) {
    notFound();
  }

  const funders = lab.fundedBy
    ? getFundersByIds(allFunders, lab.fundedBy)
    : [];

  const researchers = lab.someNames
    ? getResearchersByIds(allResearchers, lab.someNames)
    : [];

  const keywords = lab.keywords
    ? getKeywordsByIds(allKeywords, lab.keywords)
    : [];

  // Build navigation for prev/next labs
  const currentIndex = labs.findIndex((l) => l.id === decodedLabId);
  const prevLab = currentIndex > 0 ? labs[currentIndex - 1] : null;
  const nextLab = currentIndex < labs.length - 1 ? labs[currentIndex + 1] : null;

  // Computed flags
  const hasResources = lab.resources || lab.wikipedia || (lab.lesswrongTags && lab.lesswrongTags.length > 0);
  const hasLabInfo = lab.description || lab.teams || lab.publicAlignmentAgenda || lab.publicPlan || lab.structure || lab.framework || lab.hostOrgStructure;
  const hasPeopleFunding = (lab.someNames && lab.someNames.length > 0) || funders.length > 0;
  const hasCritiques = lab.critiques && lab.critiques.length > 0;
  const hasKeywords = keywords.length > 0;

  // Build TOC items based on available content
  const tocItems: TOCItem[] = [];

  if (hasLabInfo) {
    tocItems.push({ id: "lab-info", label: "Lab Information" });
  }
  if (hasPeopleFunding) {
    tocItems.push({ id: "people-funding", label: "People & Funding" });
  }
  if (hasResources || hasCritiques) {
    tocItems.push({ id: "online-info", label: "Online Info" });
  }
  if (hasKeywords) {
    tocItems.push({ id: "keywords", label: "Keywords" });
  }
  if (lab.papers && lab.papers.length > 0) {
    tocItems.push({ id: "papers", label: "Papers & Outputs", count: lab.papers.length });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Sticky TOC Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/labs" className="hover:text-blue-600">
                  Labs
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-semibold">{lab.name}</span>
              </div>
              <div className="flex items-center gap-1">
                {prevLab ? (
                  <Link
                    href={`/labs/${prevLab.id}`}
                    className="p-1 rounded hover:bg-gray-200 transition-colors"
                    title={prevLab.name}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Link>
                ) : (
                  <span className="p-1 text-gray-300 cursor-not-allowed">
                    <ChevronLeft className="w-5 h-5" />
                  </span>
                )}
                {nextLab ? (
                  <Link
                    href={`/labs/${nextLab.id}`}
                    className="p-1 rounded hover:bg-gray-200 transition-colors"
                    title={nextLab.name}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                ) : (
                  <span className="p-1 text-gray-300 cursor-not-allowed">
                    <ChevronRight className="w-5 h-5" />
                  </span>
                )}
              </div>
            </nav>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="w-10 h-10 text-blue-600" />
              {lab.name}
            </h1>

            <div className="space-y-10 pt-4">
              {/* Lab Information */}
              {hasLabInfo && (
                <Section id="lab-info" title="Lab Information" icon={Building2} card>
                  <div className="space-y-6">
                    {lab.description && (
                      <div>
                        <Markdown className="text-gray-700" inline={false}>{lab.description}</Markdown>
                      </div>
                    )}
                    {lab.teams && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Teams
                        </h3>
                        <Markdown className="text-gray-700">{lab.teams}</Markdown>
                      </div>
                    )}
                    {lab.publicAlignmentAgenda && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Public Alignment Agenda
                        </h3>
                        <Markdown className="text-gray-700">{lab.publicAlignmentAgenda}</Markdown>
                      </div>
                    )}
                    {lab.publicPlan && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Public Plan
                        </h3>
                        <Markdown className="text-gray-700">{lab.publicPlan}</Markdown>
                      </div>
                    )}
                    {lab.structure && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Structure
                        </h3>
                        <Markdown className="text-gray-700">{lab.structure}</Markdown>
                      </div>
                    )}
                    {lab.framework && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Framework
                        </h3>
                        <Markdown className="text-gray-700">{lab.framework}</Markdown>
                      </div>
                    )}
                    {lab.hostOrgStructure && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Host Org Structure
                        </h3>
                        <Markdown className="text-gray-700">{lab.hostOrgStructure}</Markdown>
                      </div>
                    )}
                  </div>
                </Section>
              )}

              {/* People & Funding */}
              {hasPeopleFunding && (
                <Section id="people-funding" title="People & Funding" icon={Users} card>
                  <div className="space-y-4">
                    {funders.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          <Link href="/funders" className="hover:text-blue-600">
                            Funded By
                          </Link>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {funders.map((funder) => (
                            <Link
                              key={funder.id}
                              href={`/funders#funder-${funder.id}`}
                              className={`inline-block text-sm px-2 py-1 rounded transition-colors ${FUNDER_COLORS}`}
                              title={funder.description}
                            >
                              {funder.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {researchers.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          <Link href="/researchers" className="hover:text-blue-600">
                            Some Names
                          </Link>
                        </h3>
                        <div className="flex flex-wrap gap-x-1 gap-y-1">
                          {researchers.map((researcher, i) => (
                            <span key={researcher.id}>
                              <Link
                                href={`/researchers#researcher-${researcher.id}`}
                                className="text-gray-700 hover:text-blue-600 hover:underline"
                              >
                                {researcher.name}
                              </Link>
                              {i < researchers.length - 1 && <span className="text-gray-400">,</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Section>
              )}

              {/* Online Info (Resources + Critiques) */}
              {(hasResources || hasCritiques) && (
                <Section id="online-info" title="Online Info" icon={BookOpen} card>
                  <div className="space-y-6">
                    {hasResources && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Resources
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {lab.wikipedia && (
                            <a
                              href={lab.wikipedia}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              Wikipedia
                            </a>
                          )}
                          {lab.resources?.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              {resource.title}
                            </a>
                          ))}
                          {lab.lesswrongTags?.map((slug) => {
                            const tagInfo = tagsLookup[slug];
                            const displayName = tagInfo?.name || slug;
                            const postCount = tagInfo?.postCount;
                            return (
                              <a
                                key={slug}
                                href={`https://www.lesswrong.com/tag/${slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                LessWrong: {displayName}
                                {postCount !== undefined && (
                                  <span className="text-xs text-blue-400">
                                    ({postCount} posts)
                                  </span>
                                )}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {lab.critiques && lab.critiques.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Critiques
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {lab.critiques.map((critique, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 [&_a]:hover:underline">
                              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                              <Markdown>{critique}</Markdown>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Section>
              )}

              {/* Keywords */}
              {hasKeywords && (
                <Section id="keywords" title="Keywords" icon={BookOpen} card>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <Link
                        key={keyword.id}
                        href={`/keywords#keyword-${keyword.id}`}
                        className="inline-block text-sm bg-slate-100 text-slate-700 px-2 py-1 rounded hover:bg-slate-200 transition-colors"
                        title={keyword.description}
                      >
                        {keyword.name}
                      </Link>
                    ))}
                  </div>
                </Section>
              )}

              {/* Papers & Outputs */}
              {lab.papers && lab.papers.length > 0 && (
                <Section id="papers" title={`Papers & Outputs (${lab.papers.length})`} icon={FileText} card>
                  <ul className="space-y-2 divide-y divide-gray-100">
                    {lab.papers.map((paper, i) => (
                      <li key={i} className="pt-2 first:pt-0">
                        <PaperCard paper={paper} />
                      </li>
                    ))}
                  </ul>
                </Section>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
