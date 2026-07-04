import TestimonialCard from "@/components/TestimonialCard";
import Marquee from "@/components/Marquee";
import { testimonials } from "@/content/testimonials";

export const metadata = {
  title: "Testimonials",
  description: "What clients say after working together."
};

export default function TestimonialsPage() {
  return (
    <section className="pb-28 pt-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-fog">Testimonials</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
          Client feedback, unedited.
        </h1>
      </div>

      <div className="mt-16">
        <Marquee />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-10">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
