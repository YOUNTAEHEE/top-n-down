// "use client";
// import styles from "./write.module.scss";
// import clsx from "clsx";
// import { useRouter } from "next/navigation";
// import supabase from "../../../supabaseClient";
// import { useState } from "react";
// export default function Write() {
//   const router = useRouter();
//   const [newPostTitle, setNewPostTitle] = useState("");
//   const [newPostCon, setNewPostCon] = useState("");

//   const addPost = async (e: any) => {
//     e.preventDefault();
//     if (newPostTitle.trim().length === 0) return;
//     const { data, error } = await supabase.from("post").insert([{ title: newPostTitle, content: newPostCon }]);
//     if (error) {
//       console.error("Error adding post:", error);
//     } else {
//       setNewPostTitle("");
//       setNewPostCon("");
//       router.push("/");
//     }
//   };

//   return (
//     <section className={styles.postWriteWrap}>
//       <div className={styles.containerWrap}>
//         <form onSubmit={addPost}>
//           <p className={styles.writeConTitle}>제목</p>
//           <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
//           <p className={styles.writeConTitle}>내용</p>
//           <textarea name="postCon" id="postCon" value={newPostCon} onChange={(e) => setNewPostCon(e.target.value)}></textarea>
//           <div className={styles.btnWrap}>
//             <button type="button" className={styles.cancleBtn} onClick={() => router.push("/")}>
//               취소
//             </button>
//             <button type="submit" className={styles.saveBtn}>
//               등록
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
//위는 supabase사용 아래는 spring boot사용시 코드
"use client";
import styles from "./write.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Write() {
  const router = useRouter();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostCon, setNewPostCon] = useState("");

  const addPost = async (e: any) => {
    e.preventDefault();
    if (newPostTitle.trim().length === 0 || newPostCon.trim().length === 0)
      return;

    try {
      const response = await fetch("http://localhost:8080/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newPostTitle,
          content: newPostCon,
          anonymousUserId: 1, // 익명 사용자 ID를 하드코딩하거나 실제 로직으로 대체
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      // 요청 성공 시, 폼을 초기화하고 메인 페이지로 이동
      setNewPostTitle("");
      setNewPostCon("");
      router.push("/");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <section className={styles.postWriteWrap}>
      <div className={styles.containerWrap}>
        <form onSubmit={addPost}>
          <p className={styles.writeConTitle}>제목</p>
          <input
            type="text"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            required
          />
          <p className={styles.writeConTitle}>내용</p>
          <textarea
            name="postCon"
            id="postCon"
            value={newPostCon}
            onChange={(e) => setNewPostCon(e.target.value)}
            required
          ></textarea>
          <div className={styles.btnWrap}>
            <button
              type="button"
              className={styles.cancleBtn}
              onClick={() => router.push("/")}
            >
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
