export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark${className ? ` ${className}` : ""}`}>
      <span className="wordmark__dot" aria-hidden="true" />
      Echo
    </span>
  );
}
