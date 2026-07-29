import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { X, Cpu, Wrench, Code2, ListTree, AlertTriangle, Lightbulb, Image as ImageIcon } from 'lucide-react';
import type { Project } from '@/data/projects';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl glass shadow-glass sm:rounded-3xl"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            {/* header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--bg-soft)]/80 px-5 py-4 backdrop-blur-md sm:px-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-azure-500/25 to-azure-400/10 text-azure-400">
                  <project.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-base font-semibold sm:text-lg">{project.title}</h3>
                  <span className="text-[11px] uppercase tracking-wide text-azure-400/70">{project.category}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-azure-500/10 hover:text-azure-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-8 px-5 py-6 sm:px-7 sm:py-8">
              <p className="text-base leading-relaxed text-muted">{project.overview}</p>

              <Block icon={<AlertTriangle className="h-4 w-4" />} title="Problem">
                <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
              </Block>

              <Block icon={<Lightbulb className="h-4 w-4" />} title="Solution">
                <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
              </Block>

              <Block icon={<ListTree className="h-4 w-4" />} title="Architecture">
                <ul className="space-y-2">
                  {project.architecture.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block icon={<Cpu className="h-4 w-4" />} title="Technologies Used">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[var(--border)] bg-azure-500/5 px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Block>

              <Block icon={<Code2 className="h-4 w-4" />} title="Commands">
                <div className="space-y-4">
                  {project.commands.map((c) => (
                    <div key={c.label}>
                      <p className="mb-1.5 text-xs font-medium text-azure-400">{c.label}</p>
                      <pre className="overflow-x-auto rounded-xl border border-[var(--border)] bg-ink-950/80 p-4 text-xs leading-relaxed text-emerald-300/90">
                        <code>{c.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </Block>

              <Block icon={<Wrench className="h-4 w-4" />} title="Screenshots">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[0, 1].map((n) => (
                    <div
                      key={n}
                      className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-ink-950/40 text-muted"
                    >
                      <div className="flex flex-col items-center gap-2 text-xs">
                        <ImageIcon className="h-6 w-6 text-azure-400/60" />
                        Screenshot placeholder
                      </div>
                    </div>
                  ))}
                </div>
              </Block>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold text-azure-400">
        <span className="text-azure-400">{icon}</span>
        {title}
      </h4>
      {children}
    </div>
  );
}
