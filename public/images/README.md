# Images

All images are the real exports from `Downloads/פטרנים`, resized/compressed to web-friendly
JPGs (source PNGs were print resolution, up to 38MB each).

## File map

| File               | Where it appears                    | Aspect ratio |
| ------------------ | ------------------------------------ | ------------ |
| `hero.jpg`         | Full-screen hero background          | landscape    |
| `gallery-1a.jpg`   | Carousel slide 1 — **large 70%**     | 1:1 (square) |
| `gallery-1b.jpg`   | Carousel slide 1 — detail 30%        | 1:1 (square) |
| `gallery-2a/2b` … `gallery-12a/12b` | Carousel slides 2–12    | 1:1 / 1:1    |
| `collage-1.jpg`    | Editorial collage — large            | ~3:4 (crops) |
| `collage-2.jpg`    | Editorial collage — tall vertical    | ~3:4         |
| `collage-3.jpg`    | Editorial collage — small square     | ~3:4 (crops) |
| `collage-4.jpg`    | Editorial collage — wide horizontal  | ~3:4 (crops) |

The **`…a` (70%) image of each carousel pair** is also used for the thumbnail previews.

Collage source photos are all ~3:4 portrait crops; only the "tall" grid slot matches that
shape natively — "large", "square", and "wide" crop more aggressively via `object-fit: cover`.
Reviewed via screenshot and it reads fine editorially, but if a specific crop looks off, swap
which file fills which slot in `components/Collage.tsx`, or adjust the slot `aspect-ratio` in
`components/Collage.module.css`.

To add, remove, or reorder carousel slides, edit the `slides` array in `lib/gallery.ts`
(currently generated as `Print — I` through `Print — XII`, in file-number order).

To replace any image, drop a new file into this folder with the same name (or update the path
in `lib/gallery.ts` / `components/Hero.tsx` / `components/Collage.tsx` if you rename it).
