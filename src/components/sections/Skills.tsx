import { motion } from 'framer-motion';
import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills, type Skill } from '@/data/skills';

const categories = ['All', 'Cloud', 'Infrastructure', 'Networking', 'Identity', 'Automation'] as const;
type Category = (typeof categories)[number];

export function Skills() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack infrastructure toolkit."
          description="From cloud control planes to the network underlay — the technologies I use to design and operate environments."
        />

        {/* Filters */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2" direction="up">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? 'bg-gradient-to-r from-azure-500 to-azure-400 text-white shadow-glow'
                  : 'glass text-muted hover:text-azure-400'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <GlassCard className="group h-full p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-azure-500/20 to-azure-400/10 text-azure-400 transition-transform group-hover:scale-110">
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-display text-sm font-semibold">{skill.name}</h3>
            <p className="text-[11px] uppercase tracking-wide text-azure-400/70">{skill.category}</p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">{skill.blurb}</p>
      </GlassCard>
    </motion.div>
  );
}
