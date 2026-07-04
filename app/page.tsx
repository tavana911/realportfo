import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";
import StatCounter from "@/components/StatCounter";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCard from "@/components/TestimonialCard";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site.config";

export default function HomePage() {
  const featured = projects.slice(0, 6);

  return (
    <>
      <Hero />

      <Marquee />

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Selected Work</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">
                The work that gets recruiters and clients to stop scrolling.
              </h2>
            </div>
            <Link
              href="/work"
              className="whitespace-nowrap font-mono text-xs uppercase tracking-widest2 text-fog hover:text-paper"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper/[0.02] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-5">
          {site.stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-widest2 text-fog">How We&apos;ll Work</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">A timeline, not a guessing game.</h2>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Testimonials</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">What clients say after delivery.</h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 rounded-3xl border border-line p-12 md:flex-row md:items-center md:justify-between md:p-20">
          <h2 className="max-w-xl text-balance font-display text-4xl md:text-5xl">
            Have a project that needs to look this good?
          </h2>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-paper px-8 py-4 font-mono text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-[1.03]"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
