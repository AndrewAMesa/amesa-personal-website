import { MediaCarousel } from "@/components/MediaCarousel";
import type { Project } from "@/data/site";

type ProjectMediaProps = Pick<
  Project,
  "title" | "category" | "period" | "images" | "image" | "imageAlt" | "visual"
> & {
  compact?: boolean;
};

function getInitials(title: string) {
  const words = title
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !["a", "an", "and", "for", "of", "the", "to", "with"].includes(word.toLowerCase()));

  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "AM";
}

export function ProjectMedia({
  title,
  category,
  period,
  images,
  image,
  imageAlt,
  visual,
  compact = false,
}: ProjectMediaProps) {
  const mediaItems = images?.length
    ? images
    : image
      ? [{ src: image, alt: imageAlt || `${title} project screenshot` }]
      : [];

  if (mediaItems.length) {
    return (
      <MediaCarousel
        items={mediaItems}
        label={title}
        className={compact ? "project-media compact" : "project-media"}
        sizes={compact ? "(max-width: 820px) 100vw, 50vw" : "(max-width: 820px) 100vw, 45vw"}
      />
    );
  }

  const categoryVariants = {
    Applications: "sapphire",
    "AI & Data": "teal",
    Research: "gold",
    Creative: "plum",
    Service: "emerald",
  } as const;

  const variant = visual?.variant || categoryVariants[category];

  return (
    <div
      className={`${compact ? "project-media compact" : "project-media"} project-visual ${variant}`}
      aria-label={`${title} project cover`}
    >
      <div className="project-visual-topline">
        <span>{category}</span>
        <span>{period}</span>
      </div>
      <div className="project-visual-content">
        <span className="project-visual-mark" aria-hidden="true">{getInitials(title)}</span>
        <div>
          <strong>{visual?.label || title}</strong>
          {visual?.detail ? <span>{visual.detail}</span> : null}
        </div>
      </div>
    </div>
  );
}
