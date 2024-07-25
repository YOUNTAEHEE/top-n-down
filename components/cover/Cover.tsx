import styles from "./cover.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import { BsHandThumbsUpFill } from "react-icons/bs";
interface Props {
  off: string;
  linkMove: boolean;
}
export default function Cover({ off, linkMove }: Props) {
  return (
    <>
      <div className={clsx(styles.coverAllWrap, off && styles[off])}>
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
              <BsHandThumbsUpFill className={styles.goodMiddle} />
              <BsHandThumbsUpFill className={styles.good2xSmall} />
              <p className={styles.visualNum}>1000</p>
              <p className={styles.visualNum02}>1000</p>
              <p className={styles.visualNum03}>1000</p>
              <div className={styles.delPostNum}>-오늘 사라진 게시물 1000</div>
              <div className={styles.delPostNum02}>-오늘 사라진 게시물 1000</div>
              <div className={styles.circle}>
                <BsHandThumbsUpFill className={styles.goodSmall} />
              </div>
              <div className={styles.circle02}>
                <BsHandThumbsUpFill className={styles.goodSmall} />
              </div>
              <div className={styles.circle03}>
                <BsHandThumbsUpFill className={styles.goodSmall} />
              </div>
              <div className={styles.circle04}>
                <BsHandThumbsUpFill className={styles.goodSmall} />
              </div>
              <div className={styles.circle05}>
                <BsHandThumbsUpFill className={styles.goodSmall} />
              </div>
            </div>
          </section>
          <section className={styles.visualRight}>
            <div className={styles.cardDiv}>
              <PostCard coverWidth="coverWidth" linkMove={linkMove} />
              <div className={styles.cardMt}>
                <PostCard coverWidth="coverWidth" linkMove={linkMove} />
              </div>
            </div>
            <div className={styles.cardDiv}>
              <PostCard coverWidth="coverWidth" linkMove={linkMove} />
              <div className={styles.cardMt}>
                <PostCard coverWidth="coverWidth" linkMove={linkMove} />
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
