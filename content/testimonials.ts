// EDIT ME — add a new testimonial by adding a new object below.

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number; // 1–5
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maya Torres",
    role: "Founder",
    company: "Northshore Coffee Co.",
    quote:
      "The brand film felt like something a full agency would deliver, not a single editor. Every note we gave came back better than we asked for.",
    rating: 5,
    avatar: "/images/testimonials/maya.jpg"
  },
  {
    name: "Daniel Osei",
    role: "Creator",
    company: "Independent YouTube Channel",
    quote:
      "Our average view duration went up within the first three episodes of working together. The turnaround time never slipped once.",
    rating: 5,
    avatar: "/images/testimonials/daniel.jpg"
  },
  {
    name: "Priya Shah",
    role: "Marketing Lead",
    company: "Aria Skincare",
    quote:
      "Fast, sharp, and genuinely understood short-form pacing. The launch clips outperformed everything we'd made in-house.",
    rating: 5,
    avatar: "/images/testimonials/priya.jpg"
  },
  {
    name: "Chuka Eze",
    role: "Broker",
    company: "Riverside Realty Group",
    quote:
      "Every listing film has the same calm, premium feel now. Clients comment on the videos before they even book a viewing.",
    rating: 5,
    avatar: "/images/testimonials/chuka.jpg"
  }
];

export const clientLogos = [
  "/images/logos/northshore.svg",
  "/images/logos/aria.svg",
  "/images/logos/riverside.svg",
  "/images/logos/vantage.svg",
  "/images/logos/fielder.svg"
];
