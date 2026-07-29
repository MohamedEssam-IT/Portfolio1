import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-azure-500 via-azure-400 to-azure-400 z-[120]"
      style={{ scaleX }}
    />
  );
}
