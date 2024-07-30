"use client";
import styles from "./postDetail.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import supabase from "../../../supabaseClient";

interface PostDetailProps {
  params: {
    id: number;
  };
}

interface Post {
  id: number;
  title: string;
  content: string;
  up_votes: number;
  down_votes: number;
}

export default function PostDetail({ params }: PostDetailProps) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState<{ up: boolean; down: boolean }>({ up: false, down: false });

  const fetchPostDetail = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("post").select("*").eq("id", params.id).single();

    if (error) {
      console.error("Error fetching post detail:", error);
    } else {
      setPost(data);
      const storedVotes = localStorage.getItem(`votes_${params.id}`);
      if (storedVotes) {
        setHasVoted(JSON.parse(storedVotes));
      }
    }
    setLoading(false);
  };

  const handleVote = async (type: "up" | "down") => {
    if (!post || hasVoted.up || hasVoted.down) return;

    const newVotes = type === "up" ? post.up_votes + 1 : post.down_votes + 1;
    const updatedPost = type === "up" ? { ...post, up_votes: newVotes } : { ...post, down_votes: newVotes };

    console.log("Updating vote for post:", post.id, "Type:", type);

    const { error } = await supabase
      .from("post")
      .update(type === "up" ? { up_votes: newVotes } : { down_votes: newVotes })
      .eq("id", post.id);

    if (error) {
      console.error("Error updating vote:", error);
    } else {
      console.log("Vote updated successfully:", updatedPost);
      setPost(updatedPost);
      const updatedVotes = { ...hasVoted, [type]: true };
      setHasVoted(updatedVotes);
      localStorage.setItem(`votes_${post.id}`, JSON.stringify(updatedVotes));
    }
  };

  useEffect(() => {
    fetchPostDetail();

    const channel = supabase
      .channel("public:post")
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "post", filter: `id=eq.${params.id}` }, (payload) => {
        const updatedPost = payload.new as Post;
        if (updatedPost.id === params.id) {
          setPost(updatedPost);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className={styles.postDetailWrap}>
      <div className={styles.containerWrap}>
        <p className={styles.detailConTitle}>{post.title}</p>
        <div className={styles.detailCon}>{post.content}</div>
        <div className={styles.btnWrap}>
          <button type="button" className={styles.beforeBtn} onClick={() => router.push("/")}>
            이전으로
          </button>
        </div>
        <div className={styles.choiceWrap}>
          <div className={styles.choiceTop}>
            <button
              type="button"
              className={clsx(styles.topBtn, { [styles.on]: hasVoted.up })}
              onClick={() => handleVote("up")}
              disabled={hasVoted.up || hasVoted.down}
            >
              TOP
              <span className={clsx(styles.choiceTopSTxt, { [styles.on]: hasVoted.up })}>선택하기</span>
            </button>
            <div className={styles.topVote}>
              <div className={styles.voteNum}>{post.up_votes}</div>
            </div>
          </div>
          <div className={styles.choiceDown}>
            <button
              type="button"
              className={clsx(styles.downBtn, { [styles.on]: hasVoted.down })}
              onClick={() => handleVote("down")}
              disabled={hasVoted.up || hasVoted.down}
            >
              DOWN
              <span className={clsx(styles.choiceTopSTxt, { [styles.on]: hasVoted.down })}>선택하기</span>
            </button>
            <div className={styles.downVote}>
              <div className={styles.voteNum}>{post.down_votes}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
