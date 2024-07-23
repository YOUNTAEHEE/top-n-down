"use client";
import styles from "./header.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.headerWrap}>
      <div className={styles.containerWrap}>
        <h1 onClick={() => router.push("/")}>TOPNDOWN</h1>
        <button type="button" onClick={() => router.push("/post/write")} className={styles.writeBtn}>
          <p className={styles.writeBtnTxt}>글쓰기</p>
        </button>
      </div>
    </header>
  );
}
