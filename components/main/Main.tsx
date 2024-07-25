import styles from "./main.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import Pagination from "../pagination/Pagination";

export default function MainPage() {
  return (
    <section className={clsx(styles.mainPage)}>
      <div className={styles.issueDiv}>TOP ISSUE</div>
      <section className={styles.containerWrap}>
        <section className={styles.topCardList}>
          <h2 className={styles.cardListTitle}>
            최근 24시간 내 <br />
            <span className={styles.TitleEng}>TOP ISSUE</span>
          </h2>
          <div className={styles.bestCardList}>
            <PostCard bestWidth="bestWidth" />
            <PostCard bestWidth="bestWidth" />
            <PostCard bestWidth="bestWidth" />
            <PostCard bestWidth="bestWidth" />
          </div>
        </section>
        <section className={styles.middleCardList}>
          <h2 className={styles.cardListTitle}>
            새롭게 올라온 <span className={styles.TitleEng}>ISSUE</span>
          </h2>
          <div className={styles.cardList}>
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
            <PostCard middleWidth="middleWidth" />
          </div>
          <Pagination />
        </section>
        <section className={styles.downCardList}>
          <h2 className={styles.cardListTitle}>
            최근 24시간 내 <br />
            <span className={styles.TitleEng}>DOWN ISSUE</span>
          </h2>
          <div className={styles.bestCardList}>
            <PostCard bestWidth="bestWidth" />
            <PostCard bestWidth="bestWidth" />
            <PostCard bestWidth="bestWidth" />
            <PostCard bestWidth="bestWidth" />
          </div>
        </section>
      </section>
      <div className={styles.issueDiv}>DOWN ISSUE</div>
    </section>
  );
}
