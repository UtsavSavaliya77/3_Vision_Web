"use client";

import { useState } from "react";
import FilterBar from "./FilterSection";
import WorkGrid from "./WorkGrid";

const categories = [
  "All",
  "Cafe Reels",
  "Editing",
  "Events",
  "Product Videos",
  "Brand Films",
] as const;

type Category = (typeof categories)[number];

export default function WorkContent() {
  const [filter, setFilter] = useState<Category>("All");

  return (
    <>
      <FilterBar activeFilter={filter} onFilterChange={setFilter} />
      <WorkGrid activeFilter={filter} />
    </>
  );
}