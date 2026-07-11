import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.name}>Emily Kryzewski</p>
          <p className={styles.meta}>Textile Design</p>
          <p className={styles.meta}>2026</p>
        </div>
      </div>
    </footer>
  );
}
