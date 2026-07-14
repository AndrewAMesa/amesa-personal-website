import type { ReactNode } from "react";

export function SectionHeading({
  title,
  copy,
  action,
}: {
  title: string;
  copy?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading-row">
      <div className="section-heading">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}
