"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "@/content/projects";

export default function ProjectGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = active === "All" || p.category === active;
      const matchesQuery =
        query.trim().length === 0 ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.client.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
                active === cat
                  ? "border-rec text-rec"
                  : "border-paper/15 text-fog hover:border-paper/40 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-full border border-paper/15 bg-transparent px-5 py-2.5 font-mono text-xs text-paper placeholder:text-fog focus:border-rec md:w-64"
        />
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center font-mono text-sm text-fog">
          No projects match that search. Try a different category.
        </p>
      )}
    </div>
  );
}
