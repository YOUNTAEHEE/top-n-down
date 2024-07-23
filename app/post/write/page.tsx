import styles from "./write.module.scss";
import clsx from "clsx";

export default function Write() {
  return (
    <section className={styles.postWriteWrap}>
      <div className={styles.containerWrap}>
        <form action="">
          <p className={styles.writeConTitle}>제목</p>
          <input type="text" />
          <p className={styles.writeConTitle}>내용</p>
          <textarea name="" id=""></textarea>
        </form>
      </div>
    </section>
  );
}
