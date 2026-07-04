import Link from "next/link";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Services",
  description: "Editing, motion graphics, sound design, and videography services."
};

export default function ServicesPage() {
  return (
    <section className="px-6 pb-28 pt-40 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Services</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
          Everything a video needs, from first cut to final export.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service) => (
            <div key={service.title} className="bg-ink p-8 transition-colors hover:bg-paper/[0.03]">
              <h3 className="font-display text-xl">{service.title}</h3>
              <p className="mt-3 text-sm text-fog">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-paper px-8 py-4 font-mono text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-[1.03]"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
