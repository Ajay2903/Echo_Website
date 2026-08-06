import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 21,
  height: 21,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function LockIcon() {
  return (
    <svg {...base}>
      <rect x="4" y="10.5" width="16" height="10.5" rx="3" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.7" r="1.15" />
    </svg>
  );
}

export function SparkOffIcon() {
  return (
    <svg {...base}>
      <path d="M12 3.5 13.6 8 18 9.6 13.6 11.2 12 15.7l-1.6-4.5L6 9.6 10.4 8 12 3.5Z" />
      <path d="M18.5 17.5 20 19" />
      <path d="M4 4l16 16" />
    </svg>
  );
}

export function EyeOffIcon() {
  return (
    <svg {...base}>
      <path d="M3 12s3.6-6 9-6c1.5 0 2.8.35 4 .93" />
      <path d="M19.4 9.1c.94.98 1.6 1.98 1.6 2.9 0 0-3.6 6-9 6-1.7 0-3.15-.45-4.35-1.1" />
      <path d="M10.3 10.3a2.4 2.4 0 0 0 3.4 3.4" />
      <path d="M4 4l16 16" />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg {...base}>
      <path d="M4.5 7h15" />
      <path d="M9.5 7V5.4A1.4 1.4 0 0 1 10.9 4h2.2a1.4 1.4 0 0 1 1.4 1.4V7" />
      <path d="M6.4 7l.8 11.6A1.5 1.5 0 0 0 8.7 20h6.6a1.5 1.5 0 0 0 1.5-1.4L17.6 7" />
      <path d="M10.4 11v5M13.6 11v5" />
    </svg>
  );
}

export function NoSignalIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6 18 18 6" />
    </svg>
  );
}
