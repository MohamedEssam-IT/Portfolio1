import { useEffect, useState } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

/**
 * Cycles through `words` with a typing / deleting effect.
 */
export function TypingText({ words, typingSpeed = 90, deletingSpeed = 45, pause = 1400, className }: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    const current = words[index];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-label={words[index]}>
      <span aria-hidden="true">{words[index].substring(0, subIndex)}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[1em] -mb-1 bg-azure-400 animate-pulse-glow" aria-hidden="true" />
    </span>
  );
}
