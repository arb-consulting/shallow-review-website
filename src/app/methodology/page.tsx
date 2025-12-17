import Link from "next/link";
import { Metadata } from "next";
import { APP_SHORT_TITLE } from "@/constants/app";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Methodology | ${APP_SHORT_TITLE}`,
  description:
    "Data sources, processing methods, and related reviews for the Shallow Review of Technical AI Safety",
};

export default function MethodologyPage() {
  const sources = [
    <>
      All arXiv papers with &quot;AI alignment&quot;, &quot;AI safety&quot;, or
      &quot;steerability&quot; in the abstract or title; all papers of ~120 AI
      safety researchers
    </>,
    <>
      All Alignment Forum posts and all LW posts under &quot;
      <a
        href="https://www.lesswrong.com/w/ai"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        AI
      </a>
      &quot;
    </>,
    <>
      <a
        href="https://aisafetyfrontier.substack.com/"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gasteiger’s links
      </a>
      ,{" "}
      <a
        href="https://newsletter.danielpaleka.com/"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Paleka’s links
      </a>
      ,{" "}
      <a
        href="https://aisafetypapers.com/"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lenz’s links
      </a>
      ,{" "}
      <a
        href="https://thezvi.substack.com/"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zvi’s links
      </a>
    </>,
    <>
      <a
        href="https://x.com/g_leech_/following"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ad hoc Twitter
      </a>{" "}
      for a year, several conference pages and workshops
    </>,
  ];

  const otherReviews = [
    {
      name: "aisafety.com org cards",
      url: "https://aisafety.com/map#cards",
    },
    { name: "nonprofits.zone", url: "https://nonprofits.zone/" },
    {
      name: "Leong and Linsefors",
      url: "https://docs.google.com/document/d/1Mis0ZxuS-YIgwy4clC7hKrKEcm6Pn0yn709YUNVcpx8/edit?tab=t.0",
    },
    {
      name: "Coefficient Giving RFP",
      url: "https://www.lesswrong.com/posts/26SHhxK2yYQbh7ors/research-directions-open-phil-wants-to-fund-in-technical-ai",
    },
    {
      name: "Peregrine Report",
      url: "https://riskmitigation.ai/",
    },
    {
      name: "The Singapore Consensus on Global AI Safety Research Priorities",
      url: "https://arxiv.org/abs/2506.20702",
    },
    {
      name: "International AI Safety Report 2025 (and updates)",
      url: "https://arxiv.org/abs/2501.17805",
    },
    {
      name: "A Comprehensive Survey in LLM(-Agent) Full Stack Safety",
      url: "https://arxiv.org/pdf/2504.15585",
    },
    {
      name: "plex's Review of AI safety funders",
      url: "https://www.lesswrong.com/posts/KZPNbHs9RsoeZShkJ/plex-s-shortform?commentId=hCbJkBd9s23PEeLAL",
    },
    {
      name: "The Alignment Project",
      url: "https://www.lesswrong.com/s/wvLzDiWQWBC9b5HGa",
    },
    {
      name: "AI Awareness literature review",
      url: "https://arxiv.org/abs/2504.20084",
    },
    {
      name: "aisafety.com self-study",
      url: "https://www.aisafety.com/self-study",
    },
    {
      name: "Zach Stein-Perlman’s list",
      url: "https://docs.google.com/spreadsheets/d/10_dzImDvHq7eEag6paK6AmIdAGMBOA7yXUvumODhZ5U/edit?gid=1813700452#gid=1813700452",
    },
    {
      name: "IAPS",
      url: "https://github.com/Oscar-Delaney/safe_AI_papers",
    },
    {
      name: "AI Safety Camp 10 Outputs",
      url: "https://www.lesswrong.com/posts/3sjtEXzbwDpyALR4H/ai-safety-camp-10-outputs",
    },
    {
      name: "The Road to Artificial SuperIntelligence",
      url: "https://arxiv.org/abs/2412.16468",
    },
    {
      name: "AE Studio field guide",
      url: "https://www.ae.studio/essays/whos-actually-preventing-the-paperclip-apocalypse-a-field-guide-to-ai-alignment-organizations",
    },
    {
      name: "AI Alignment: A Contemporary Survey",
      url: "https://dl.acm.org/doi/pdf/10.1145/3770749",
    },
  ];

  const inactiveOrgs = [
    { name: "Safe Superintelligence Inc. (SSI)", url: "https://ssi.inc/" },
    { name: "Conjecture: Cognitive Software", url: null },
    { name: "Orthogonal / QACI", url: "https://orxl.org/" },
    { name: "modelingcooperation.com", url: "https://www.modelingcooperation.com/research" },
    { name: "Pr(Ai)2R", url: "https://prair.group/" },
    { name: "Astera Obelisk", url: "https://astera.org/program/obelisk/" },
    { name: "Coordinal Research (Thibodeau)", url: "https://coordinal.org/" },
    { name: "Workshop Labs (Drago, Laine)", url: "https://workshoplabs.ai/" },
  ];

  const graveyard = [
    {
      name: "Adversarially Robust Augmentation and Distillation",
      url: "https://www.lesswrong.com/posts/RRvdRyWrSqKW2ANL9/alignment-proposal-adversarially-robust-augmentation-and",
    },
    {
      name: "Half of FAIR including JEPA",
      url: "https://www.ft.com/content/c586eb77-a16e-4363-ab0b-e877898b70de",
    },
    {
      name: "Science of Evals (but see recent paper)",
      url: "https://www.apolloresearch.ai/blog/we-need-a-science-of-evals/",
    },
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
        <p className="text-gray-600 text-lg mb-8">
          Structure, sources, processing methods, and related reviews
        </p>
        <div className="prose prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Structure</h2>
            <p className="text-gray-700 mb-4">
              We have again settled for a tree data structure for this post – but
              people and work can appear in multiple nodes so it’s not a dumb
              partition. Richer representation structures may be in the works.
            </p>
            <p className="text-gray-700 mb-4">
              The level of analysis for each node in the tree is the “research
              agenda”, an abstraction spanning multiple papers and organisations
              in a messy many-to-many relation. What makes something an agenda?
              Similar methods, similar aims, or something sociological about
              leaders and collaborators. Agendas vary greatly in their degree of
              coherent agency, from the very coherent Anthropic Circuits work to
              the enormous, leaderless and unselfconscious “iterative
              alignment”.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope</h2>
            <p className="text-gray-700 mb-4">
              <strong>Time period:</strong> 30th November 2024 – 30th November
              2025 (with a few exceptions).
            </p>
            <p className="text-gray-700 mb-4">
              We’re focussing on “technical AGI safety”. We thus ignore a lot of
              work relevant to the overall risk: misuse, policy, strategy,{" "}
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
              ,{" "}
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI
              </a>{" "}
              <a
                href="https://arxiv.org/abs/2510.26396"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                rights
              </a>
              , general capabilities evals, and things closer to “
              <a
                href="https://docs.google.com/document/d/1BGsbwELOQRKVOO8Ho8S4no1BQeYdjbRZpBmRyk7kOVo/edit?usp=sharing"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                technical policy
              </a>
              ” and like{" "}
              <a
                href="https://themultiplicity.ai/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                products
              </a>{" "}
              (like standards, legislation, SL4 datacentres, and automated
              cybersecurity). We also mostly focus on papers and blogposts
              (rather than say, underground gdoc samizdat or Discords).
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                We only use public information, so we are off by some additional
                unknown factor.
              </li>
              <li>
                We try to include things which are early-stage and illegible –
                but in general we fail and mostly capture legible work on{" "}
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
              <li>
                Of the 2000+ links to papers, organizations and posts in the raw
                scrape, about 700 made it in.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Paper Sources
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {sources.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6 mb-6">
              <p className="text-amber-800 text-sm">
                <strong>Note on AI scrapers:</strong> AI scrapes miss lots of
                things. We did a proper pass with a software scraper of over
                3000 links collected from the above and LLM crawl of some of the
                pages, and then an LLM pass to pre-filter the links for
                relevance and pre-assign the links to agendas and areas, but
                this also had systematic omissions. We ended up doing a full
                manual pass over a conservatively LLM-pre-filtered links and
                re-classifying the links and papers. The code and data can be
                found{" "}
                <a
                  href="https://github.com/arb-consulting/shallow-review-2025"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                , including the 3300 collected{" "}
                <a
                  href="https://github.com/arb-consulting/shallow-review-2025/blob/main/main-pipeline/data/data-dump-classify.csv"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  candidate links
                </a>
                . We are not aware of any proper studies of “LLM laziness” but
                it’s{" "}
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

            <p className="text-gray-700">
              For finding critiques we used LW backlinks, Google Scholar
              cited-by, manual search, collected links, and{" "}
              <a
                href="https://ahrefs.com/backlink-checker/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahrefs
              </a>
              . Technical critiques are somewhat rare, though, and even then our
              coverage here is likely severely lacking. We generally do not
              include social network critiques (mostly due to scope).
            </p>
            <p className="text-gray-700 mt-2">
              Despite this effort we will not have included all relevant papers
              and names. The omission of a paper or a researcher is not strong
              negative evidence about their relevance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Processing
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Collecting links throughout the year and at project start.
                Skimming papers, staring at long lists.
              </li>
              <li>
                We drafted a taxonomy of research agendas. Based on last
                year&apos;s{" "}
                <a
                  href="https://www.lesswrong.com/posts/fAW6RXLKTLHC3WXkS/shallow-review-of-technical-ai-safety-2024"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  list
                </a>
                , our expertise and the initial paper collection, though we
                changed the structure to accommodate shifts in the domain: the
                top-level split is now “black-box” vs “white-box” instead of
                “control” vs “understanding”.
              </li>
              <li>
                At around 300 links collected manually (and growing fast), we
                decided to implement simple pipelines for crawling, scraping and
                LLM metadata extraction, pre-filtering and pre-classification
                into agendas, as well as other tasks – including final
                formatting later. The use of LLMs was limited to one simple task
                at a time, and the results were closely watched and reviewed.
                Code and data{" "}
                <a
                  href="https://github.com/arb-consulting/shallow-review-2025"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </li>
              <li>
                We tried getting the AI to update our taxonomy bottom-up to fit
                the body of papers, but the results weren’t very good. Though we
                are looking at some advanced options (specialized embedding or
                feature extraction and clustering or t-SNE etc.)
              </li>
              <li>
                Work on the ~70 agendas was distributed among the team. We ended
                up making many local changes to the taxonomy, esp. splitting up
                and merging agendas. The taxonomy is specific to this year, and
                will need to be adapted in coming years.
              </li>
              <li>
                We moved any agendas without public outputs this year to the
                bottom, and the inactive ones to the Graveyard. For most of
                them, we checked with people from the agendas for outputs or
                work we may have missed.
              </li>
              <li>
                What started as a brief summary editorial grew into{" "}
                <a
                  href="https://www.lesswrong.com/posts/Q9ewXs8pQSAX5vL7H/ai-in-2025-gestalt"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  its own thing
                </a>{" "}
                (6000w).
              </li>
              <li>
                We asked 10 friends in AI safety to review the ~80 page draft.
                After editing and formatting, we asked 50 technical AI safety
                researchers for a quick review focused on their expertise.
              </li>
              <li>
                The field is growing at around 20% a year. There will come a
                time that this list isn&apos;t sensible to do manually even with
                the help of LLMs (at this granularity anyway). We may come up
                with better alternatives than lists and posts by then, though.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Taxonomy Classification
            </h2>
            <p className="text-gray-700 mb-4">
              We added our best guess about which of{" "}
              <a
                href="https://www.lesswrong.com/posts/mnoc3cKY3gXMrTybs/a-list-of-core-ai-safety-problems-and-how-i-hope-to-solve"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Davidad’s alignment problems
              </a>{" "}
              the agenda would make an impact on if it succeeded, as well as its
              research approach and implied optimism in{" "}
              <a
                href="https://www.lesswrong.com/posts/67fNBeHrjdrZZNDDK/defining-alignment-research#A_better_definition_of_alignment_research"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Richard Ngo’s 3x3
              </a>
              .
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
                  Which deep orthodox subproblems could this agenda ideally
                  solve?
                </p>
              </Link>

              <Link
                href="/target-cases"
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-600">
                  Target Cases &rarr;
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  What part of the distribution over alignment difficulty do
                  they aim to help with?
                </p>
              </Link>

              <Link
                href="/broad-approaches"
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-600">
                  Broad Approaches &rarr;
                </h3>
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
              This review exists in the context of many other efforts to map AI
              safety research:
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Major changes from 2024
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                A few major changes to the taxonomy: the top-level split is now
                “black-box” vs “white-box” instead of “control” vs
                “understanding”. (We did try out an automated clustering but it
                wasn’t very good.)
              </li>
              <li>
                The agendas are in general less charisma-based and more about
                solution type.
              </li>
              <li>
                We did a systematic Arxiv scrape on the word “alignment” (and
                filtered out the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Sequence_alignment"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sequence indexing
                </a>{" "}
                papers that fell into this pipeline). “
                <a
                  href="https://arxiv.org/pdf/2510.06084"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steerability
                </a>
                ” is one competing term used by academics.
              </li>
              <li>
                We scraped &gt;3000 links (arXiv, LessWrong, several alignment
                publication lists, blogs and conferences), conservatively
                filtering and pre-categorizing them with a LLM pipeline. All
                curated later, many more added manually.
              </li>
              <li>
                This review has ~800 links compared to ~300 in 2024 and ~200 in
                2023. We looked harder and the field has grown.
              </li>
              <li>We don’t collate public funding figures.</li>
              <li>
                New sections: “Labs”, “Multi-agent First”, “Better data”,
                “Model specs”, “character training” and “representation
                geometry”. ”Evals” is so massive it gets a top-level section.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Orgs without public outputs this year
            </h2>
            <p className="text-gray-700 mb-4">
              We are not aware of public technical AI safety output with these
              agendas and organizations, though they are active otherwise.
            </p>
            <ul className="space-y-2">
              {inactiveOrgs.map((org, i) => (
                <li key={i} className="text-gray-700">
                  {org.url ? (
                    <a
                      href={org.url}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {org.name}
                    </a>
                  ) : (
                    <span>{org.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Graveyard (known to be inactive)
            </h2>
            <ul className="space-y-2">
              {graveyard.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.url ? (
                    <a
                      href={item.url}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </li>
              ))}
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
