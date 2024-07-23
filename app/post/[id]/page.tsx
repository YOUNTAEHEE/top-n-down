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
        <p className={styles.detailCon}>내용</p>
      </div>
    </section>
  );
}
