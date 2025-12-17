import Link from "next/link";
import { Metadata } from "next";
import { APP_TITLE, APP_AUTHORS, APP_SHORT_TITLE } from "@/constants/app";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Methodology | ${APP_SHORT_TITLE}`,
  description:
    "Data sources, processing methods, and related reviews for the Shallow Review of Technical AI Safety",
};

export default function MethodologyPage() {
  const sources = [
    'All arXiv papers with "AI alignment", "AI safety", or "steerability" in the abstract or title',
    "All papers of ~120 AI safety researchers",
    "All Alignment Forum posts",
    'All LessWrong posts under "AI"',
    "Gasteiger's links",
    "Paleka's links",
    "Lenz's links",
    "Zvi's links",
    "Ad hoc Twitter for a year",
    "Several conference pages and workshops",
  ];

  const otherReviews = [
    { name: "aisafety.com org cards", url: "https://aisafety.com" },
    { name: "nonprofits.zone", url: "https://nonprofits.zone/" },
    { name: "Leong and Linsefors taxonomy", url: null },
    { name: "Open Philanthropy RFP", url: null },
    {
      name: "The Singapore Consensus on Global AI Safety Research Priorities",
      url: null,
    },
    {
      name: "International AI Safety Report 2025",
      url: null,
    },
    {
      name: "A Comprehensive Survey in LLM(-Agent) Full Stack Safety: Data, Training and Deployment",
      url: null,
    },
    { name: "plex's Review of AI safety funders", url: null },
    { name: "The Alignment Project", url: null },
    { name: "AI Awareness literature review", url: null },
    {
      name: "Peregrine Launchpad",
      url: "https://peregrine-launchpad.lovable.app/",
    },
    { name: "aisafety.com self-study", url: "https://www.aisafety.com/self-study" },
    { name: "Zach Stein-Perlman's list", url: null },
    { name: "IAPS", url: null },
    { name: "AI Safety Camp 10 Outputs", url: null },
    { name: "The Road to Artificial SuperIntelligence", url: null },
    { name: "AE Studio field guide", url: null },
    { name: "AI Alignment: A Contemporary Survey", url: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-700">Methodology</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Methodology</h1>
        <p className="text-gray-600 text-lg mb-8">        </p>
        <div className="prose prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
            <p className="text-gray-700 mb-4">
              We scraped over 3000 links (arXiv, LessWrong, several alignment publication
              lists, blogs and conferences), conservatively filtering and pre-categorizing
              them with an LLM pipeline. All curated later, many added manually.
            </p>
            <p className="text-gray-700 mb-4">
              We did a systematic Arxiv scrape on the word &quot;alignment&quot; (and filtered
              out the sequence indexing papers that fell into this pipeline).
              &quot;Steerability&quot; is one competing term used by academics.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Primary Sources</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {sources.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              For Critiques
            </h3>
            <p className="text-gray-700">
              We used LW backlinks, Google Scholar cited-by, manual search, collected links, and{" "}
              <a
                href="https://ahrefs.com/backlink-checker/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahrefs
              </a>
              . Technical critiques are somewhat rare, though, and even then our coverage here is
              likely severely lacking. We generally do not include social network critiques
              (mostly due to scope).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Collecting links throughout the year and at project start. Skimming papers, staring at long lists.</li>
              <li>
                We drafted a taxonomy of research agendas. Based on last year&apos;s{" "}
                <a
                  href="https://www.lesswrong.com/posts/fAW6RXLKTLHC3WXkS/shallow-review-of-technical-ai-safety-2024"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  list
                </a>
                , our expertise and the initial paper collection, though we changed the structure
                to accommodate shifts in the domain: the top-level split is now
                &quot;black-box&quot; vs &quot;white-box&quot; instead of &quot;control&quot; vs
                &quot;understanding&quot;.
              </li>
              <li>
                At around 500 links and growing, we decided to implement simple pipelines for
                crawling, scraping and LLM metadata extraction, pre-filtering and
                pre-classification into agendas, as well as other tasks – including final
                formatting later. The use of LLMs was limited to one simple task at a time, and
                the results were closely watched and reviewed. Code and data{" "}
                <a
                  href="https://github.com/gavento/shallow-review"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </li>
              <li>
                We tried getting the AI to update our taxonomy bottom-up to fit the body of
                papers, but the results weren&apos;t very good. Though we are looking at some
                advanced options (specialized embedding or feature extraction and clustering or
                t-SNE etc.)
              </li>
              <li>
                The work on the ~70 agendas was distributed among the team. We ended up making
                many local changes to the taxonomy, esp. splitting up and merging agendas. In
                this sense, the taxonomy is specific to this year, and will need to be
                continuously adapted in the coming years.
              </li>
              <li>
                We started moved any agendas without public outputs this year to the bottom, and
                the inactive ones to the Graveyard. For most of them, we checked with people from
                the agendas for outputs or work we may have missed.
              </li>
              <li>
                We asked 10 of our friends in AI safety to review the ~80 page beast of a post.
                After editing, last-minute additions and formatting, we reached to over 60 experts
                in technical AI safety asking for a quick review of their domains. The coverage is
                not perfect; all mistakes are our own.
              </li>
              <li>
                Of the 2000+ links to papers, organizations and posts in the raw scrape, about 700
                made it in.
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <p className="text-amber-800 text-sm">
                <strong>Note on AI scrapers:</strong> AI scrapes miss lots of things. We did a
                proper pass with a software scraper of over 3000 links collected from the above
                and LLM crawl of some of the pages, and then an LLM pass to pre-filter the links
                for relevance and pre-assign the links to agendas and areas, but this also had
                systematic omissions. We ended up doing a full manual pass over a conservatively
                LLM-pre-filtered links and re-classifying the links and papers. We are not aware
                of any proper studies of &quot;LLM laziness&quot; but it&apos;s{" "}
                <a
                  href="https://joshuaberkowitz.us/blog/papers-7/llmigrate-turns-lazy-llms-into-reliable-c-to-rust-translators-846"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  known
                </a>{" "}
                amongst power users of copilots.
              </p>
            </div>

            <p className="text-gray-700 mt-6">
              The field is growing at around 20% a year. There will come a time that this list
              isn&apos;t sensible to do manually even with conservative help of LLMs, at this
              granularity anyway. We may have better alternatives for this by that time, though.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Taxonomy Classification
            </h2>
            <p className="text-gray-700 mb-4">
              We added our best guess about which of Davidad&apos;s alignment problems the
              agenda would make an impact on if it succeeded, as well as its research
              approach and implied optimism in Richard Ngo&apos;s 3×3 framework.
            </p>

            <div className="grid gap-4 mt-6">
              <Link
                href="/orthodox-problems"
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-600">
                  Orthodox Problems &rarr;
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Which deep orthodox subproblems could this agenda ideally solve?
                </p>
              </Link>

              <Link
                href="/target-cases"
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-600">Target Cases &rarr;</h3>
                <p className="text-gray-600 text-sm mt-1">
                  What part of the distribution over alignment difficulty do they aim to
                  help with?
                </p>
              </Link>

              <Link
                href="/broad-approaches"
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-600">Broad Approaches &rarr;</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Roughly what kind of work is it doing, primarily?
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Reviews and Taxonomies
            </h2>
            <p className="text-gray-700 mb-4">
              This review exists in the context of many other efforts to map AI safety
              research:
            </p>
            <ul className="space-y-2">
              {otherReviews.map((review, i) => (
                <li key={i} className="text-gray-700">
                  {review.url ? (
                    <a
                      href={review.url}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.name}
                    </a>
                  ) : (
                    <span>{review.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope & Limitations</h2>
            <p className="text-gray-700 mb-4">
              <strong>Time period:</strong> 30th November 2024 – 30th November 2025 (with a few exceptions).
            </p>
            <p className="text-gray-700 mb-4">
              We&apos;re focussing on &quot;technical AGI safety&quot;. We thus ignore a lot of work
              relevant to the overall risk: misuse, policy, strategy,{" "}
              <a
                href="https://sentinel-team.org/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                OSINT
              </a>
              ,{" "}
              <a
                href="http://airesilience.net/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                resilience
              </a>{" "}
              and{" "}
              <a
                href="https://www.forethought.org/research/project-ideas-for-making-transformative-ai-go-well-other-than-by-working-on-alignment"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                indirect risk
              </a>
              , AI rights, general capabilities evals, and things closer to &quot;technical
              policy&quot; and like products (like standards, legislation, SL4 datacentres, and
              automated cybersecurity). We also mostly focus on papers and blogposts (rather than
              say, underground gdoc samizdat or Discords).
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                We only use public information, so we are off by some additional unknown factor.
              </li>
              <li>
                We try to include things which are early-stage and illegible – but in general we
                fail and mostly capture legible work on{" "}
                <a
                  href="https://www.lesswrong.com/posts/PMc65HgRFvBimEpmJ/legible-vs-illegible-ai-safety-problems"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  legible problems
                </a>{" "}
                (i.e. things you can write a paper on already).
              </li>
              <li>We don&apos;t collate public funding figures.</li>
            </ul>
          </section>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              See also:{" "}
              <Link href="/about" className="text-blue-600 hover:underline">
                About this review
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
