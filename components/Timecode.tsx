"use client";

import { useEffect, useState } from "react";

function toTimecode(frames: number) {
  const fps = 24;
  const totalSeconds = Math.floor(frames / fps);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const f = frames % fps;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

export default function Timecode({ live = false, label }: { live?: boolean; label?: string }) {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    if (!live) return;
    const start = performance.now();
    let raf: number;
    const tick = () => {
      const elapsed = performance.now() - start;
      setFrames(Math.floor((elapsed / 1000) * 24));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [live]);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-fog">
      <span className={live ? "h-1.5 w-1.5 rounded-full bg-rec animate-blink" : "h-1.5 w-1.5 rounded-full bg-fog"} />
      {label && <span className="uppercase">{label}</span>}
      <span>{live ? toTimecode(frames) : label ? "" : "00:00:00:00"}</span>
    </span>
  );
}
