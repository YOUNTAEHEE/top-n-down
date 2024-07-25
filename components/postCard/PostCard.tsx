"use client";
import styles from "./postCard.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
interface Props {
  middleWidth?: string;
  bestWidth?: string;
  coverWidth?: string;
}
export default function PostCard({ middleWidth, bestWidth, coverWidth }: Props) {
  const router = useRouter();
  return (
    <article
      className={clsx(styles.postCard, middleWidth && styles[middleWidth], bestWidth && styles[bestWidth], coverWidth && styles[coverWidth])}
      onClick={() => router.push("/post/${id}")}
    >
      <div className={styles.cardConTop}>
        <p className={styles.cardTitle}>게시글 제목입니다. 게시글 제목입니다.</p>
        <p className={styles.cardCon}>
          게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글
        </p>
      </div>
      <p className={styles.cardTopndown}>
        <span className={styles.topView}>
          TOP <span className={styles.topNum}>1000</span>
        </span>
        <span className={styles.downView}>
          DOWN <span className={styles.downNum}>1000</span>
        </span>
      </p>
    </article>
  );
}
