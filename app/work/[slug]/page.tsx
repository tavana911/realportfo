import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <section className="relative flex min-h-[70vh] items-end px-6 pb-16 pt-40 md:px-10">
        <div className="absolute inset-0 -z-10">
          <video className="h-full w-full object-cover opacity-40" autoPlay muted loop playsInline>
            <source src={project.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        </div>

        <div className="mx-auto w-full max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-widest2 text-fog">{project.category} · {project.duration}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">{project.title}</h1>
          <p className="mt-4 text-fog">{project.client}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl">Overview</h2>
            <p className="mt-4 text-fog">{project.overview}</p>

            <h2 className="mt-12 font-display text-2xl">Challenge</h2>
            <p className="mt-4 text-fog">{project.challenge}</p>

            <h2 className="mt-12 font-display text-2xl">Solution</h2>
            <p className="mt-4 text-fog">{project.solution}</p>

            <h2 className="mt-12 font-display text-2xl">Editing Process</h2>
            <p className="mt-4 text-fog">{project.process}</p>
          </div>

          <aside className="space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-fog">Software Used</h3>
              <ul className="mt-3 space-y-2">
                {project.software.map((s) => (
                  <li key={s} className="text-sm">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-fog">Deliverables</h3>
              <ul className="mt-3 space-y-2">
                {project.deliverables.map((d) => (
                  <li key={d} className="text-sm">{d}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {project.beforeAfter && (
        <section className="px-6 pb-20 md:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-2xl">Before / After</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-line">
                <Image src={project.beforeAfter.before} alt="Before" fill className="object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2">Before</span>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-line">
                <Image src={project.beforeAfter.after} alt="After" fill className="object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2">After</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl">Final Video</h2>
          <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-line">
            <video className="h-full w-full object-cover" controls poster={project.thumbnail}>
              <source src={project.finalVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest2 text-fog">Next project</span>
          <Link href={`/work/${next.slug}`} className="font-display text-2xl hover:text-rec">
            {next.title} →
          </Link>
        </div>
      </section>
    </article>
  );
}
