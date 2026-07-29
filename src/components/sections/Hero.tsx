import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypingText } from '@/components/ui/TypingText';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { profile } from '@/data/profile';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.12 * i, ease },
  }),
};

export function Hero() {
  const handleDownload = () => window.open(profile.cvUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-azure-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-azure-400/6 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">

          {/* ── Photo column ── */}
          <motion.div
            className="order-1 w-full max-w-[150px] shrink-0 lg:order-1 lg:max-w-[170px] xl:max-w-[190px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            <div className="relative">
              {/* Offset border accent */}
              <div className="absolute -inset-2 rounded-2xl border border-azure-400/20" />

              {/* Corner accent marks */}
              <span className="absolute -top-px -left-px h-6 w-6 rounded-tl-2xl border-t-2 border-l-2 border-azure-400" />
              <span className="absolute -top-px -right-px h-6 w-6 rounded-tr-2xl border-t-2 border-r-2 border-azure-400" />
              <span className="absolute -bottom-px -left-px h-6 w-6 rounded-bl-2xl border-b-2 border-l-2 border-azure-400" />
              <span className="absolute -bottom-px -right-px h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-azure-400" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] w-full">
                <img
                  src="/Untitled-1.jpg"
                  alt="Mohamed Essam"
                  className="h-full w-full object-cover object-top"
                />
                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] to-transparent" />

                {/* Role badge pinned at bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap glass rounded-full px-3 py-1 text-[10px] font-semibold text-azure-400 shadow-glow">
                  {profile.role}
                </div>
              </div>

              {/* Floating skill pill — top right */}
              <motion.div
                className="absolute -top-3 -right-3 glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium text-azure-400 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                ☁️ Azure
              </motion.div>

              {/* Floating skill pill — bottom left */}
              <motion.div
                className="absolute -bottom-3 -left-3 glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium text-azure-400 shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🖥 Windows Server
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text column ── */}
          <div className="order-2 flex-1 lg:order-2">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-azure-400"
              custom={0} initial="hidden" animate="show" variants={fadeUp}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
              <span className="h-3 w-px bg-[var(--border)]" />
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl"
              custom={1} initial="hidden" animate="show" variants={fadeUp}
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">Mohamed Essam</span>
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div
              className="mt-3 flex items-center gap-2 text-base text-muted sm:text-lg"
              custom={2} initial="hidden" animate="show" variants={fadeUp}
            >
              <span className="text-azure-400/60">{'>'}</span>
              <TypingText words={profile.roles} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
              custom={3} initial="hidden" animate="show" variants={fadeUp}
            >
              {profile.tagline}
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-2.5"
              custom={4} initial="hidden" animate="show" variants={fadeUp}
            >
              <button
                onClick={handleDownload}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-azure-500 to-azure-400 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
              >
                <Download className="h-4 w-4" />
                Download CV
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold text-azure-400 transition-all hover:-translate-y-0.5 hover:text-azure-300"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.social.linkedin}
                  target="_blank" rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full glass text-muted transition-all hover:-translate-y-0.5 hover:text-azure-400"
                >
                  <FaLinkedinIn className="h-3.5 w-3.5" />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank" rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-full glass text-muted transition-all hover:-translate-y-0.5 hover:text-azure-400"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.dl
              className="mt-8 flex flex-wrap gap-3"
              custom={5} initial="hidden" animate="show" variants={fadeUp}
            >
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl px-4 py-3 text-center min-w-[100px]"
                >
                  <dd>
                    <AnimatedCounter
                      value={s.value}
                      suffix={s.suffix}
                      className="font-display text-xl font-bold text-gradient"
                    />
                    <p className="mt-0.5 text-[10px] leading-tight text-muted">{s.label}</p>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
