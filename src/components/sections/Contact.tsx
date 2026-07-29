import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { profile } from '@/data/profile';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: profile.social.email },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable."
          description="Open to roles, contracts, and collaboration on cloud and infrastructure projects. I reply within a day."
        />

        <Reveal direction="right" className="mx-auto max-w-lg space-y-4">
          {channels.map((c) => {
            const Icon = c.icon;
            const content = (
              <GlassCard className="flex items-center gap-4 p-5" hover>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-azure-500/20 to-azure-400/10 text-azure-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted">{c.label}</p>
                  <p className="truncate text-sm font-medium">{c.value}</p>
                </div>
              </GlassCard>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">
                {content}
              </a>
            ) : (
              <div key={c.label}>{content}</div>
            );
          })}

          {/* socials */}
          <GlassCard className="flex items-center gap-3 p-5">
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl glass text-muted transition-colors hover:text-azure-400">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-xl glass text-muted transition-colors hover:text-azure-400">
              <FaGithub className="h-4 w-4" />
            </a>
            <p className="text-sm text-muted">Find me on LinkedIn &amp; GitHub.</p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
