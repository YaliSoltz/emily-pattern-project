import Image from "next/image";
import FadeIn from "./FadeIn";
import styles from "./Collage.module.css";

const pieces = [
  { src: "/images/collage-1.svg", cls: "large", alt: "Print laid across draped fabric" },
  { src: "/images/collage-2.svg", cls: "tall", alt: "Vertical detail of a printed scarf" },
  { src: "/images/collage-3.svg", cls: "square", alt: "Close study of an ink-mark motif" },
  { src: "/images/collage-4.svg", cls: "wide", alt: "Wide view of the collection folded" },
] as const;

export default function Collage() {
  return (
    <section className={styles.section} aria-label="Editorial imagery">
      <div className="container">
        <div className={styles.grid}>
          {pieces.map((p, i) => (
            <FadeIn
              key={p.src}
              className={`${styles.item} ${styles[p.cls]}`}
              delay={i * 120}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.img}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
