"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site.config";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10 md:py-5">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden bg-transparent sm:h-10 sm:w-10">
            <Image
              src="/images/logos/tavana-logo.png"
              alt={`${site.name} logo`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 32px, 40px"
            />
          </div>
          <span className="hidden font-display text-base tracking-tight sm:inline-block sm:text-lg">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest2 text-fog transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-paper/20 px-5 py-2 font-mono text-xs uppercase tracking-widest2 transition-colors hover:border-rec hover:text-rec md:inline-block"
        >
          Start a project
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-6 border-t border-line bg-ink px-6 py-8 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
