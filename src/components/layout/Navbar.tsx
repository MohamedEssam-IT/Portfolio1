import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import type { useTheme } from '@/hooks/useTheme';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

type Props = {
  theme: ReturnType<typeof useTheme>;
};

export function Navbar({ theme }: Props) {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="h-9 w-9 overflow-hidden rounded-lg ring-2 ring-azure-400/60 shadow-glow">
                      <img
                          src={`${import.meta.env.BASE_URL}Untitled-1.jpg`}
                          alt="Mohamed Essam"
                          className="h-full w-full object-cover object-top"
                      />          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Mohamed<span className="text-azure-400">.</span>Essam
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-azure-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={theme.toggle}
            className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:text-azure-400 hover:bg-azure-500/10"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme.theme === 'dark' ? (
                <motion.span key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <Moon className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Sun className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:text-azure-400 hover:bg-azure-500/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden glass border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-azure-500/10 hover:text-azure-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
