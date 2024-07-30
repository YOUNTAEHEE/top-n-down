"use client";
import styles from "./write.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import supabase from "../../../supabaseClient";
import { useState } from "react";
export default function Write() {
  const router = useRouter();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostCon, setNewPostCon] = useState("");

  const addPost = async (e: any) => {
    e.preventDefault();
    if (newPostTitle.trim().length === 0) return;
    const { data, error } = await supabase.from("post").insert([{ title: newPostTitle, content: newPostCon }]);
    if (error) {
      console.error("Error adding post:", error);
    } else {
      setNewPostTitle("");
      setNewPostCon("");
      router.push("/");
    }
  };

  return (
    <section className={styles.postWriteWrap}>
      <div className={styles.containerWrap}>
        <form onSubmit={addPost}>
          <p className={styles.writeConTitle}>제목</p>
          <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
          <p className={styles.writeConTitle}>내용</p>
          <textarea name="postCon" id="postCon" value={newPostCon} onChange={(e) => setNewPostCon(e.target.value)}></textarea>
          <div className={styles.btnWrap}>
            <button type="button" className={styles.cancleBtn} onClick={() => router.push("/")}>
              취소
            </button>
            <button type="submit" className={styles.saveBtn}>
              등록
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
