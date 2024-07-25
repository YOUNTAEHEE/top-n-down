"use client";
import styles from "./postCard.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
interface Props {
  middleWidth?: string;
  bestWidth?: string;
  coverWidth?: string;
  linkMove?: boolean;
  coverCardWhiteBg?: string;
}
export default function PostCard({
  middleWidth,
  bestWidth,
  coverWidth,
  linkMove,
  coverCardWhiteBg,
}: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (!linkMove) {
      router.push("/post/${id}");
    }
  };
  return (
    <article
      className={clsx(
        styles.postCard,
        middleWidth && styles[middleWidth],
        bestWidth && styles[bestWidth],
        coverWidth && styles[coverWidth],
        !linkMove && styles.mainStyle,
        linkMove && styles.coverStyle,
        coverCardWhiteBg
      )}
      onClick={handleClick}
    >
      <div className={styles.cardConTop}>
        <p
          className={clsx(
            styles.cardTitle,
            !linkMove && styles.mainStyle,
            linkMove && styles.coverStyle
          )}
        >
          게시글 제목입니다. 게시글 제목입니다.
        </p>
        <p
          className={clsx(
            styles.cardCon,
            !linkMove && styles.mainStyle,
            linkMove && styles.coverStyle
          )}
        >
          게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글
          내용입니다.게시글 내용입니다.게시글 내용입니다.게시글
          내용입니다.게시글 내용입니다.게시글
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
