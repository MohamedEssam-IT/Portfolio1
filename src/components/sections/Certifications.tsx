import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { certifications } from '@/data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuously credentialed."
          description="Microsoft and Cisco certifications earned and in progress — proof of the depth behind the work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const Icon = c.icon;
            const earned = c.status === 'Earned';
            return (
              <Reveal key={c.code} direction="up" delay={i * 0.06}>
                <GlassCard className="group relative h-full overflow-hidden p-6" glow>
                  {/* status ribbon */}
                  <div
                    className={`absolute right-0 top-0 h-20 w-20 rounded-bl-full ${
                      earned ? 'bg-emerald-500/10' : 'bg-amber-500/10'
                    }`}
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-azure-500/25 to-azure-400/10 text-azure-400 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        earned ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
                      }`}
                    >
                      {earned ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                      {c.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{c.code}</h3>
                  <p className="mt-1 text-sm font-medium text-azure-400">{c.title}</p>
                  <p className="mt-1 text-xs text-muted">Issued by {c.issuer}{c.year ? ` · ${c.year}` : ''}</p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{c.blurb}</p>

                  {/* progress for in-progress certs */}
                  {!earned && (
                    <div className="mt-5">
                      <div className="h-1.5 overflow-hidden rounded-full bg-ink-800/70">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-azure-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: '55%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <p className="mt-1.5 text-[11px] text-muted">In progress · actively studying</p>
                    </div>
                  )}
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
