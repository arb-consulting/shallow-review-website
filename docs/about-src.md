*This is the third annual review of what’s going on in technical AI safety. This review is also published as a [LessWrong and Alignment Forum post](https://www.lesswrong.com/posts/Wti4Wr7Cf5ma3FGWa/shallow-review-of-technical-ai-safety-2025-2), and is accompanied by an opinionated editorial: [AI in 2025: gestalt](https://www.lesswrong.com/posts/Q9ewXs8pQSAX5vL7H/ai-in-2025-gestalt).*

---

It’s shallow in the sense that 1) we are not specialists in almost any of it and that 2) we only spent about two hours on each entry. Still, among other things, we processed every arXiv paper on alignment, all Alignment Forum posts, as well as a year’s worth of Twitter.

It is substantially a list of lists structuring around 800 links. The point is to produce stylised facts, forests out of trees; to help you look up what’s happening, or that thing you vaguely remember reading about; to help new researchers orient, know some of their options and the standing critiques; and to help you find who to talk to for actual information. We also track things which didn’t pan out.

Here, “AI safety” means technical work intended to prevent _future_ cognitive systems from having large unintended negative effects on the world. So it’s capability restraint, instruction-following, value alignment, control, and risk awareness work.

![](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/wScohuNkKBrHgy5os/zxovntgbnwuydf9ohbfp)

We don’t cover security or resilience at all.

We ignore a lot of relevant work (including most of capability restraint): things like misuse, policy, strategy, [OSINT](https://sentinel-team.org/), [resilience](http://airesilience.net/) and [indirect risk](https://www.forethought.org/research/project-ideas-for-making-transformative-ai-go-well-other-than-by-working-on-alignment), [AI](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214) [rights](https://arxiv.org/abs/2510.26396), general capabilities evals, and things closer to “[technical policy](https://docs.google.com/document/d/1BGsbwELOQRKVOO8Ho8S4no1BQeYdjbRZpBmRyk7kOVo/edit?usp=sharing)” and [products](https://themultiplicity.ai/) (like standards, legislation, SL4 datacentres, and automated cybersecurity). We focus on papers and blogposts (rather than say, gdoc samizdat or tweets or Githubs or Discords). We only use public information, so we are off by some additional unknown factor.

We try to include things which are early-stage and illegible – but in general we fail and mostly capture legible work on [legible problems](https://www.lesswrong.com/posts/PMc65HgRFvBimEpmJ/legible-vs-illegible-ai-safety-problems) (i.e. things you can write a paper on already).

Even ignoring all of that as we do, it’s still too long to read. Here’s a spreadsheet version ([agendas](https://docs.google.com/spreadsheets/d/1uwqeSkl1fGO7bWbbDdNi5QbJ_Zw_a6HO-XlnO18ohLc/edit?gid=249818450#gid=249818450) and [papers](https://docs.google.com/spreadsheets/d/1uwqeSkl1fGO7bWbbDdNi5QbJ_Zw_a6HO-XlnO18ohLc/edit?gid=803096912#gid=803096912)) and [the github repo](https://github.com/arb-consulting/shallow-review-2025) including the data and the processing pipeline. Methods down the bottom. Gavin’s editorial outgrew this post and became [its own thing](https://www.lesswrong.com/posts/Q9ewXs8pQSAX5vL7H/ai-in-2025-gestalt).

If we missed something big or got something wrong, please comment, we will edit it in.

# Authors

* [Gavin Leech](https://www.gleech.org/)
* [Tomáš Gavenčiak](https://gavento.cz/)
* [Stephen McAleese](https://www.lesswrong.com/users/stephen-mcaleese)
* [Peli Grietzer](https://www.lesswrong.com/users/peligrietzer)
* [Stag Lynn](https://www.lesswrong.com/users/stag)
* [jordine](https://www.lesswrong.com/users/jordine)
* [Ozzie Gooen](https://www.lesswrong.com/users/ozziegooen)
* [Violet Hour](https://www.lesswrong.com/users/violet-hour)
* [ramennaut](https://www.lesswrong.com/users/ramennaut-1)

This website was created for the Shallow Review project by [QURI](https://quantifieduncertainty.org/), Ozzie and Tomáš.

# Acknowledgments

_These people generously helped with the review by providing expert feedback, literature sources, advice, or otherwise. Any remaining mistakes remain ours._

Thanks to Neel Nanda, Owain Evans, Stephen Casper, Alex Turner, Caspar Oesterheld, Steve Byrnes, Adam Shai, Séb Krier, Vanessa Kosoy, Nora Ammann, David Lindner, John Wentworth, Vika Krakovna, Filip Sondej, JS Denain, Jan Kulveit, Mary Phuong, Linda Linsefors, Yuxi Liu, Ben Todd, Ege Erdil, Tan Zhi-Xuan, Jess Riedel, Mateusz Bagiński, Roland Pihlakas, Walter Laurito, Vojta Kovařík, David Hyland, plex, Shoshannah Tekofsky, Fin Moorhouse, Misha Yagudin, Nandi Schoots, Nuno Sempere, and others for helpful comments.


# Epigram

> _No punting — we can’t keep building nanny products. Our products are overrun with filters and punts of various kinds. We need capable products and \[to\] trust our users._

– Sergey Brin

\> _Over the decade I've spent working on AI safety, I've felt an overall trend of divergence; research partnerships starting out with a sense of a common project, then slowly drifting apart over time… eventually, two researchers are going to have some deep disagreement in matters of taste, which sends them down different paths._

\> _Until the spring of this year, that is… something seemed to shift, subtly at first. After I gave a talk -- roughly the same talk I had been giving for the past year -- I had an excited discussion about it with Scott Garrabrant. Looking back, it wasn't so different from previous chats we had had, but the impact was different; it felt more concrete, more actionable, something that really touched my research rather than remaining hypothetical. In the subsequent weeks, discussions with my usual circle of colleagues took on a different character -- somehow it seemed that, after all our diverse explorations, we had arrived at a shared space._

– Abram Demski

![](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/wScohuNkKBrHgy5os/v53v5x3zj1plfcq6oggj)

Brought to you by the [_Arb Corporation_](https://arbresearch.com/)




