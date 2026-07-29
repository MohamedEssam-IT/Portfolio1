import { useEffect, useRef } from 'react';

/**
 * Custom cursor: a small dot that tracks instantly and a ring that trails with
 * spring physics. Disabled on touch / coarse-pointer devices via CSS.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on coarse pointers (touch devices).
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.documentElement.classList.add('cursor-active');

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3.5}px, ${mouseY - 3.5}px)`;
    };

    const onDown = () => ring.classList.add('!w-7', '!h-7');
    const onUp = () => ring.classList.remove('!w-7', '!h-7');

    const onEnterInteractive = () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.background = 'rgba(56,189,248,0.12)';
    };
    const onLeaveInteractive = () => {
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.background = 'transparent';
    };

    const interactiveSelector = 'a, button, [data-cursor="hover"], input, textarea, label';

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX - 17}px, ${ringY - 17}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
      observer.disconnect();
      document.documentElement.classList.remove('cursor-active');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
