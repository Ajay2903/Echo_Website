"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "li" | "header" | "figure";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in ms. Content arrives in sequence, never all at once. */
  delay?: number;
  className?: string;
  as?: RevealTag;
};

/**
 * Fades and lifts its children into place the first time they enter the
 * viewport. Once only — nothing replays on scroll-up.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without IntersectionObserver, show the content rather than hiding it.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "in";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "in";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
