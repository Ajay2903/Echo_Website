import Link from "next/link";
import { PlayBadge } from "./PlayBadge";
import { Wordmark } from "./Wordmark";

export const SUPPORT_EMAIL = "ajay29t@gmail.com";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Wordmark />
            <p className="footer__tagline">
              This is your quiet place.
            </p>
          </div>

          <div>
            <ul className="footer__links">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
              </li>
            </ul>
            <div style={{ marginTop: 26 }}>
              <PlayBadge />
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>© {new Date().getFullYear()} Echo. Made for Android.</span>
          <span>{SUPPORT_EMAIL}</span>
        </div>
      </div>
    </footer>
  );
}
