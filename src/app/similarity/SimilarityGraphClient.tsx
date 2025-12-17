"use client";

import { useState, useEffect } from "react";
import SimilarityGraph from "@/components/SimilarityGraph";
import { SimilarityGraphData } from "@/lib/similarityTypes";

interface Props {
  data: SimilarityGraphData;
}

export default function SimilarityGraphClient({ data }: Props) {
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      // Account for padding and max-width container
      const containerWidth = Math.min(window.innerWidth - 32, 900); // max-w-6xl = 72rem = 1152px
      setDimensions({
        width: containerWidth,
        height: Math.max(500, Math.min(700, window.innerHeight - 300)),
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <SimilarityGraph
      data={data}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}
