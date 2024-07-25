// "use client";
import styles from "./cover.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import { useEffect, useState } from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
interface Props {
  off: string;
}
export default function Cover({ off }: Props) {
  return (
    <>
      <div className={clsx(styles.coverAllWrap, styles[off])}>
        <section className={clsx(styles.coverWrap)}>
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
            <div className={styles.leftBottom}>
              <BsHandThumbsUpFill className={styles.goodBig} />
            </div>
          </section>
          <section className={styles.visualRight}>
            <div className={styles.cardDiv}>
              <PostCard coverWidth="coverWidth" />
              <div className={styles.cardMt}>
                <PostCard coverWidth="coverWidth" />
              </div>
            </div>
            <div className={styles.cardDiv}>
              <PostCard coverWidth="coverWidth" />
              <div className={styles.cardMt}>
                <PostCard coverWidth="coverWidth" />
              </div>
            </div>
          </section>
        </section>
      </div>
      {/* ) : null} */}
    </>
  );
}
