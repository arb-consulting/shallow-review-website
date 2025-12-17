# Methods

## Structure

We have again settled for a tree data structure for this post – but people and work can appear in multiple nodes so it’s not a dumb partition. Richer representation structures may be in the works.

The level of analysis for each node in the tree is the “research agenda”, an abstraction spanning multiple papers and organisations in a messy many-to-many relation. What makes something an agenda? Similar methods, similar aims, or something sociological about leaders and collaborators. Agendas vary greatly in their degree of coherent agency, from the very coherent Anthropic Circuits work to the enormous, leaderless and unselfconscious “iterative alignment”.)

## Scope

30th November 2024 – 30th November 2025 (with a few exceptions).

We’re focussing on “technical AGI safety”. We thus ignore a lot of work relevant to the overall risk: misuse, policy, strategy, [OSINT](https://sentinel-team.org/), [resilience](http://airesilience.net/) and [indirect risk](https://www.forethought.org/research/project-ideas-for-making-transformative-ai-go-well-other-than-by-working-on-alignment), [AI](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214) [rights](https://arxiv.org/abs/2510.26396), general capabilities evals, and things closer to “[technical policy](https://docs.google.com/document/d/1BGsbwELOQRKVOO8Ho8S4no1BQeYdjbRZpBmRyk7kOVo/edit?usp=sharing)” and like [products](https://themultiplicity.ai/) (like standards, legislation, SL4 datacentres, and automated cybersecurity). We also mostly focus on papers and blogposts (rather than say, underground gdoc samizdat or Discords).

We only use public information, so we are off by some additional unknown factor.

We try to include things which are early-stage and illegible – but in general we fail and mostly capture legible work on [legible problems](https://www.lesswrong.com/posts/PMc65HgRFvBimEpmJ/legible-vs-illegible-ai-safety-problems) (i.e. things you can write a paper on already).

Of the 2000+ links to papers, organizations and posts in the raw scrape, about 700 made it in.

## Paper sources

-   All arXiv papers with “AI alignment”, “AI safety”, or “steerability” in the abstract or title; all papers of ~120 AI safety researchers
-   All Alignment Forum posts and all LW posts under “[AI](https://www.lesswrong.com/w/ai)”
-   [Gasteiger’s links](https://aisafetyfrontier.substack.com/), [Paleka’s links](https://newsletter.danielpaleka.com/), [Lenz’s links](https://aisafetypapers.com/), [Zvi’s links](https://thezvi.substack.com/)
-   [Ad hoc Twitter](https://x.com/g_leech_/following) for a year, several conference pages and workshops
-   AI scrapes miss lots of things. We did a proper pass with a software scraper of over 3000 links collected from the above and LLM crawl of some of the pages, and then an LLM pass to pre-filter the links for relevance and pre-assign the links to agendas and areas, but this also had systematic omissions. We ended up doing a full manual pass over a conservatively LLM-pre-filtered links and re-classifying the links and papers. The code and data can be found [here](https://github.com/arb-consulting/shallow-review-2025), including the 3300 collected [candidate links](https://github.com/arb-consulting/shallow-review-2025/blob/main/main-pipeline/data/data-dump-classify.csv). We are not aware of any proper studies of “LLM laziness” but it’s [known](https://joshuaberkowitz.us/blog/papers-7/llmigrate-turns-lazy-llms-into-reliable-c-to-rust-translators-846) amongst power users of copilots.
-   For finding critiques we used LW backlinks, Google Scholar cited-by, manual search, collected links, and [Ahrefs](https://ahrefs.com/backlink-checker/). Technical critiques are somewhat rare, though, and even then our coverage here is likely severely lacking. We generally do not include social network critiques (mostly due to scope).
-   Despite this effort we will not have included all relevant papers and names. The omission of a paper or a researcher is not strong negative evidence about their relevance.

## Processing

-   Collecting links throughout the year and at project start. Skimming papers, staring at long lists.
-   We drafted a taxonomy of research agendas. Based on last year’s [list](https://www.lesswrong.com/posts/fAW6RXLKTLHC3WXkS/shallow-review-of-technical-ai-safety-2024), our expertise and the initial paper collection, though we changed the structure to accommodate shifts in the domain: the top-level split is now “black-box” vs “white-box” instead of “control” vs “understanding”.
-   At around 300 links collected manually (and growing fast), we decided to implement simple pipelines for crawling, scraping and LLM metadata extraction, pre-filtering and pre-classification into agendas, as well as other tasks – including final formatting later. The use of LLMs was limited to one simple task at a time, and the results were closely watched and reviewed. Code and data [here](https://github.com/arb-consulting/shallow-review-2025).
-   We tried getting the AI to update our taxonomy bottom-up to fit the body of papers, but the results weren’t very good. Though we are looking at some advanced options (specialized embedding or feature extraction and clustering or t-SNE etc.)
-   Work on the ~70 agendas was distributed among the team. We ended up making many local changes to the taxonomy, esp. splitting up and merging agendas. The taxonomy is specific to this year, and will need to be adapted in coming years.
-   We moved any agendas without public outputs this year to the bottom, and the inactive ones to the Graveyard. For most of them, we checked with people from the agendas for outputs or work we may have missed.
-   What started as a brief summary editorial grew into [its own thing](https://www.lesswrong.com/posts/Q9ewXs8pQSAX5vL7H/ai-in-2025-gestalt) (6000w).
-   We asked 10 friends in AI safety to review the ~80 page draft. After editing and formatting, we asked 50 technical AI safety researchers for a quick review focused on their expertise.
-   The field is growing at around 20% a year. There will come a time that this list isn't sensible to do manually even with the help of LLMs (at this granularity anyway). We may come up with better alternatives than lists and posts by then, though.

### Other classifications

We added our best guess about which of [Davidad’s alignment problems](https://www.lesswrong.com/posts/mnoc3cKY3gXMrTybs/a-list-of-core-ai-safety-problems-and-how-i-hope-to-solve) the agenda would make an impact on if it succeeded, as well as its research approach and implied optimism in [Richard Ngo’s 3x3](https://www.lesswrong.com/posts/67fNBeHrjdrZZNDDK/defining-alignment-research#A_better_definition_of_alignment_research).

-   [Which deep orthodox subproblems](https://www.lesswrong.com/posts/mnoc3cKY3gXMrTybs/a-list-of-core-ai-safety-problems-and-how-i-hope-to-solve) could it ideally solve? (via Davidad)
-   [The _target case_](https://www.lesswrong.com/posts/67fNBeHrjdrZZNDDK/defining-alignment-research#A_better_definition_of_alignment_research): what part of the distribution over alignment difficulty do they aim to help with? (via Ngo)
    -   “optimistic-case”: if CoT is faithful, pretraining as value loading, no stable mesa-optimizers, the relevant scary capabilities are harder than alignment, zero-shot deception is hard, goals are myopic, etc
    -   pessimistic-case: if we’re in-between the above and the below
    -   worst-case: if power-seeking is rife, zero-shot deceptive alignment, steganography, gradient hacking, weird machines, weird coordination, [deep deceptiveness](https://www.lesswrong.com/posts/XWwvwytieLtEWaFJX/deep-deceptiveness)
-   [The _broad approach:_](https://www.lesswrong.com/posts/67fNBeHrjdrZZNDDK/defining-alignment-research#A_better_definition_of_alignment_research) roughly what kind of work is it doing, primarily? (via Ngo)
    -   engineering: iterating over outputs
    -   behavioural: understanding the input-output relationship
    -   cognitive: understanding the algorithms
    -   maths/philosophy: providing concepts for the other approaches

![](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/wScohuNkKBrHgy5os/crcq39zt6yc2dgzigest)

## Other reviews and taxonomies

-   [aisafety.com org “cards”](https://www.aisafety.com/map#cards)
-   [nonprofits.zone](https://nonprofits.zone/)
-   [Leong and Linsefors](https://docs.google.com/document/d/1Mis0ZxuS-YIgwy4clC7hKrKEcm6Pn0yn709YUNVcpx8/edit?tab=t.0)
-   [Coefficient Giving RFP](https://www.lesswrong.com/posts/26SHhxK2yYQbh7ors/research-directions-open-phil-wants-to-fund-in-technical-ai)
-   [Peregrine Report](https://riskmitigation.ai/)
-   [The Singapore Consensus on Global AI Safety Research Priorities](https://arxiv.org/abs/2506.20702)
-   [International AI Safety Report 2025](https://arxiv.org/abs/2501.17805), along with their [first](https://arxiv.org/abs/2510.13653) and [second](https://arxiv.org/abs/2511.19863) key updates
-   [A Comprehensive Survey in LLM(-Agent) Full Stack Safety: Data, Training and Deployment](https://arxiv.org/pdf/2504.15585)
-   plex’s [Review of AI safety funders](https://www.lesswrong.com/posts/KZPNbHs9RsoeZShkJ/plex-s-shortform?commentId=hCbJkBd9s23PEeLAL)
-   [The Alignment Project](https://www.lesswrong.com/s/wvLzDiWQWBC9b5HGa)
-   [AI Awareness literature review](https://arxiv.org/abs/2504.20084)
-   [aisafety.com/self-study](https://www.aisafety.com/self-study)
-   [Zach Stein-Perlman’s list](https://docs.google.com/spreadsheets/d/10_dzImDvHq7eEag6paK6AmIdAGMBOA7yXUvumODhZ5U/edit?gid=1813700452#gid=1813700452) 
-   [IAPS](https://github.com/Oscar-Delaney/safe_AI_papers)
-   [AI Safety Camp 10 Outputs](https://www.lesswrong.com/posts/3sjtEXzbwDpyALR4H/ai-safety-camp-10-outputs)
-   [The Road to Artificial SuperIntelligence](https://arxiv.org/abs/2412.16468)
-   [AE Studio field guide](https://www.ae.studio/essays/whos-actually-preventing-the-paperclip-apocalypse-a-field-guide-to-ai-alignment-organizations)
-   [AI Alignment: A Contemporary Survey](https://dl.acm.org/doi/pdf/10.1145/3770749)

## Major changes from 2024

-   A few major changes to the taxonomy: the top-level split is now “black-box” vs “white-box” instead of “control” vs “understanding”. (We did try out an automated clustering but it wasn’t very good.)
-   The agendas are in general less charisma-based and more about solution type.
-   We did a systematic Arxiv scrape on the word “alignment” (and filtered out the [sequence indexing](https://en.wikipedia.org/wiki/Sequence_alignment) papers that fell into this pipeline). “[Steerability](https://arxiv.org/pdf/2510.06084)” is one competing term used by academics.
-   We scraped >3000 links (arXiv, LessWrong, several alignment publication lists, blogs and conferences), conservatively filtering and pre-categorizing them with a LLM pipeline. All curated later, many more added manually.
-   This review has ~800 links compared to ~300 in 2024 and ~200 in 2023. We looked harder and the field has grown.
-   We don’t collate public funding figures.
-   New sections: “Labs”, “Multi-agent First”, “Better data”, “Model specs”, “character training” and “representation geometry”. ”Evals” is so massive it gets a top-level section.


# Orgs without public outputs this year

We are not aware of public technical AI safety output with these agendas and organizations, though they are active otherwise.

-   [Safe Superintelligence Inc.](https://ssi.inc/) (SSI)
-   Conjecture: Cognitive Software
-   [Orthogonal / QACI](https://orxl.org/)
-   [modelingcooperation.com](https://www.modelingcooperation.com/research)
-   [Pr(Ai)2R](https://prair.group/)
-   [Astera Obelisk](https://astera.org/program/obelisk/)
-   [Coordinal Research](https://coordinal.org/) (Thibodeau)
-   [Workshop Labs](https://workshoplabs.ai/) (Drago, Laine)

## Graveyard (known to be inactive)

-   [Adversarially Robust Augmentation and Distillation](https://www.lesswrong.com/posts/RRvdRyWrSqKW2ANL9/alignment-proposal-adversarially-robust-augmentation-and)
-   Half of FAIR including [JEPA](https://www.ft.com/content/c586eb77-a16e-4363-ab0b-e877898b70de)
-   [Science of Evals](https://www.apolloresearch.ai/blog/we-need-a-science-of-evals/) (but [see](https://arxiv.org/pdf/2503.05336))


See the [About](/about) page for details.

