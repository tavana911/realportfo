import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Work",
  description: "A categorized archive of commercial, YouTube, short-form, and event video projects."
};

export default function WorkPage() {
  return (
    <section className="px-6 pb-28 pt-40 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Work</p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[1.05] md:text-6xl">
          Every category. Every deliverable. One consistent standard.
        </h1>

        <div className="mt-16">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
