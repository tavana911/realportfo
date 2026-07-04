"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Timecode from "./Timecode";
import { site } from "@/content/site.config";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-40 md:px-10">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src={site.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      </div>

      <div className="absolute right-6 top-28 hidden md:right-10 md:block">
        <Timecode live label="Rec" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest2 text-fog"
        >
          {site.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.05] md:text-7xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg text-fog"
        >
          {site.heroSubline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/work"
            className="rounded-full bg-paper px-7 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-[1.03]"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-paper/25 px-7 py-3 font-mono text-xs uppercase tracking-widest2 transition-colors hover:border-rec hover:text-rec"
          >
            Let&apos;s Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
