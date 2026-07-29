import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Mail, Phone, Cloud } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-azure-500 to-azure-400 font-display text-sm font-bold text-white shadow-glow">
                ME
              </span>
              <span className="font-display text-base font-semibold">
                Mohamed<span className="text-azure-400">.</span>Essam
              </span>
            </a>
            <p className="mt-4 text-sm text-muted">
              Cloud &amp; System Administrator building secure, resilient hybrid infrastructure on Microsoft Azure and Windows Server.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-3">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-azure-400"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-azure-400"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={profile.social.email}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-azure-400"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                aria-label="Phone"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-azure-400"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Cloud className="h-3.5 w-3.5 text-azure-400" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-[var(--border)] pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>&copy; {year} Mohamed Essam. All rights reserved.</p>
          <p>
            Designed &amp; Developed by{' '}
            <span className="font-medium text-azure-400">Mohamed Essam</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
