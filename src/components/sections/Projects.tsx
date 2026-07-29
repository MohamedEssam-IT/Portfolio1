import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { projects, type Project } from '@/data/projects';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected infrastructure work."
          description="Real labs and deployments spanning Azure governance, virtualization, identity, and networking. Tap any card for the full breakdown."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} direction="up" delay={i * 0.05}>
                <GlassCard className="group flex h-full cursor-pointer flex-col p-6" glow>
                  <button
                    onClick={() => setSelected(p)}
                    className="flex h-full flex-col text-left"
                    aria-label={`View ${p.title} details`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-azure-500/25 to-azure-400/10 text-azure-400 transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure-400" />
                    </div>

                    <span className="mt-5 text-[11px] uppercase tracking-wide text-azure-400/70">{p.category}</span>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.tagline}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[var(--border)] bg-azure-500/5 px-2 py-0.5 text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                      {p.technologies.length > 3 && (
                        <span className="rounded-md px-2 py-0.5 text-[11px] text-azure-400">
                          +{p.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <motion.span
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-azure-400"
                      whileHover={{ x: 4 }}
                    >
                      View details
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </button>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
