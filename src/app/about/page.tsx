import Link from "next/link";
import { Metadata } from "next";
import { APP_TITLE, APP_AUTHORS, APP_SHORT_TITLE } from "@/constants/app";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: `About | ${APP_SHORT_TITLE}`,
  description:
    "About the Shallow Review of Technical AI Safety - scope, structure, and acknowledgments",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-700">About</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">About This Review</h1>
        <p className="text-gray-600 text-lg mb-8">
        </p>
        <div className="prose prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is This?</h2>
            <p className="text-gray-700 mb-4">
              This is the third annual review of what&apos;s going on in technical AI safety.
              It&apos;s shallow in the sense that 1) we are not specialists in almost any of it
              and that 2) we only spent about an hour on each entry. Still, among other things,
              we processed every arXiv paper on alignment, all Alignment Forum posts, as well as
              a year&apos;s worth of Twitter.
            </p>
            <p className="text-gray-700 mb-4">
              It is substantially a list of lists structuring around 800 links. The point is to
              produce stylised facts, forests out of trees; to help you look up what&apos;s
              happening, or that thing you vaguely remember reading about; to help new
              researchers orient, know some of their options and the standing critiques; and to
              help you find who to talk to for actual information. We also track things which
              didn&apos;t pan out.
            </p>
            <p className="text-gray-700 mb-4">
              Here, &quot;AI safety&quot; means technical work intended to prevent{" "}
              <em>future</em> cognitive systems from having large unintended negative effects on
              the world. So it&apos;s capability restraint, instruction-following, value
              alignment, control, and risk awareness work.
            </p>
            <p className="text-gray-700 mb-4">
              We ignore a lot of relevant work (including most of capability restraint): things
              like misuse, policy, strategy,{" "}
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
              policy&quot; and products (like standards, legislation, SL4 datacentres, and
              automated cybersecurity). We focus on papers and blogposts (rather than say, gdoc
              samizdat or tweets or Githubs or Discords). We only use public information, so we
              are off by some additional unknown factor.
            </p>
            <p className="text-gray-700 mb-4">
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
            </p>
            <p className="text-gray-700 mb-4">
              An{" "}
              <a
                href="https://arbresearch.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arb Research
              </a>{" "}
              project. Work funded by Coefficient Giving.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Structure</h2>
            <p className="text-gray-700 mb-4">
              We have again settled for a tree data structure for this post – but people and
              work can appear in multiple nodes so it&apos;s not a dumb partition. Richer
              representations may be in the works.
            </p>
            <p className="text-gray-700 mb-4">
              The level of analysis for each node in the tree is the &quot;research agenda&quot;,
              an abstraction spanning multiple papers and organisations in a messy many-to-many
              relation. What makes something an agenda? Similar methods, similar aims, or
              something sociological about leaders and collaborators. Agendas vary greatly in
              their degree of coherent agency, from the very coherent Anthropic Circuits work to
              the enormous, leaderless and unselfconscious &quot;iterative alignment&quot;.
            </p>
            <p className="text-gray-700">
              For an org-first view see{" "}
              <a
                href="https://aisafety.com/map#cards"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aisafety.com
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope</h2>
            <p className="text-gray-700 mb-4">
              <strong>Time period:</strong> 30th November 2024 – 30th November 2025.
            </p>
            <p className="text-gray-700 mb-4">
              We focus on <strong>&quot;technical AGI safety&quot;</strong>. We thus ignore a
              lot of work relevant to the overall risk: misuse, policy, strategy, OSINT,
              resilience and indirect risk, AI rights, general capabilities evals, and things
              closer to &quot;technical policy&quot; like products (standards, legislation, SL4
              datacentres, and automated cybersecurity). We also mostly focus on papers and
              blogposts rather than underground gdoc samizdat or Discords.
            </p>
            <p className="text-gray-700 mb-4">
              We only use public information, so we are off by some additional unknown factor.
            </p>
            <p className="text-gray-700">
              We try to include things which are early-stage and illegible — but in general we
              fail and mostly capture legible work on legible problems (i.e. things you can
              write a paper on already).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Classification Dimensions</h2>
            <p className="text-gray-700 mb-4">
              We classify each agenda along three dimensions:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link href="/orthodox-problems" className="text-blue-600 hover:underline">
                    Orthodox Problems
                  </Link>{" "}
                  <span className="text-gray-500 font-normal">(via Davidad)</span>
                </h3>
                <p className="text-gray-600 text-sm">
                  Which deep alignment subproblems could this agenda ideally help solve?
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link href="/target-cases" className="text-blue-600 hover:underline">
                    Target Case
                  </Link>{" "}
                  <span className="text-gray-500 font-normal">(via Ngo)</span>
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  What part of the distribution over alignment difficulty do they aim to help with?
                </p>
                <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                  <li>
                    <strong>Optimistic:</strong> CoT is faithful, pretraining as value loading,
                    no stable mesa-optimizers, relevant scary capabilities are harder than
                    alignment, zero-shot deception is hard, goals are myopic, etc.
                  </li>
                  <li>
                    <strong>Pessimistic:</strong> In-between optimistic and worst-case
                  </li>
                  <li>
                    <strong>Worst-case:</strong> Power-seeking is rife, zero-shot deceptive
                    alignment, steganography, gradient hacking, weird machines, weird
                    coordination, deep deceptiveness
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link href="/broad-approaches" className="text-blue-600 hover:underline">
                    Broad Approach
                  </Link>{" "}
                  <span className="text-gray-500 font-normal">(via Ngo)</span>
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Roughly what kind of work is it doing, primarily?
                </p>
                <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                  <li>
                    <strong>Engineering:</strong> Iterating over outputs
                  </li>
                  <li>
                    <strong>Behavioural:</strong> Understanding the input-output relationship
                  </li>
                  <li>
                    <strong>Cognitive:</strong> Understanding the algorithms
                  </li>
                  <li>
                    <strong>Maths/Philosophy:</strong> Providing concepts for the other approaches
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes This Year</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                A few major changes to the taxonomy: the top-level split is now
                &quot;black-box&quot; vs &quot;white-box&quot; instead of &quot;control&quot; vs
                &quot;understanding&quot;. (We did try out an automated clustering but it
                wasn&apos;t very good.)
              </li>
              <li>
                The agendas are in general less charisma-based and more about solution type.
              </li>
              <li>
                We did a systematic Arxiv scrape on the word &quot;alignment&quot; (and filtered
                out the sequence indexing papers that fell into this pipeline).
                &quot;Steerability&quot; is one competing term used by academics.
              </li>
              <li>
                We scraped over 3000 links (arXiv, LessWrong, several alignment publication
                lists, blogs and conferences), conservatively filtering and pre-categorizing them
                with a LLM pipeline. All curated later, many more added manually.
              </li>
              <li>
                This review has ~800 links compared to ~300 in 2024 and ~200 in 2023. We looked
                harder and the field has grown.
              </li>
              <li>We don&apos;t collate public funding figures.</li>
              <li>
                New sections: &quot;Labs&quot;, &quot;Multi-agent First&quot;, &quot;Better
                data&quot;, &quot;Model specs&quot;, &quot;character training&quot; and
                &quot;representation geometry&quot;. &quot;Evals&quot; is so massive it gets a
                top-level section.
              </li>
            </ul>
            <p className="text-gray-700">
              The field is growing at around 20% a year. There will come a time that this list
              isn&apos;t sensible to do manually even with conservative help of LLMs, at this
              granularity anyway. We may have better alternatives for this by that time, though.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acknowledgments</h2>
            <p className="text-gray-700 mb-4">
              We asked 10 of our friends in AI safety to review the ~80 page beast of a post.
              After editing, last-minute additions and formatting, we reached to over 60 experts
              in technical AI safety asking for a quick review of their domains. The coverage is
              not perfect; all mistakes are our own.
            </p>
            <p className="text-gray-700">
              Thanks to Seb Krier, Yuxi Liu, Ben Todd, Ege Erdil, Tan Zhi-Xuan, Mateusz
              Bagiński, Vojta Kovařík, David Hyland, plex, Shoshannah Tekofsky, Fin Moorhouse,
              and Misha Yagudin for helpful comments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More Information</h2>
            <p className="text-gray-700">
              See our{" "}
              <Link href="/methodology" className="text-blue-600 hover:underline">
                Methodology
              </Link>{" "}
              page for details on sources, data processing, and other reviews in this space.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Epigrams</h2>
            <div className="space-y-12">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                <p className="mb-2">
                  &quot;No punting — we can&apos;t keep building nanny products. Our products
                  are overrun with filters and punts of various kinds. We need capable products
                  and [to] trust our users.&quot;
                </p>
                <footer className="text-sm text-gray-500 not-italic">— Sergey Brin</footer>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                <p className="mb-2">
                  &quot;Over the decade I&apos;ve spent working on AI safety, I&apos;ve felt an
                  overall trend of divergence; research partnerships starting out with a sense
                  of a common project, then slowly drifting apart over time… eventually, two
                  researchers are going to have some deep disagreement in matters of taste,
                  which sends them down different paths.
                </p>
                <p className="mb-2">
                  Until the spring of this year, that is… something seemed to shift, subtly at
                  first. After I gave a talk — roughly the same talk I had been giving for the
                  past year — I had an excited discussion about it with Scott Garrabrant.
                  Looking back, it wasn&apos;t so different from previous chats we had had, but
                  the impact was different; it felt more concrete, more actionable, something
                  that really touched my research rather than remaining hypothetical. In the
                  subsequent weeks, discussions with my usual circle of colleagues took on a
                  different character — somehow it seemed that, after all our diverse
                  explorations, we had arrived at a shared space.&quot;
                </p>
                <footer className="text-sm text-gray-500 not-italic pb-4">— Abram Demski</footer>
              </blockquote>
            </div>

            <p className="text-gray-500 text-sm mt-8 italic">
              Brought to you by the Arb Corporation: skin clear, crops thriving, grades up.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
