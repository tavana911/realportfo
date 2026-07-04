import Image from "next/image";
import { site } from "@/content/site.config";

export const metadata = {
  title: "About",
  description: "Background, experience, and software behind the edit."
};

export default function AboutPage() {
  return (
    <section className="px-6 pb-28 pt-40 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line">
          <Image src={site.about.portrait} alt={site.name} fill className="object-cover" />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-fog">About</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
            Storytelling, pacing, and emotion — the parts that make people stay.
          </h1>

          <div className="mt-8 space-y-5 text-fog">
            {site.about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h2 className="mt-12 font-mono text-xs uppercase tracking-widest2 text-fog">Software</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.about.software.map((s) => (
              <span key={s} className="rounded-full border border-line px-4 py-2 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
