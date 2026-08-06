"use client";

import { useId, useState } from "react";

export type FaqEntry = { q: string; a: string };

function FaqItem({ entry, index }: { entry: FaqEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const base = useId();
  const panelId = `${base}-panel-${index}`;
  const triggerId = `${base}-trigger-${index}`;

  return (
    <div className="faq__item">
      <h3>
        <button
          type="button"
          id={triggerId}
          className="faq__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {entry.q}
          <span className="faq__sign" aria-hidden="true" />
        </button>
      </h3>
      <div
        className="faq__panel"
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        data-open={open}
        inert={!open}
      >
        <div>
          <p className="body faq__answer">{entry.a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ entries }: { entries: FaqEntry[] }) {
  return (
    <div className="faq">
      {entries.map((entry, i) => (
        <FaqItem key={entry.q} entry={entry} index={i} />
      ))}
    </div>
  );
}
