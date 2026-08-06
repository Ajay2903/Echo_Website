import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { Wordmark } from "./Wordmark";

type LegalShellProps = {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
};

export function LegalShell({
  title,
  updated,
  intro,
  children,
}: LegalShellProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="nav" data-shown="true">
        <div className="container nav__inner">
          <Link href="/" aria-label="Echo — home">
            <Wordmark />
          </Link>
          <Link className="legal__back" href="/">
            <span aria-hidden="true">←</span> Back to Echo
          </Link>
        </div>
      </header>

      <main id="main" className="legal">
        <div className="container-narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="heading">{title}</h1>
          <p className="legal__meta">Last updated {updated}</p>
          <p className="lede" style={{ marginTop: 28, maxWidth: "none" }}>
            {intro}
          </p>

          <div className="legal__prose">{children}</div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
