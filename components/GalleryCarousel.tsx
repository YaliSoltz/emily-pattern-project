"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { slides } from "@/lib/gallery";
import FadeIn from "./FadeIn";
import styles from "./GalleryCarousel.module.css";

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // drag state
  const drag = useRef({ active: false, startX: 0, moved: 0 });

  const clamp = useCallback(
    (i: number) => Math.max(0, Math.min(slides.length - 1, i)),
    []
  );

  const go = useCallback(
    (i: number) => setIndex((prev) => clamp(typeof i === "number" ? i : prev)),
    [clamp]
  );

  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { active: true, startX: e.clientX, moved: 0 };
    trackRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.moved = e.clientX - drag.current.startX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const { moved } = drag.current;
    drag.current.active = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
    const threshold = 60;
    if (moved <= -threshold) next();
    else if (moved >= threshold) prev();
  };

  return (
    <section className={styles.section} id="collection" aria-label="Collection gallery">
      <div className="container">
        <FadeIn className={styles.head}>
          <p className={styles.eyebrow}>The Collection</p>
          <h2 className={styles.heading}>Selected prints</h2>
        </FadeIn>
      </div>

      <FadeIn className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={slide.hero} aria-hidden={i !== index}>
              <figure className={styles.pair}>
                <div className={styles.hero}>
                  <Image
                    src={slide.hero}
                    alt={`${slide.caption} — principal print`}
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                    className={styles.img}
                    draggable={false}
                  />
                </div>
                <div className={styles.detail}>
                  <Image
                    src={slide.detail}
                    alt={`${slide.caption} — detail`}
                    fill
                    sizes="(max-width: 800px) 100vw, 26vw"
                    className={styles.img}
                    draggable={false}
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="container">
        <div className={styles.controls}>
          <div className={styles.captionRow}>
            <span className={styles.caption}>{slides[index].caption}</span>
            <span className={styles.count}>
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrow}
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous print"
            >
              &larr;
            </button>
            <button
              type="button"
              className={styles.arrow}
              onClick={next}
              disabled={index === slides.length - 1}
              aria-label="Next print"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* preview thumbnails use the larger hero image of each pair */}
        <div className={styles.thumbs} role="tablist" aria-label="Choose a print">
          {slides.map((slide, i) => (
            <button
              key={slide.hero}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
              onClick={() => go(i)}
              aria-label={slide.caption}
            >
              <Image
                src={slide.hero}
                alt=""
                fill
                sizes="120px"
                className={styles.img}
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
