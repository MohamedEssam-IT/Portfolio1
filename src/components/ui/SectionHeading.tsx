import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl mb-14`} direction="up">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-azure-400 mb-3">
        <span className="h-px w-8 bg-azure-400/60" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-base sm:text-lg text-muted max-w-xl">{description}</p>}
    </Reveal>
  );
}
