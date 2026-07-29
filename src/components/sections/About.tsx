import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { about } from '@/data/profile';

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Infrastructure that stays standing."
          description="A snapshot of who I am and how I approach cloud and system administration."
        />

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal direction="right" className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal direction="left">
            <div className="glass rounded-2xl p-6 shadow-glass">
              <h3 className="font-display text-lg font-semibold">What I focus on</h3>
              <ul className="mt-5 space-y-3">
                {about.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-azure-500/15 text-azure-400">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-muted">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
