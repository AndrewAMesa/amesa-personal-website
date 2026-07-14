"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { photographs } from "@/data/site";

const categories = ["All", "Landscape", "City", "Travel", "People"] as const;

export function PhotographyGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const visiblePhotos = useMemo(
    () =>
      activeCategory === "All"
        ? photographs
        : photographs.filter((photo) => photo.category === activeCategory),
    [activeCategory],
  );

  const publishedCount = photographs.filter((photo) => photo.src).length;

  return (
    <>
      <div className="gallery-toolbar">
        <span className="gallery-filter-label">Filter by category</span>
        <div className="filter-row photography-filters" aria-label="Filter photographs">
        {categories.map((category) => {
          const count = category === "All"
            ? photographs.length
            : photographs.filter((photo) => photo.category === category).length;

          return (
            <button
              className={activeCategory === category ? "filter-button active" : "filter-button"}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category}</span>
              <small>{count}</small>
            </button>
          );
        })}
        </div>
      </div>

      <p className="collection-count" aria-live="polite">
        {publishedCount === 0
          ? `Showing ${visiblePhotos.length} gallery placeholders. Add image files when your portfolio is ready.`
          : `Showing ${visiblePhotos.length} photograph${visiblePhotos.length === 1 ? "" : "s"}.`}
      </p>

      <div className="photo-grid">
        {visiblePhotos.map((photo, index) => (
          <figure
            className={`photo-card ${photo.orientation}`}
            key={`${photo.title}-${index}`}
            style={{ animationDelay: `${index * 55}ms` }}
          >
            <div className="photo-frame">
              {photo.src ? (
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              ) : (
                <div className="photo-placeholder">
                  <span>{photo.category.toUpperCase()}</span>
                  <strong>{photo.title}</strong>
                  <small>Replace with a photo in public/photography</small>
                </div>
              )}
            </div>
            <figcaption>
              <div>
                <strong>{photo.title}</strong>
                <span>{photo.location}</span>
              </div>
              <span>{photo.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
