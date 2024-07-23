import styles from "./footer.module.scss";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.containerWrap}>
        <p className={styles.copyright}>ⓒ TOPNDOWN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
