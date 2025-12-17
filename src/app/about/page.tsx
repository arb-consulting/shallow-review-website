import Link from "next/link";
import { Metadata } from "next";
import { APP_SHORT_TITLE } from "@/constants/app";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: `About | ${APP_SHORT_TITLE}`,
  description:
    "About the Shallow Review of Technical AI Safety - authors, acknowledgments, and context.",
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">About This Review</h1>
        
        <div className="prose prose-gray max-w-none text-gray-700">
          <p className="italic mb-6">
            This is the third annual review of what’s going on in technical AI safety. This review is also published as a <a href="https://www.lesswrong.com/posts/Wti4Wr7Cf5ma3FGWa/shallow-review-of-technical-ai-safety-2025-2" target="_blank" rel="noopener noreferrer">LessWrong and Alignment Forum post</a>, and is accompanied by an opinionated editorial: <a href="https://www.lesswrong.com/posts/Q9ewXs8pQSAX5vL7H/ai-in-2025-gestalt" target="_blank" rel="noopener noreferrer">AI in 2025: gestalt</a>.
          </p>

          <hr className="my-8 border-gray-200" />

          <p className="mb-6">
            It’s shallow in the sense that 1) we are not specialists in almost any of it and that 2) we only spent about two hours on each entry. Still, among other things, we processed every arXiv paper on alignment, all Alignment Forum posts, as well as a year’s worth of Twitter.
          </p>

          <p className="mb-6">
            It is substantially a list of lists structuring around 800 links. The point is to produce stylised facts, forests out of trees; to help you look up what’s happening, or that thing you vaguely remember reading about; to help new researchers orient, know some of their options and the standing critiques; and to help you find who to talk to for actual information. We also track things which didn’t pan out.
          </p>

          <p className="mb-6">
            Here, “AI safety” means technical work intended to prevent <em>future</em> cognitive systems from having large unintended negative effects on the world. So it’s capability restraint, instruction-following, value alignment, control, and risk awareness work.
          </p>

          <div className="my-8">
            <img 
              src="/images/ai-safety-diagram.png"
              alt="AI Safety Diagram" 
              className="rounded-lg shadow-sm w-full"
            />
          </div>

          <p className="mb-6">
            We don’t cover security or resilience at all.
          </p>

          <p className="mb-6">
            We ignore a lot of relevant work (including most of capability restraint): things like misuse, policy, strategy, <a href="https://sentinel-team.org/" target="_blank" rel="noopener noreferrer">OSINT</a>, <a href="http://airesilience.net/" target="_blank" rel="noopener noreferrer">resilience</a> and <a href="https://www.forethought.org/research/project-ideas-for-making-transformative-ai-go-well-other-than-by-working-on-alignment" target="_blank" rel="noopener noreferrer">indirect risk</a>, <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214" target="_blank" rel="noopener noreferrer">AI</a> <a href="https://arxiv.org/abs/2510.26396" target="_blank" rel="noopener noreferrer">rights</a>, general capabilities evals, and things closer to “<a href="https://docs.google.com/document/d/1BGsbwELOQRKVOO8Ho8S4no1BQeYdjbRZpBmRyk7kOVo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">technical policy</a>” and <a href="https://themultiplicity.ai/" target="_blank" rel="noopener noreferrer">products</a> (like standards, legislation, SL4 datacentres, and automated cybersecurity). We focus on papers and blogposts (rather than say, gdoc samizdat or tweets or Githubs or Discords). We only use public information, so we are off by some additional unknown factor.
          </p>

          <p className="mb-6">
            We try to include things which are early-stage and illegible – but in general we fail and mostly capture legible work on <a href="https://www.lesswrong.com/posts/PMc65HgRFvBimEpmJ/legible-vs-illegible-ai-safety-problems" target="_blank" rel="noopener noreferrer">legible problems</a> (i.e. things you can write a paper on already).
          </p>

          <p className="mb-6">
            Even ignoring all of that as we do, it’s still too long to read. Here’s a spreadsheet version (<a href="https://docs.google.com/spreadsheets/d/1uwqeSkl1fGO7bWbbDdNi5QbJ_Zw_a6HO-XlnO18ohLc/edit?gid=249818450#gid=249818450" target="_blank" rel="noopener noreferrer">agendas</a> and <a href="https://docs.google.com/spreadsheets/d/1uwqeSkl1fGO7bWbbDdNi5QbJ_Zw_a6HO-XlnO18ohLc/edit?gid=803096912#gid=803096912" target="_blank" rel="noopener noreferrer">papers</a>) and <a href="https://github.com/arb-consulting/shallow-review-2025" target="_blank" rel="noopener noreferrer">the github repo</a> including the data and the processing pipeline. Methods down the bottom. Gavin’s editorial outgrew this post and became <a href="https://www.lesswrong.com/posts/Q9ewXs8pQSAX5vL7H/ai-in-2025-gestalt" target="_blank" rel="noopener noreferrer">its own thing</a>.
          </p>

          <p className="mb-6">
            If we missed something big or got something wrong, please comment, we will edit it in.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8 not-prose">
            <p className="text-blue-700 m-0 font-medium">
              Feedback: <a href="https://forms.gle/hT5caPmV3VSxidqd9" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Submit feedback via this form</a>
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Authors</h2>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li><a href="https://www.gleech.org/" target="_blank" rel="noopener noreferrer">Gavin Leech</a></li>
              <li><a href="https://gavento.cz/" target="_blank" rel="noopener noreferrer">Tomáš Gavenčiak</a></li>
              <li><a href="https://www.lesswrong.com/users/stephen-mcaleese" target="_blank" rel="noopener noreferrer">Stephen McAleese</a></li>
              <li><a href="https://www.lesswrong.com/users/peligrietzer" target="_blank" rel="noopener noreferrer">Peli Grietzer</a></li>
              <li><a href="https://www.lesswrong.com/users/stag" target="_blank" rel="noopener noreferrer">Stag Lynn</a></li>
              <li><a href="https://www.lesswrong.com/users/jordine" target="_blank" rel="noopener noreferrer">jordine</a></li>
              <li><a href="https://www.lesswrong.com/users/ozziegooen" target="_blank" rel="noopener noreferrer">Ozzie Gooen</a></li>
              <li><a href="https://www.lesswrong.com/users/violet-hour" target="_blank" rel="noopener noreferrer">Violet Hour</a></li>
              <li><a href="https://www.lesswrong.com/users/ramennaut-1" target="_blank" rel="noopener noreferrer">ramennaut</a></li>
            </ul>
            <p className="mt-4 mb-6">
              This website was created for the Shallow Review project by <a href="https://quantifieduncertainty.org/" target="_blank" rel="noopener noreferrer">QURI</a>, Ozzie and Tomáš.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
            <p className="italic mb-4">
              These people generously helped with the review by providing expert feedback, literature sources, advice, or otherwise. Any remaining mistakes remain ours.
            </p>
            <p className="mb-6">
              Thanks to Neel Nanda, Owain Evans, Stephen Casper, Alex Turner, Caspar Oesterheld, Steve Byrnes, Adam Shai, Séb Krier, Vanessa Kosoy, Nora Ammann, David Lindner, John Wentworth, Vika Krakovna, Filip Sondej, JS Denain, Jan Kulveit, Mary Phuong, Linda Linsefors, Yuxi Liu, Ben Todd, Ege Erdil, Tan Zhi-Xuan, Jess Riedel, Mateusz Bagiński, Roland Pihlakas, Walter Laurito, Vojta Kovařík, David Hyland, plex, Shoshannah Tekofsky, Fin Moorhouse, Misha Yagudin, Nandi Schoots, Nuno Sempere, and others for helpful comments.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Epigram</h2>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-8">
              <p className="mb-2">
                No punting — we can’t keep building nanny products. Our products are overrun with filters and punts of various kinds. We need capable products and [to] trust our users.
              </p>
              <footer className="text-sm text-gray-500 not-italic">— Sergey Brin</footer>
            </blockquote>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
              <p className="mb-2">
                Over the decade I&apos;ve spent working on AI safety, I&apos;ve felt an overall trend of divergence; research partnerships starting out with a sense of a common project, then slowly drifting apart over time… eventually, two researchers are going to have some deep disagreement in matters of taste, which sends them down different paths.
              </p>
              <p className="mb-2">
                Until the spring of this year, that is… something seemed to shift, subtly at first. After I gave a talk — roughly the same talk I had been giving for the past year — I had an excited discussion about it with Scott Garrabrant. Looking back, it wasn&apos;t so different from previous chats we had had, but the impact was different; it felt more concrete, more actionable, something that really touched my research rather than remaining hypothetical. In the subsequent weeks, discussions with my usual circle of colleagues took on a different character — somehow it seemed that, after all our diverse explorations, we had arrived at a shared space.
              </p>
              <footer className="text-sm text-gray-500 not-italic">— Abram Demski</footer>
            </blockquote>
          </section>

          <div className="mt-12 flex flex-col items-center">
             <img 
              src="/images/arb-logo.png"
              alt="Arb Logo" 
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-sm text-gray-500 italic">
              Brought to you by the <a href="https://arbresearch.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Arb Corporation</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
