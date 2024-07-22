import styles from "./main.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";

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
          <div className={styles.cardList}>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
          </div>
        </section>
        <section className={styles.middleCardList}>
          <h2 className={styles.cardListTitle}>
            새롭게 올라온 <span className={styles.TitleEng}>ISSUE</span>
          </h2>
          <div className={styles.cardList}>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
            <div className={styles.midCardWid}>
              <PostCard />
            </div>
          </div>
        </section>
        <section className={styles.downCardList}>
          <h2 className={styles.cardListTitle}>
            최근 24시간 내 <br />
            <span className={styles.TitleEng}>DOWN ISSUE</span>
          </h2>
          <div className={styles.cardList}>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
            <div className={styles.cardWid}>
              <PostCard />
            </div>
          </div>
        </section>
      </section>
      <div className={styles.issueDiv}>DOWN ISSUE</div>
    </section>
  );
}
