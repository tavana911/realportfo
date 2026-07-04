import { site } from "@/content/site.config";

export const metadata = {
  title: "Contact",
  description: "Start a project — reach out by email, WhatsApp, or social."
};

export default function ContactPage() {
  return (
    <section className="px-6 pb-28 pt-40 md:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Contact</p>
        <h1 className="mt-4 text-balance font-display text-5xl leading-[1.05] md:text-6xl">
          Let’s build something sharp, cinematic, and ready to perform.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="rounded-2xl border border-line p-8 transition-colors hover:border-rec"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Email</p>
            <p className="mt-3 font-display text-xl">{site.email}</p>
          </a>

          <a
            href={site.call}
            className="rounded-2xl border border-line p-8 transition-colors hover:border-rec"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Call</p>
            <p className="mt-3 font-display text-xl">{site.phone}</p>
          </a>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-line p-8 transition-colors hover:border-rec"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-fog">WhatsApp</p>
            <p className="mt-3 font-display text-xl">Message directly</p>
          </a>

          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-line p-8 transition-colors hover:border-rec"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Instagram</p>
            <p className="mt-3 font-display text-xl">See recent work</p>
          </a>

          <a
            href={site.tiktok}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-line p-8 transition-colors hover:border-rec"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-fog">TikTok</p>
            <p className="mt-3 font-display text-xl">Watch quick edits</p>
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-line p-8 transition-colors hover:border-rec"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-fog">LinkedIn</p>
            <p className="mt-3 font-display text-xl">Connect professionally</p>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={site.resumeUrl}
            download
            className="inline-block rounded-full bg-paper px-8 py-4 font-mono text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-[1.03]"
          >
            Download Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-block rounded-full border border-paper/25 px-8 py-4 font-mono text-xs uppercase tracking-widest2 transition-colors hover:border-rec hover:text-rec"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
