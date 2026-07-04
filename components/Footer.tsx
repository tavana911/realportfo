import Link from "next/link";
import { site } from "@/content/site.config";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-fog">{site.role}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest2 text-fog">
          <a href={`mailto:${site.email}`} className="hover:text-paper">Email</a>
          <a href={site.whatsapp} className="hover:text-paper" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={site.instagram} className="hover:text-paper" target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.tiktok} className="hover:text-paper" target="_blank" rel="noreferrer">TikTok</a>
          <a href={site.linkedin} className="hover:text-paper" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-fog md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <Link href="/contact" className="font-mono uppercase tracking-widest2 hover:text-paper">
          Start a project →
        </Link>
      </div>
    </footer>
  );
}
