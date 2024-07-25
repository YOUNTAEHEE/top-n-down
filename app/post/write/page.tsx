"use client";
import styles from "./write.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
export default function Write() {
  const router = useRouter();
  return (
    <section className={styles.postWriteWrap}>
      <div className={styles.containerWrap}>
        <form action="">
          <p className={styles.writeConTitle}>제목</p>
          <input type="text" />
          <p className={styles.writeConTitle}>내용</p>
          <textarea name="" id=""></textarea>
          <div className={styles.btnWrap}>
            <button type="button" className={styles.cancleBtn} onClick={() => router.push("/")}>
              취소
            </button>
            <button type="button" className={styles.saveBtn} onClick={() => router.push("/")}>
              등록
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
