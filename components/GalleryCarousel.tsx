"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { slides } from "@/lib/gallery";
import FadeIn from "./FadeIn";
import styles from "./GalleryCarousel.module.css";

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

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

  const closeZoom = useCallback(() => setZoomOpen(false), []);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomOpen, closeZoom, next, prev]);

  return (
    <section className={styles.section} id="collection" aria-label="Collection gallery">
      <div className="container">
        <FadeIn className={styles.head}>
          <p className={styles.eyebrow}>The Collection</p>
          <h2 className={styles.heading}>Selected prints</h2>
        </FadeIn>
      </div>

      <FadeIn className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div className={styles.slide} key={slide.hero} aria-hidden={i !== index}>
              <figure className={styles.pair}>
                <div
                  className={styles.hero}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge ${slide.caption}`}
                  onClick={() => setZoomOpen(true)}
                  onKeyDown={(e) => e.key === "Enter" && setZoomOpen(true)}
                >
                  <Image
                    src={slide.hero}
                    alt={`${slide.caption} — principal print`}
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                    className={styles.img}
                    draggable={false}
                  />
                </div>
                <div
                  className={styles.detail}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge ${slide.caption} detail`}
                  onClick={() => setZoomOpen(true)}
                  onKeyDown={(e) => e.key === "Enter" && setZoomOpen(true)}
                >
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

      {zoomOpen && (
        <div
          className={styles.zoomOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`${slides[index].caption} — enlarged view`}
          onClick={closeZoom}
        >
          <button
            type="button"
            className={styles.zoomClose}
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
            aria-label="Close enlarged view"
          >
            &times;
          </button>

          <button
            type="button"
            className={`${styles.zoomArrow} ${styles.zoomArrowPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            disabled={index === 0}
            aria-label="Previous print"
          >
            &larr;
          </button>

          <div className={styles.zoomPair} onClick={(e) => e.stopPropagation()}>
            <div className={styles.zoomHero}>
              <Image
                src={slides[index].hero}
                alt={`${slides[index].caption} — principal print`}
                fill
                sizes="90vw"
                className={styles.img}
                priority
              />
            </div>
            <div className={styles.zoomDetail}>
              <Image
                src={slides[index].detail}
                alt={`${slides[index].caption} — detail`}
                fill
                sizes="60vw"
                className={styles.img}
                priority
              />
            </div>
          </div>

          <button
            type="button"
            className={`${styles.zoomArrow} ${styles.zoomArrowNext}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            disabled={index === slides.length - 1}
            aria-label="Next print"
          >
            &rarr;
          </button>

          <p className={styles.zoomCaption}>{slides[index].caption}</p>
        </div>
      )}
    </section>
  );
}
