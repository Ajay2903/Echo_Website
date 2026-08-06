/**
 * The Echo orb — the app's AI processing state.
 *
 * Three concentric circles breathing at slightly different rates, each one
 * lerping from pink to sage across its cycle. Pure CSS; see globals.css.
 */
export function Orb({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="orb">
        <span className="orb__ring orb__ring--outer" />
        <span className="orb__ring orb__ring--mid" />
        <span className="orb__core" />
      </div>
    </div>
  );
}

/** Expanding rings fading outward — the voice-recording motif. */
export function Ripple({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="ripple">
        <span className="ripple__ring" />
        <span className="ripple__ring" />
        <span className="ripple__ring" />
        <span className="ripple__dot" />
      </div>
    </div>
  );
}
