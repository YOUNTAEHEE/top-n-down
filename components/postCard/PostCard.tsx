import styles from "./postCard.module.scss";
import clsx from "clsx";

export default function PastCard() {
  return (
    <article className={styles.postCard}>
      <div>
        <p>게시글 제목입니다. 게시글 제목입니다.</p>
        <p>
          게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글
          내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.
        </p>
      </div>
      <p>
        <span>
          TOP <span>1000</span>
        </span>
        <span>
          DOWN <span>1000</span>
        </span>
      </p>
    </article>
  );
}
