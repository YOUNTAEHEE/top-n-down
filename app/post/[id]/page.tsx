import styles from "./postDetail.module.scss";
import clsx from "clsx";

interface PostDetailProps {
  params: {
    id: number;
  };
}

export default function PostDetail({ params }: PostDetailProps) {
  return (
    <section className={styles.postDetailWrap}>
      <div className={styles.containerWrap}>
        <p className={styles.detailConTitle}>제목</p>
        <div className={styles.detailCon}>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </div>
        <div className={styles.btnWrap}>
          <button type="button" className={styles.beforeBtn}>
            이전으로
          </button>
        </div>
        <div className={styles.choiceWrap}>
          <div className={styles.choiceTop}>
            <button type="button" className={clsx(styles.topBtn, styles.on)}>
              TOP
              <span className={clsx(styles.choiceTopSTxt, styles.on)}>선택하기</span>
            </button>
            <div className={styles.topVote}>
              <div className={styles.voteNum}>70</div>
            </div>
          </div>
          <div className={styles.choiceDown}>
            <button type="button" className={styles.downBtn}>
              DOWN
              <span className={clsx(styles.choiceTopSTxt)}>선택하기</span>
            </button>
            <div className={styles.downVote}>
              <div className={styles.voteNum}>70</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
