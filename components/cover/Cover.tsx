// "use client";
import styles from "./cover.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import { useEffect, useState } from "react";

export default function Cover() {
  // const [cover, setCover] = useState(true);
  // useEffect(() => {
  //   let timer = setTimeout(() => setCover(false), 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <>
      {/* {cover === true ? ( */}
      <section
        className={clsx(
          styles.coverWrap
          // ,
          //   { [styles.on]: cover, [styles.off]: !cover }
        )}
      >
        <h2>TOPNDOWN</h2>
        <section className={styles.visualLeft}>
          <div className={styles.leftTop}>
            <p>TOP ISSUE</p>
            <p>TOP ISSUE</p>
            <p>TOP ISSUE</p>
            <p>TOP ISSUE</p>
            <p>TOP ISSUE</p>
            <p>TOP ISSUE</p>
          </div>
          <div>
            <div></div>
          </div>
        </section>
        <section className={styles.visualRight}>
          <div className={styles.cardSize}>
            <PostCard />
          </div>
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </section>
      {/* ) : null} */}
    </>
  );
}
