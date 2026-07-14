"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";

export type MediaCarouselItem = {
  src: string;
  alt: string;
  caption?: string;
};

type MediaCarouselProps = {
  items: MediaCarouselItem[];
  label: string;
  className?: string;
  sizes: string;
  intervalMs?: number;
};

export function MediaCarousel({
  items,
  label,
  className = "",
  sizes,
  intervalMs = 6500,
}: MediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const hasMultipleItems = items.length > 1;
  const activeItem = items[activeIndex] ?? items[0];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!hasMultipleItems || isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [hasMultipleItems, intervalMs, isPaused, items.length, prefersReducedMotion]);

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0);
  }, [activeIndex, items.length]);

  if (!activeItem) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultipleItems) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    setIsPaused(false);

    if (startX === null || endX === undefined) return;
    const distance = endX - startX;
    if (Math.abs(distance) < 45) return;

    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
    <div
      className={`media-carousel ${hasMultipleItems ? "has-controls" : ""} ${activeItem.caption ? "has-caption" : ""} ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} image gallery`}
      tabIndex={hasMultipleItems ? 0 : -1}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="media-carousel-frame" key={`${activeItem.src}-${activeIndex}`}>
        <Image
          className="media-carousel-image"
          src={activeItem.src}
          alt={activeItem.alt}
          fill
          sizes={sizes}
        />
      </div>

      {activeItem.caption ? (
        <p className="media-carousel-caption">{activeItem.caption}</p>
      ) : null}

      {hasMultipleItems ? (
        <>
          <span className="media-carousel-count" aria-hidden="true">
            {activeIndex + 1} / {items.length}
          </span>

          <button
            className="media-carousel-arrow previous"
            type="button"
            onClick={showPrevious}
            aria-label={`Show previous image for ${label}`}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="media-carousel-arrow next"
            type="button"
            onClick={showNext}
            aria-label={`Show next image for ${label}`}
          >
            <span aria-hidden="true">›</span>
          </button>

          <div className="media-carousel-dots" aria-label={`Choose an image for ${label}`}>
            {items.map((item, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                type="button"
                key={`${item.src}-${index}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1} of ${items.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <span className="sr-only" aria-live="polite">
            Showing image {activeIndex + 1} of {items.length} for {label}
          </span>
        </>
      ) : null}
    </div>
  );
}
