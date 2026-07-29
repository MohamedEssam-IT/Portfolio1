import { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Decorative animated background: gradient blobs, a subtle grid, and floating
 * Azure "cloud particle" dots. Purely visual; pointer-events disabled.
 */
export function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: `${(i * 47) % 100}%`,
        top: `${(i * 71) % 100}%`,
        size: 3 + ((i * 13) % 5),
        delay: (i % 7) * 0.6,
        duration: 8 + (i % 6) * 2,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base gradient */}
      <div className="absolute inset-0 bg-azure-radial" />

      {/* grid overlay */}
      <div
        className="absolute inset-0 bg-grid-fade opacity-[0.35]"
        style={{ backgroundSize: '48px 48px' }}
      />

      {/* animated blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,120,212,0.30), transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.22), transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,106,190,0.20), transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* floating cloud particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-azure-400/30"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  );
}
