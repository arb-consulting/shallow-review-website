import { loadReviewData } from "@/lib/loadData";
import { generateSimilarityGraph, getGraphStats } from "@/lib/similarity";
import { Metadata } from "next";
import { APP_SHORT_TITLE } from "@/constants/app";
import SimilarityGraphClient from "./SimilarityGraphClient";

export const metadata: Metadata = {
  title: `Agenda Similarity | ${APP_SHORT_TITLE}`,
  description:
    "Interactive visualization of similarity relationships between AI alignment research agendas",
};

export default function SimilarityPage() {
  const reviewData = loadReviewData();

  // Generate similarity data with a low threshold to capture more edges
  // The client component allows filtering with a higher threshold
  const graphData = generateSimilarityGraph(reviewData.sections, undefined, 0.05);
  const stats = getGraphStats(graphData);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Agenda Similarity Graph
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Similarity between agendas. Agendas are connected when they share approaches,
          target problems, funders, or community tags.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Drag nodes, zoom, and pan
          to explore.
        </p>

        {/* Stats summary */}
        <div className="grid grid-cols-2 w-120 gap-4 mb-9">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-1xl text-gray-900">{stats.nodeCount}
            <span className="text-sm text-gray-500"> agendas</span>
          </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-1xl text-gray-900">{stats.edgeCount}
              <span className="text-sm text-gray-500"> connections</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-1xl text-gray-900">
              {stats.avgSimilarity.toFixed(2)}
              <span className="text-sm text-gray-500"> avg similarity</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-1xl text-gray-900">
              {stats.avgEdgesPerNode.toFixed(1)}
              <span className="text-sm text-gray-500"> avg connections</span>
            </div>
          </div>
        </div>

        {/* Graph component */}
        <SimilarityGraphClient data={graphData} />

        {/* Methodology note */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            How Similarity is Calculated
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Similarity between two agendas is computed as a weighted sum of
            Jaccard similarities across their shared attributes. By default, all
            weights are equal (20% each):
          </p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>
              <strong>Approaches</strong>: Research methodology overlap
              (engineering, behavioral, cognitive, etc.)
            </li>
            <li>
              <strong>Problems</strong>: Shared AI safety problems being addressed
            </li>
            <li>
              <strong>Target Case</strong>: Whether agendas target the same AI
              development scenario
            </li>
            <li>
              <strong>Funders</strong>: Shared funding sources
            </li>
            <li>
              <strong>LW Tags</strong>: LessWrong community topic overlap
            </li>
            <li>
              <strong>Researchers</strong>: Shared researchers working on the agenda
            </li>
            <li>
              <strong>Keywords</strong>: Shared technical keywords
            </li>
          </ul>
          <p className="text-gray-500 text-xs mt-4">
            Use the controls panel to adjust these weights and the similarity
            threshold for edge display. Click on nodes to navigate to their agenda pages.
          </p>
        </div>
      </main>
    </div>
  );
}
