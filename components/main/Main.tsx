"use client";
import styles from "./main.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import Pagination from "../pagination/Pagination";
import supabase from "../../supabaseClient";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  up_votes: number;
  down_votes: number;
}

export default function MainPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("post").select("*").order("id", { ascending: false });
    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };
  useEffect(() => {
    const channel = supabase
      .channel("post")
      .on("postgres_changes", { event: "*", schema: "public", table: "post" }, (payload) => {
        console.log("Change received", payload);
        fetchPosts();
      })
      .subscribe();
    fetchPosts();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
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
            {loading ? <p>Loading...</p> : posts.slice(0, 4).map((post) => <PostCard key={post.id} post={post} bestWidth="bestWidth" />)}
          </div>
        </section>
        <section className={styles.middleCardList}>
          <h2 className={styles.cardListTitle}>
            새롭게 올라온 <span className={styles.TitleEng}>ISSUE</span>
          </h2>
          <div className={styles.cardList}>
            {loading ? <p>Loading...</p> : posts.slice(4, 15).map((post) => <PostCard key={post.id} post={post} middleWidth="middleWidth" />)}
          </div>
          <Pagination />
        </section>
        <section className={styles.downCardList}>
          <h2 className={styles.cardListTitle}>
            최근 24시간 내 <br />
            <span className={styles.TitleEng}>DOWN ISSUE</span>
          </h2>
          <div className={styles.bestCardList}>
            {loading ? <p>Loading...</p> : posts.slice(0, 4).map((post) => <PostCard key={post.id} post={post} bestWidth="bestWidth" />)}
          </div>
        </section>
      </section>
      <div className={styles.issueDiv}>DOWN ISSUE</div>
    </section>
  );
}
