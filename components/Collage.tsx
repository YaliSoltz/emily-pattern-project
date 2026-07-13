import Image from "next/image";
import FadeIn from "./FadeIn";
import styles from "./Collage.module.css";

const pieces = [
  { src: "/images/collage-1.jpg", cls: "large", alt: "Threads of Correspondence — editorial study I" },
  { src: "/images/collage-2.jpg", cls: "tall", alt: "Threads of Correspondence — editorial study II" },
  { src: "/images/collage-3.jpg", cls: "square", alt: "Threads of Correspondence — editorial study III" },
  { src: "/images/collage-4.jpg", cls: "wide", alt: "Threads of Correspondence — editorial study IV" },
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
