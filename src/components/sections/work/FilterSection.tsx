"use client";

const categories = [
  "All",
  "Cafe Reels",
  "Editing",
  "Events",
  "Product Videos",
  "Brand Films",
] as const;

type Category = (typeof categories)[number];

interface FilterBarProps {
  activeFilter: Category;
  onFilterChange: (category: Category) => void;
}

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <section className="py-8 sticky z-30 backdrop-blur-xl bg-transperent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-[1.125rem] md:px-12 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeFilter;

          return (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`
                px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.14em] font-medium
                transition-all duration-300 cursor-pointer whitespace-nowrap
                ${
                  isActive
                    ? "bg-[#EF1D2D] text-white shadow-[0_0_24px_rgba(239,29,40,0.4)] border border-transparent"
                    : "border border-white/15 text-white/70 hover:text-white hover:border-white/30"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}