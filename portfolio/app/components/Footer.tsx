

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p>(C) 2026 Moshi Studio</p>
      <p className={styles.coinText}>INSERT COIN TO CONTINUE</p>
    </footer>
  );
}
