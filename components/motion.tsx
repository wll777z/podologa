"use client";
import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const revealed = new Set<HTMLElement>();
    const story = document.querySelector<HTMLElement>(".scroll-story");
    const visual = document.querySelector<HTMLElement>(".study-frame");
    const image = document.querySelector<HTMLElement>("[data-parallax]");
    const stages = [...document.querySelectorAll<HTMLElement>("[data-stage]")];
    const label = document.querySelector("[data-stage-label]");
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let active = -1;
    function animate(
      element: Element,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      const animation = element.animate(keyframes, options);
      animations.add(animation);
      animation.onfinish = () => {
        animations.delete(animation);
        animation.cancel();
      };
    }
    function reveal(element: HTMLElement, delay = 0) {
      if (element.dataset.revealed) return;
      element.dataset.revealed = "true";
      revealed.add(element);
      animate(
        element,
        [
          { opacity: 0, transform: "translateY(28px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 1000,
          delay,
          easing: "cubic-bezier(.22,1,.36,1)",
          fill: "backwards",
        },
      );
    }
    function update() {
      frame = 0;
      if (reduced.matches) return;
      if (image) {
        const bounds = image.parentElement!.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < innerHeight)
          image.style.transform = `translateY(${Math.max(-24, Math.min(24, -bounds.top * 0.06))}px) scale(1.055)`;
      }
      if (story && visual) {
        const bounds = story.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(
            1,
            (innerHeight * 0.4 - bounds.top) /
              Math.max(1, bounds.height - innerHeight * 0.4),
          ),
        );
        visual.style.setProperty("--story-progress", `${progress * 100}%`);
        visual.style.setProperty("--study-rotation", `${progress * 95}deg`);
        visual.style.setProperty("--foot-rotation", `${progress * -8}deg`);
        visual.style.setProperty("--branch-opacity", `${0.3 + progress * 0.7}`);
        let next = 0;
        stages.forEach((stage, i) => {
          if (stage.getBoundingClientRect().top < innerHeight * 0.65) next = i;
        });
        if (next !== active) {
          active = next;
          if (label)
            label.textContent = [
              "01 — ESCUTAR",
              "02 — COMPREENDER",
              "03 — CUIDAR",
            ][next];
          stages.forEach((stage, i) => {
            stage.dataset.active = String(i === next);
          });
        }
      }
    }
    function schedule() {
      if (!frame && !reduced.matches) frame = requestAnimationFrame(update);
    }
    function stop() {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (image) image.style.transform = "";
      if (visual)
        [
          "--story-progress",
          "--study-rotation",
          "--foot-rotation",
          "--branch-opacity",
        ].forEach((name) => visual.style.removeProperty(name));
    }
    function start() {
      stop();
      root.dataset.motion = reduced.matches ? "reduced" : "ready";
      if (reduced.matches) return;
      document
        .querySelectorAll<HTMLElement>(".hero-copy > *")
        .forEach((element, i) => reveal(element, i * 120));
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target as HTMLElement);
            observer?.unobserve(entry.target);
          }),
        { threshold: 0.12, rootMargin: "0px 0px -25px 0px" },
      );
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => observer!.observe(element));
      const foot = document.querySelector<SVGPathElement>(".study-foot path");
      if (foot) {
        const artObserver = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          animate(
            foot!,
            [
              { strokeDasharray: "1", strokeDashoffset: "1" },
              { strokeDasharray: "1", strokeDashoffset: "0" },
            ],
            { duration: 2100, easing: "ease-out" },
          );
          artObserver.disconnect();
        });
        artObserver.observe(foot);
        extraCleanup = () => artObserver.disconnect();
      }
      schedule();
    }
    let extraCleanup = () => {};
    function preferenceChange() {
      extraCleanup();
      start();
    }
    function onFocus(event: FocusEvent) {
      animations.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect)?.target;
        if (target?.contains(event.target as Node)) {
          animation.cancel();
          animations.delete(animation);
        }
      });
    }
    start();
    reduced.addEventListener("change", preferenceChange);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    document.addEventListener("focusin", onFocus);
    return () => {
      extraCleanup();
      stop();
      delete root.dataset.motion;
      revealed.forEach((element) => {
        delete element.dataset.revealed;
      });
      reduced.removeEventListener("change", preferenceChange);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);
  return null;
}
