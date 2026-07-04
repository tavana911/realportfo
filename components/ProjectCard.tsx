"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryLink = project.externalLinks?.find((link) => link.url.startsWith("http"))?.url ?? `/work/${project.slug}`;
  const isExternalLink = primaryLink.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
    >
      <Link href={primaryLink} target={isExternalLink ? "_blank" : undefined} rel={isExternalLink ? "noreferrer" : undefined} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-line">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-60 transition-opacity group-hover:opacity-80" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rec opacity-0 transition-opacity group-hover:opacity-100 group-hover:animate-blink" />
            {project.duration}
          </div>

          <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink">▶</span>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl">{project.title}</h3>
            <p className="mt-1 text-sm text-fog">{project.client}</p>
          </div>
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-widest2 text-fog">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
