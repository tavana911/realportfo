"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site.config";

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-4">
      {site.process.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-ink p-8 md:p-10"
        >
          <p className="font-mono text-xs text-rec">{step.code}</p>
          <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
          <p className="mt-3 text-sm text-fog">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
