# Images — how to swap in your own

Every image on the page is a labeled **placeholder** right now. Replace each file below
with your own textile photo. Keep the layout looking right by matching the recommended
aspect ratio (the page crops with `cover`, so exact pixels don't matter — proportion does).

## Swapping (2 steps)

1. Drop your image into this `public/images/` folder.
2. In the code, point the filename at your file's extension. The placeholders are `.svg`;
   your photos will be `.jpg`/`.png`/`.webp`. Update the extension in these files:
   - `components/Hero.tsx` → `hero`
   - `lib/gallery.ts` → the carousel pairs
   - `components/Collage.tsx` → the four collage images

   (Or simply save your file as the **same name** the code already references, e.g. keep it
   `hero.svg`-named — but real photos should use their true extension, so editing the two/three
   lines above is cleaner.)

## File map

| File               | Where it appears                    | Aspect ratio |
| ------------------ | ----------------------------------- | ------------ |
| `hero.svg`         | Full-screen hero background         | 16:9 (wide)  |
| `gallery-1a.svg`   | Carousel slide 1 — **large 70%**    | 4:3          |
| `gallery-1b.svg`   | Carousel slide 1 — detail 30%       | 3:4 (tall)   |
| `gallery-2a/2b`    | Carousel slide 2 (large / detail)   | 4:3 / 3:4    |
| `gallery-3a/3b`    | Carousel slide 3                    | 4:3 / 3:4    |
| `gallery-4a/4b`    | Carousel slide 4                    | 4:3 / 3:4    |
| `gallery-5a/5b`    | Carousel slide 5                    | 4:3 / 3:4    |
| `collage-1.svg`    | Editorial collage — large           | 4:3          |
| `collage-2.svg`    | Editorial collage — tall vertical   | 3:4          |
| `collage-3.svg`    | Editorial collage — small square    | 1:1          |
| `collage-4.svg`    | Editorial collage — wide horizontal | 21:9         |

The **`…a` (70%) image of each carousel pair** is also used for the thumbnail previews, so pick
your strongest print for those.

To add or remove carousel slides, edit the `slides` array in `lib/gallery.ts`.
