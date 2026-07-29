import { motion } from 'framer-motion';
import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { experiences } from '@/data/profile';

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of reliable operations."
          description="Roles where I owned infrastructure end-to-end — from design to daily operations."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-azure-400 via-azure-500/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={exp.company} direction={isLeft ? 'right' : 'left'}>
                  <div
                    className={`relative flex flex-col gap-4 pl-12 sm:pl-0 sm:flex-row ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* node */}
                    <motion.span
                      className="absolute left-4 top-1.5 z-10 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full bg-azure-400 shadow-glow sm:left-1/2"
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="absolute h-7 w-7 rounded-full bg-azure-400/20 animate-pulse-glow" />
                    </motion.span>

                    {/* spacer for alternating layout on desktop */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* card */}
                    <div className="sm:w-1/2">
                      <div className="glass rounded-2xl p-6 shadow-glass transition-transform hover:-translate-y-1">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-azure-500/10 px-3 py-1 text-xs font-medium text-azure-400">
                          {exp.dates}
                        </span>
                        <h3 className="mt-3 font-display text-lg font-semibold">{exp.role}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-azure-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-azure-400" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary}</p>

                        <ul className="mt-4 space-y-2">
                          {exp.achievements.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-muted">
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {exp.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-[var(--border)] bg-azure-500/5 px-2 py-0.5 text-[11px] text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
