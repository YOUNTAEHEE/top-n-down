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
          <div className={styles.btnWrap}>
            <button type="button" className={styles.cancleBtn}>
              취소
            </button>
            <button type="button" className={styles.saveBtn}>
              등록
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
