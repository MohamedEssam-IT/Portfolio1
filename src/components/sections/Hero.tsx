import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypingText } from '@/components/ui/TypingText';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { profile } from '@/data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const handleDownload = () => window.open(profile.cvUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-azure-400"
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
            <span className="mx-1 h-3 w-px bg-[var(--border)]" />
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            Hi, I&apos;m <span className="text-gradient">Mohamed Essam</span>
          </motion.h1>

          <motion.p
            className="mt-3 font-display text-xl font-semibold text-azure-400 sm:text-2xl"
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {profile.role}
          </motion.p>

          <motion.div
            className="mt-4 flex items-center gap-2 font-body text-lg text-muted sm:text-xl"
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="text-azure-300/70">{'>'}</span>
            <TypingText words={profile.roles} />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <button
              onClick={handleDownload}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-azure-500 to-azure-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-azure-400 transition-colors hover:text-azure-300"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-2">
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-azure-400">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-azure-400">
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.dl
            className="mt-12 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4"
            custom={6}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="glass rounded-xl px-3 py-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-2xl font-bold text-gradient"
                  />
                  <p className="mt-1 text-[11px] leading-tight text-muted">{s.label}</p>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: avatar */}
        <motion.div
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* rotating ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-azure-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-12 rounded-full border border-azure-400/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />

            {/* glow */}
            <div className="absolute -inset-4 rounded-full bg-azure-500/20 blur-2xl" />

            {/* avatar */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-glow sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src="/Untitled-1.jpg"
                alt="Mohamed Essam"
                className="h-full w-full object-cover object-top"
              />

              {/* floating chips */}
              <motion.span
                className="absolute -left-6 top-10 hidden rounded-full glass px-3 py-1.5 text-xs font-medium text-azure-400 sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Azure
              </motion.span>
              <motion.span
                className="absolute -right-4 top-24 hidden rounded-full glass px-3 py-1.5 text-xs font-medium text-azure-400 sm:block"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Windows Server
              </motion.span>
              <motion.span
                className="absolute -left-2 bottom-8 hidden rounded-full glass px-3 py-1.5 text-xs font-medium text-azure-400 sm:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Active Directory
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-[var(--border)] p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-azure-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
}
