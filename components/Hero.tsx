"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.media}>
        <Image
          src="/images/hero.svg"
          alt="Textile print from the Threads of Correspondence collection"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.veil} />
      </div>

      <div className={styles.overlay}>
        <p className={styles.eyebrow}>A Textile Collection for Marni</p>
        <h1 className={styles.name}>Emily Kryzewski</h1>
        <p className={styles.title}>Threads of Correspondence</p>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span>Scroll</span>
      </div>
    </section>
  );
}
