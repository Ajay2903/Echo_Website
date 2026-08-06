/** Placeholder — Echo is not published yet. Swap for the real listing URL. */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ajaytibre.echo";

function PlayGlyph() {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18a1.5 1.5 0 0 0 .6 1.2l.1.06L13.8 12v-.2L3.7 1.75l-.1.05Z"
        fill="#00C3FF"
      />
      <path
        d="M17.15 15.4 13.8 12.1v-.2l3.35-3.3.08.04 3.96 2.25c1.13.64 1.13 1.68 0 2.32l-3.96 2.25-.08.04Z"
        fill="#FFD200"
      />
      <path
        d="M17.23 15.36 13.8 12 3.6 22.2a1.22 1.22 0 0 0 1.5.05l12.13-6.89Z"
        fill="#FF3A44"
      />
      <path
        d="M17.23 8.64 5.1 1.75a1.22 1.22 0 0 0-1.5.05L13.8 12l3.43-3.36Z"
        fill="#00E07B"
      />
    </svg>
  );
}

/**
 * The single call to action. Charcoal fill, cream text — pink stays reserved
 * for accents.
 */
export function PlayBadge({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={PLAY_STORE_URL}
      className={`btn btn-primary${compact ? "" : " badge-play"}${
        className ? ` ${className}` : ""
      }`}
      aria-label="Get Echo on Google Play"
    >
      <PlayGlyph />
      {compact ? (
        <span>Google Play</span>
      ) : (
        <span className="badge-play__lines">
          <span className="badge-play__pre">Get it on</span>
          <span className="badge-play__name">Google Play</span>
        </span>
      )}
    </a>
  );
}
