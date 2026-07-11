import FadeIn from "./FadeIn";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about" aria-label="About the project">
      <div className="container">
        <FadeIn className={styles.inner}>
          <p className={styles.eyebrow}>The Project</p>
          <h2 className={styles.heading}>
            A correspondence written in cloth
          </h2>
          <p className={styles.body}>
            Threads of Correspondence looks back to the intimacy of communication
            before the digital age — the handwritten letter, the licked stamp, the
            weight of an envelope carried across distance. Ink stains, postal marks
            and fragments of script are drawn out and reinterpreted as contemporary
            textile prints for Marni, imagined first as a collection of scarves.
            Each pattern holds the trace of a hand and the quiet emotion of physical
            correspondence, translating the enduring value of a message meant to be
            kept into something worn close to the skin.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
