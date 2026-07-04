// EDIT ME — add a new project by adding a new object to this array.
// The `slug` becomes the URL: /work/your-slug
// Nothing else in the codebase needs to change.

export type Category =
  | "Commercial"
  | "YouTube"
  | "Short-form"
  | "Social Media"
  | "Corporate"
  | "Real Estate"
  | "Events"
  | "Ads"
  | "Motion Graphics"
  | "Color Grading"
  | "Wedding";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  software: string[];
  thumbnail: string;
  heroVideo: string;
  finalVideo: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  process: string;
  deliverables: string[];
  beforeAfter?: { before: string; after: string };
  externalLinks?: { label: string; url: string }[];
  duration: string; // shown as a timecode-style tag, e.g. "00:02:14"
};

export const projects: Project[] = [
  {
    slug: "wedding-film-story",
    title: "Wedding Film Story",
    client: "Couple",
    category: "Wedding",
    software: ["Premiere Pro", "After Effects"],
    thumbnail: "/images/projects/wedding-film-story.jpg",
    heroVideo: "/videos/projects/wedding-film-story.mp4",
    finalVideo: "/videos/projects/wedding-film-story.mp4",
    description: "A romantic wedding film crafted to preserve the emotion, details, and energy of the day.",
    overview: "This wedding edit was shaped around the couple's story, the atmosphere of the celebration, and the most meaningful moments of the day.",
    challenge: "The footage needed to feel cinematic without losing the intimate, personal energy of the event.",
    solution: "I built the edit around emotional pacing, movement, and carefully selected moments so the story felt natural and timeless.",
    process: "The edit started with a narrative structure, then moved into pacing, sound, and a polished final grade.",
    deliverables: ["Wedding film", "Highlight reel", "Social teaser"],
    externalLinks: [
      {
        label: "Watch wedding film",
        url: "https://drive.google.com/file/d/1ARweZ9VHUSRNMkWKBseKNSCluEngGFPK/view?usp=drivesdk"
      }
    ],
    duration: "00:03:45"
  },
  {
    slug: "wedding-highlight-reel",
    title: "Wedding Highlight Reel",
    client: "Couple",
    category: "Wedding",
    software: ["Premiere Pro", "CapCut"],
    thumbnail: "/images/projects/wedding-highlight-reel.jpg",
    heroVideo: "/videos/projects/wedding-highlight-reel.mp4",
    finalVideo: "/videos/projects/wedding-highlight-reel.mp4",
    description: "A polished highlight reel that captures the mood and best moments of the wedding day.",
    overview: "This project focuses on a tight, emotional recap designed for quick sharing and lasting impact.",
    challenge: "The footage needed a concise structure that still felt rich and personal.",
    solution: "I used rhythm, expressive transitions, and carefully placed audio to keep the highlight reel warm and engaging.",
    process: "The cut was shaped around the strongest emotional beats, then refined for pacing and flow.",
    deliverables: ["Highlight reel", "Short-form version", "Captioned export"],
    externalLinks: [
      {
        label: "Watch highlight reel",
        url: "https://drive.google.com/file/d/14fWtgySD4T3Do4WNXxjm8PqxtZJAfMtn/view?usp=drivesdk"
      }
    ],
    duration: "00:01:50"
  },
  {
    slug: "high-retention-reels",
    title: "High-Retention Reels",
    client: "Creator & Brand Content",
    category: "Short-form",
    software: ["Premiere Pro", "CapCut", "After Effects"],
    thumbnail: "/images/projects/high-retention-reels.png",
    heroVideo: "/videos/projects/high-retention-reels.mp4",
    finalVideo: "/videos/projects/high-retention-reels.mp4",
    description: "Short-form edits built to hook instantly and keep attention all the way through.",
    overview: "A selection of dynamic short-form videos designed for social platforms where the first second matters most.",
    challenge: "The footage needed a tighter rhythm and stronger visual hooks to feel native to fast-scrolling feeds.",
    solution: "Built each cut around a clear opening beat, text-driven momentum, and pacing that emphasizes the strongest moment first.",
    process: "I start by sorting the best hooks, structure the cut for retention, then refine pacing, captions, and motion for delivery.",
    deliverables: ["Vertical cuts", "Captioned exports", "Platform-ready versions"],
    externalLinks: [
      {
        label: "Watch on Google Drive",
        url: "https://drive.google.com/file/d/1rVHmLMLEQdIDKZt1jQgwvA2AwBLPGQyi/view?usp=drive_link"
      }
    ],
    duration: "00:00:32"
  },
  {
    slug: "avitech-sales-sphere-campaign",
    title: "AVitech Sales Sphere · Campaign",
    client: "AVitech",
    category: "Corporate",
    software: ["Premiere Pro", "After Effects"],
    thumbnail: "/images/projects/avitech-campaign.jpg",
    heroVideo: "/videos/projects/avitech-campaign.mp4",
    finalVideo: "/videos/projects/avitech-campaign.mp4",
    description: "A polished campaign edit designed to support product messaging and sales storytelling.",
    overview: "The goal was to turn a dense promo package into a polished piece that felt modern and clear.",
    challenge: "The source material had multiple angles and messaging points, so it needed a stronger narrative flow.",
    solution: "I built the edit around a concise story arc with branded motion, clean pacing, and clear callouts for key selling points.",
    process: "The workflow focused on narrative shape first, then audio polish and final export formats for different channels.",
    deliverables: ["Campaign cut", "Social cutdowns", "Captioned versions"],
    externalLinks: [
      {
        label: "View the campaign",
        url: "https://drive.google.com/file/d/1o4WRqmDimJQoYguKdwVbC198RFQiYyAG/view?usp=drivesdk"
      }
    ],
    duration: "00:01:08"
  },
  {
    slug: "sabi-loft-katsu-company-party",
    title: "SABI LOFT KATSU · Company Party & Awards",
    client: "SABI LOFT KATSU",
    category: "Events",
    software: ["Premiere Pro"],
    thumbnail: "/images/projects/sabi-loft-katsu.jpg",
    heroVideo: "/videos/projects/sabi-loft-katsu.mp4",
    finalVideo: "/videos/projects/sabi-loft-katsu.mp4",
    description: "An event recap that captures energy, celebration, and standout moments with a premium finish.",
    overview: "The event needed a piece that felt celebratory while still presenting the brand in a polished, professional way.",
    challenge: "The footage came from a high-energy event with lots of highlights, making it hard to decide what mattered most.",
    solution: "I shaped the edit around the best emotional beats, audience reactions, and award moments to keep the pacing crisp and uplifting.",
    process: "I built the story from the event's most memorable moments, then layered motion and sound to create a clean recap.",
    deliverables: ["Event recap", "Social teaser", "Highlight clips"],
    externalLinks: [
      {
        label: "Watch the recap",
        url: "https://drive.google.com/file/d/1Oy5h8GMFpxWwCiTVyZp-2DGbwxHDUtc8/view?usp=drivesdk"
      }
    ],
    duration: "00:02:16"
  },
  {
    slug: "twin-peaks-short-film",
    title: "TWIN PEAKS · Short Film",
    client: "Independent Project",
    category: "Commercial",
    software: ["Premiere Pro", "After Effects"],
    thumbnail: "/images/projects/twin-peaks-short-film.jpg",
    heroVideo: "/videos/projects/twin-peaks-short-film.mp4",
    finalVideo: "/videos/projects/twin-peaks-short-film.mp4",
    description: "A cinematic short film edit centered on mood, pacing, and narrative clarity.",
    overview: "A compact story edit designed to feel intentional, cinematic, and emotionally grounded.",
    challenge: "The footage needed careful pacing to preserve mood without losing momentum.",
    solution: "I used a slower, more deliberate rhythm with careful sound design and transitions to keep the atmosphere immersive.",
    process: "The edit started with a narrative structure pass, then moved into sound, timing, and fine color refinement.",
    deliverables: ["Short film cut", "Trailer teaser", "Social cutdown"],
    externalLinks: [
      {
        label: "Watch the short film",
        url: "https://drive.google.com/file/d/1Mb99_QCGZ-wn1ia_FWegAQTTnGmLqdRJ/view?usp=sharing"
      }
    ],
    duration: "00:03:12"
  },
  {
    slug: "event-teaser",
    title: "Event Teaser",
    client: "Event Brand",
    category: "Events",
    software: ["Premiere Pro", "CapCut"],
    thumbnail: "/images/projects/event-teaser.jpg",
    heroVideo: "/videos/projects/event-teaser.mp4",
    finalVideo: "/videos/projects/event-teaser.mp4",
    description: "A punchy teaser cut built to build excitement before the full event release.",
    overview: "The goal was to create a teaser with energy and anticipation, without giving away everything too early.",
    challenge: "The footage needed to feel fast and alive while still staying elegant and on-brand.",
    solution: "I leaned on quick pacing, strong transition points, and a tight audio bed to keep it urgent and memorable.",
    process: "The edit started with the strongest beats, then moved to rhythm, text overlays, and export variants for multiple platforms.",
    deliverables: ["15s teaser", "Vertical edit", "Captioned version"],
    externalLinks: [
      {
        label: "Watch the teaser",
        url: "https://vt.tiktok.com/ZS9tgmyAA/"
      }
    ],
    duration: "00:00:15"
  },
  {
    slug: "tavana-reel-highlights",
    title: "TAVANA Reel (Highlights)",
    client: "Portfolio Highlights",
    category: "Short-form",
    software: ["Premiere Pro", "After Effects"],
    thumbnail: "/images/projects/tavana-reel-highlights.png",
    heroVideo: "/videos/projects/tavana-reel-highlights.mp4",
    finalVideo: "/videos/projects/tavana-reel-highlights.mp4",
    description: "A highlight reel that brings together the best of the portfolio in one polished edit.",
    overview: "This reel is built as a fast-paced introduction to the style, pace, and range of work available.",
    challenge: "The portfolio needed a single piece that could introduce the work clearly without feeling overstuffed.",
    solution: "I curated the strongest moments into a clean sequence that balances emotion, transitions, and momentum.",
    process: "The edit focused on rhythm, story flow, and a memorable final beat to leave a strong impression.",
    deliverables: ["Highlights reel", "Short-form version", "Portfolio intro"],
    externalLinks: [
      {
        label: "View the work section",
        url: "https://drive.google.com/file/d/1C8PYz2KgbJuQi9MdlGsEmXM8wsdi9XSH/view?usp=drive_link"
      }
    ],
    duration: "00:01:20"
  }
];

export const categories = [
  "All",
  "Commercial",
  "YouTube",
  "Short-form",
  "Social Media",
  "Corporate",
  "Real Estate",
  "Events",
  "Ads",
  "Motion Graphics",
  "Color Grading",
  "Wedding"
] as const;
