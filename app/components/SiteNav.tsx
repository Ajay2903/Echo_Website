"use client";

import { useEffect, useState } from "react";
import { PlayBadge } from "./PlayBadge";
import { Wordmark } from "./Wordmark";

/** Minimal nav. Hidden over the hero, slides in once you've scrolled past it. */
export function SiteNav() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const update = () => setShown(sentinel.getBoundingClientRect().top < 0);
    update();

    if (typeof IntersectionObserver === "undefined") {
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShown(entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav" data-shown={shown} inert={!shown}>
      <div className="container nav__inner">
        <a href="#top" aria-label="Echo — back to top">
          <Wordmark />
        </a>

        <nav className="nav__links" aria-label="Sections">
          <a href="#how-it-works">How it works</a>
          <a href="#why-echo">Why Echo</a>
          <a href="#privacy">Privacy</a>
          <a href="#questions">Questions</a>
        </nav>

        <PlayBadge compact />
      </div>
    </header>
  );
}
