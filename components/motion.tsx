'use client';

import { useEffect } from 'react';

// Progressive enhancement: nothing is hidden by CSS or before hydration.
export function Motion() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const art = document.querySelector<SVGElement>('.hero-art .botanical');
    const root = document.documentElement;
    const animate = (element: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
      const animation = element.animate(keyframes, options);
      animations.add(animation);
      animation.onfinish = () => { animations.delete(animation); animation.cancel(); };
      return animation;
    };
    const reveal = (element: HTMLElement, delay = 0) => {
      if (element.dataset.revealed) return;
      element.dataset.revealed = 'true';
      animate(element, [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 850, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
    };
    const parallax = () => {
      frame = 0;
      if (!art || preference.matches) return;
      const bounds = art.parentElement!.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      const offset = Math.max(-20, Math.min(20, -bounds.top * .045));
      art.style.transform = `translateY(${offset}px) scale(1.035)`;
    };
    const scroll = () => { if (!frame && !preference.matches) frame = requestAnimationFrame(parallax); };
    const stop = () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (art) art.style.transform = '';
    };
    const start = () => {
      stop();
      root.dataset.motion = preference.matches ? 'reduced' : 'ready';
      if (preference.matches) return;
      document.querySelectorAll<HTMLElement>('.hero-copy > *').forEach((element, index) => reveal(element, index * 110));
      const stem = document.querySelector<SVGPathElement>('.botanical-stem');
      if (stem) {
        const length = stem.getTotalLength();
        animate(stem, [{ strokeDasharray: `${length}`, strokeDashoffset: `${length}` }, { strokeDasharray: `${length}`, strokeDashoffset: '0' }], { duration: 2000, easing: 'cubic-bezier(.22,1,.36,1)' });
      }
      document.querySelectorAll('.botanical-leaves > path').forEach((leaf, index) => {
        animate(leaf, [{ opacity: 0 }, { opacity: 1 }], { duration: 1400, delay: 200 + index * 90, fill: 'backwards', easing: 'ease-out' });
      });
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer?.unobserve(entry.target);
        });
      }, { threshold: .12, rootMargin: '0px 0px -30px 0px' });
      document.querySelectorAll<HTMLElement>('.section h2, .intro-copy, .care-area, .areas-detail article, .approach-list article, .about-art, .about-copy > p, .steps li, .faq-list details, .contact-panel').forEach(element => observer!.observe(element));
      scroll();
    };
    const focus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      animations.forEach(animation => {
        const element = (animation.effect as KeyframeEffect)?.target;
        if (element?.contains(target)) { animation.cancel(); animations.delete(animation); }
      });
    };
    start();
    preference.addEventListener('change', start);
    window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('focusin', focus);
    return () => {
      stop();
      delete root.dataset.motion;
      preference.removeEventListener('change', start);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('focusin', focus);
    };
  }, []);
  return null;
}
