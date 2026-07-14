# Editing guide

Most site content and links are stored in `data/site.ts`.

## Headshot
Replace:

`public/images/andrew-mesa-headshot.jpg`

Keep the filename the same to avoid changing code.

## Project image carousels
Add screenshots, posters, presentation photos, or demo images to:

`public/images/projects`

Then add an `images` list to the corresponding project in `data/site.ts`:

```ts
images: [
  {
    src: "/images/projects/freedom-trail-home.webp",
    alt: "Freedom Trail guide home screen",
    caption: "Mobile home screen and nearby historic locations",
  },
  {
    src: "/images/projects/freedom-trail-map.webp",
    alt: "Interactive map in the Freedom Trail guide",
    caption: "Live location and historic landmark map",
  },
],
```

- One image displays as a normal project image.
- Two or more images automatically create a rotating carousel.
- Visitors can use the arrows, dots, keyboard arrow keys, or swipe on a phone.
- The carousel pauses while hovered, focused, or touched.
- `caption` is optional.

Wide images around 1600 × 900 pixels work best. Keep images for the same project close to the same aspect ratio so the slide changes stay visually steady.

The older `image` and `imageAlt` fields still work for a single image.

## Award image carousels
Add award, ceremony, certificate, event, or poster images to:

`public/images/awards`

Then add an `images` list to the matching award in `data/site.ts`:

```ts
images: [
  {
    src: "/images/awards/mqp-presentation.webp",
    alt: "Andrew presenting the smart-glasses capstone poster",
    caption: "WPI Project Presentation Day, 2025",
  },
  {
    src: "/images/awards/mqp-team.webp",
    alt: "The capstone team after receiving the Data Science Outstanding MQP Award",
    caption: "Outstanding MQP Award team photo",
  },
],
```

The same responsive controls and swipe behavior are used for awards.

## Photography
Add images to `public/photography`, then update the `photographs` entries in `data/site.ts`.

## Colors
The core palette is defined near the end of `app/globals.css` under:

`Refined color system: restrained jewel accents with compact controls`

Changing those variables updates the accent colors throughout the site.


## Clean section titles
Decorative eyebrow pills above page and section headings were removed. Meaningful subsection labels now use simple text headings for a cleaner hierarchy.
