import Image from "next/image";
import { clientLogos } from "@/content/testimonials";

export default function Marquee() {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <div className="overflow-hidden border-y border-line py-10">
      <div className="flex w-max animate-marquee items-center gap-16">
        {loop.map((logo, i) => (
          <div key={i} className="relative h-8 w-32 flex-shrink-0 opacity-50 grayscale transition-opacity hover:opacity-100">
            <Image src={logo} alt="Client logo" fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
