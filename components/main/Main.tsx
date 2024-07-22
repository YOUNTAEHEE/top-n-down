import styles from "./main.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";

export default function MainPage() {
  return (
    <section className={clsx(styles.mainPage)}>
      <div className={styles.issueDiv}>TOP ISSUE</div>
      <section className={(clsx(styles.topCardList), "containerWrap")}>
        <section>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
        <section>
          <PostCard />
        </section>
        <section>
          <PostCard />
        </section>
      </section>
    </section>
  );
}
