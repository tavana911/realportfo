import Image from "next/image";
import type { Testimonial } from "@/content/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-line p-8">
      <div>
        <div className="flex gap-1 text-rec">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
          ))}
        </div>
        <p className="mt-5 text-lg leading-relaxed text-paper">&quot;{testimonial.quote}&quot;</p>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-line">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-fog">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
