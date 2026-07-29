import { motion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
};

/**
 * Glassmorphism card with an optional interactive hover lift + glow.
 */
export function GlassCard({ children, className = '', hover = true, glow = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mx', `${x}px`);
    ref.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`glass rounded-2xl shadow-glass ${glow ? 'hover:shadow-glow' : ''} ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(56,189,248,0.10), transparent 40%)',
      }}
    >
      {children}
    </motion.div>
  );
}
