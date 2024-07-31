import styles from "./cover.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import supabase from "../../supabaseClient";
interface Props {
  off: string;
  linkMove: boolean;
}
interface Post {
  id: number;
  title: string;
  content: string;
  up_votes: number;
  down_votes: number;
}

export default function Cover({ off, linkMove }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("post").select("*").order("id", { ascending: false }).limit(4);
    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      console.log("Fetched posts:", data); // 데이터 확인을 위한 콘솔 로그
      setPosts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {/* 아래부분 카드가 늦게떠서 안뜨는거처럼 보인거임, 아래 그냥 데이터가져오지 않고 그냥 박아버리기 */}
                <div className={styles.cardDiv}>
                  {posts[0] && <PostCard post={posts[0]} coverWidth="coverWidth" linkMove={linkMove} coverCardWhiteBg={styles.coverCardWhiteBg01} />}
                  <div className={styles.cardMt}>
                    {posts[1] && <PostCard post={posts[1]} coverWidth="coverWidth" linkMove={linkMove} coverCardWhiteBg={styles.coverCardWhiteBg02} />}
                  </div>
                </div>
                <div className={styles.cardDiv}>
                  {posts[2] && <PostCard post={posts[2]} coverWidth="coverWidth" linkMove={linkMove} coverCardWhiteBg={styles.coverCardWhiteBg03} />}
                  <div className={styles.cardMt}>
                    {posts[3] && <PostCard post={posts[3]} coverWidth="coverWidth" linkMove={linkMove} coverCardWhiteBg={styles.coverCardWhiteBg04} />}
                  </div>
                </div>
              </>
            )}
          </section>
        </section>
      </div>
    </>
  );
}
