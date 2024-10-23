// "use client";
// import styles from "./postDetail.module.scss";
// import clsx from "clsx";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import supabase from "../../../supabaseClient";
// import { MoonLoader } from "react-spinners";
// interface PostDetailProps {
//   params: {
//     id: number;
//   };
// }

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   up_votes: number;
//   down_votes: number;
// }

// export default function PostDetail({ params }: PostDetailProps) {
//   const router = useRouter();
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [hasVoted, setHasVoted] = useState<{ up: boolean; down: boolean }>({ up: false, down: false });
//   const [hovered, setHovered] = useState<{ up: boolean; down: boolean }>({ up: false, down: false });

//   const fetchPostDetail = async () => {
//     setLoading(true);
//     const { data, error } = await supabase.from("post").select("*").eq("id", params.id).single();

//     if (error) {
//       console.error("Error fetching post detail:", error);
//     } else {
//       setPost(data);
//       const storedVotes = localStorage.getItem(`votes_${params.id}`);
//       if (storedVotes) {
//         setHasVoted(JSON.parse(storedVotes));
//       }
//     }
//     setLoading(false);
//   };

//   const handleVote = async (type: "up" | "down") => {
//     if (!post || hasVoted.up || hasVoted.down) return;

//     const newVotes = type === "up" ? post.up_votes + 1 : post.down_votes + 1;
//     const updatedPost = type === "up" ? { ...post, up_votes: newVotes } : { ...post, down_votes: newVotes };

//     console.log("Updating vote for post:", post.id, "Type:", type);

//     const { data, error } = await supabase
//       .from("post")
//       .update(type === "up" ? { up_votes: newVotes } : { down_votes: newVotes })
//       .eq("id", post.id)
//       .select("*");

//     if (error) {
//       console.error("Error updating vote:", error);
//     } else {
//       console.log("Vote updated successfully:", data);
//       setPost(updatedPost);
//       const updatedVotes = { ...hasVoted, [type]: true };
//       setHasVoted(updatedVotes);
//       localStorage.setItem(`votes_${post.id}`, JSON.stringify(updatedVotes));
//     }
//   };

//   useEffect(() => {
//     fetchPostDetail();

//     const channel = supabase
//       .channel("public:post")
//       .on("postgres_changes", { event: "UPDATE", schema: "public", table: "post", filter: `id=eq.${params.id}` }, (payload) => {
//         const updatedPost = payload.new as Post;
//         if (updatedPost.id === params.id) {
//           setPost(updatedPost);
//         }
//       })
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [params.id]);

//   if (loading) {
//     // 로딩바 시도중.. 나오는지 확인
//     return (
//       <p className={styles.loading}>
//         <MoonLoader />
//       </p>
//     );
//   }

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <section className={styles.postDetailWrap}>
//       <div className={styles.containerWrap}>
//         <p className={styles.detailConTitle}>{post.title}</p>
//         <div className={styles.detailCon}>{post.content}</div>
//         <div className={styles.btnWrap}>
//           <button type="button" className={styles.beforeBtn} onClick={() => router.push("/")}>
//             이전으로
//           </button>
//         </div>
//         <div className={styles.choiceWrap}>
//           <div
//             className={clsx(styles.choiceTop, { [styles.on]: hasVoted.up || hovered.up })}
//             onMouseEnter={() => setHovered({ ...hovered, up: true })}
//             onMouseLeave={() => setHovered({ ...hovered, up: false })}
//             onClick={() => handleVote("up")}
//           >
//             <button type="button" className={clsx(styles.topBtn, { [styles.on]: hasVoted.up || hovered.up })} disabled={hasVoted.up || hasVoted.down}>
//               TOP
//               <span className={clsx(styles.choiceTopSTxt, { [styles.on]: hasVoted.up || hovered.up })}>선택하기</span>
//             </button>
//             <div className={styles.topVote}>
//               <div className={styles.voteNum}>{post.up_votes}</div>
//             </div>
//           </div>
//           <div
//             className={clsx(styles.choiceDown, { [styles.on]: hasVoted.down || hovered.down })}
//             onMouseEnter={() => setHovered({ ...hovered, down: true })}
//             onMouseLeave={() => setHovered({ ...hovered, down: false })}
//             onClick={() => handleVote("down")}
//           >
//             <button type="button" className={clsx(styles.downBtn, { [styles.on]: hasVoted.down || hovered.down })} disabled={hasVoted.up || hasVoted.down}>
//               DOWN
//               <span className={clsx(styles.choiceTopSTxt, { [styles.on]: hasVoted.down || hovered.down })}>선택하기</span>
//             </button>
//             <div className={styles.downVote}>
//               <div className={styles.voteNum}>{post.down_votes}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import styles from "./postDetail.module.scss";
// import clsx from "clsx";
// import { useRouter, useParams } from "next/navigation"; // useParams 추가
// import { useEffect, useState } from "react";
// import { MoonLoader } from "react-spinners";

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   upvotes: number;
//   downvotes: number;
// }

// export default function PostDetail() {
//   const router = useRouter();
//   const params = useParams(); // useParams로 params 가져오기
//   const { id } = params; // id 추출

//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [hasVoted, setHasVoted] = useState<{ up: boolean; down: boolean }>({
//     up: false,
//     down: false,
//   });
//   const [hovered, setHovered] = useState<{ up: boolean; down: boolean }>({
//     up: false,
//     down: false,
//   });

//   const fetchPostDetail = async () => {
//     if (!id) return; // id가 없을 때 바로 return
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8080/api/posts/${id}`);
//       if (!response.ok) {
//         throw new Error(`Error fetching post: ${response.statusText}`);
//       }
//       const data = await response.json();
//       setPost(data);
//       const storedVotes = localStorage.getItem(`votes_${id}`);
//       if (storedVotes) {
//         setHasVoted(JSON.parse(storedVotes));
//       }
//     } catch (error) {
//       console.error("Error fetching post detail:", error);
//     }
//     setLoading(false);
//   };

//   const handleVote = async (type: "up" | "down") => {
//     if (!post || hasVoted.up || hasVoted.down) return;

//     const newVotes = type === "up" ? post.upvotes + 1 : post.downvotes + 1;
//     const updatedPost =
//       type === "up"
//         ? { ...post, upvotes: newVotes }
//         : { ...post, downvotes: newVotes };

//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/posts/${post.id}/vote`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             type,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Error updating vote");
//       }

//       setPost(updatedPost);
//       const updatedVotes = { ...hasVoted, [type]: true };
//       setHasVoted(updatedVotes);
//       localStorage.setItem(`votes_${post.id}`, JSON.stringify(updatedVotes));
//     } catch (error) {
//       console.error("Error updating vote:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPostDetail(); // useEffect 내에서 fetch 실행
//   }, [id]);

//   if (loading) {
//     return (
//       <p className={styles.loading}>
//         <MoonLoader />
//       </p>
//     );
//   }

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <section className={styles.postDetailWrap}>
//       <div className={styles.containerWrap}>
//         <p className={styles.detailConTitle}>{post.title}</p>
//         <div className={styles.detailCon}>{post.content}</div>
//         <div className={styles.btnWrap}>
//           <button
//             type="button"
//             className={styles.beforeBtn}
//             onClick={() => router.push("/")}
//           >
//             이전으로
//           </button>
//         </div>
//         <div className={styles.choiceWrap}>
//           <div
//             className={clsx(styles.choiceTop, {
//               [styles.on]: hasVoted.up || hovered.up,
//             })}
//             onMouseEnter={() => setHovered({ ...hovered, up: true })}
//             onMouseLeave={() => setHovered({ ...hovered, up: false })}
//             onClick={() => handleVote("up")}
//           >
//             <button
//               type="button"
//               className={clsx(styles.topBtn, {
//                 [styles.on]: hasVoted.up || hovered.up,
//               })}
//               disabled={hasVoted.up || hasVoted.down}
//             >
//               TOP
//               <span
//                 className={clsx(styles.choiceTopSTxt, {
//                   [styles.on]: hasVoted.up || hovered.up,
//                 })}
//               >
//                 선택하기
//               </span>
//             </button>
//             <div className={styles.topVote}>
//               <div className={styles.voteNum}>{post.upvotes}</div>
//             </div>
//           </div>
//           <div
//             className={clsx(styles.choiceDown, {
//               [styles.on]: hasVoted.down || hovered.down,
//             })}
//             onMouseEnter={() => setHovered({ ...hovered, down: true })}
//             onMouseLeave={() => setHovered({ ...hovered, down: false })}
//             onClick={() => handleVote("down")}
//           >
//             <button
//               type="button"
//               className={clsx(styles.downBtn, {
//                 [styles.on]: hasVoted.down || hovered.down,
//               })}
//               disabled={hasVoted.up || hasVoted.down}
//             >
//               DOWN
//               <span
//                 className={clsx(styles.choiceTopSTxt, {
//                   [styles.on]: hasVoted.down || hovered.down,
//                 })}
//               >
//                 선택하기
//               </span>
//             </button>
//             <div className={styles.downVote}>
//               <div className={styles.voteNum}>{post.downvotes}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import styles from "./postDetail.module.scss";
import clsx from "clsx";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

interface Post {
  id: number;
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
}

export default function PostDetail() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState<{ up: boolean; down: boolean }>({
    up: false,
    down: false,
  });
  const [hovered, setHovered] = useState<{ up: boolean; down: boolean }>({
    up: false,
    down: false,
  });

  const fetchPostDetail = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/posts/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching post: ${response.statusText}`);
      }
      const data = await response.json();
      setPost(data);
      const storedVotes = localStorage.getItem(`votes_${id}`);
      if (storedVotes) {
        setHasVoted(JSON.parse(storedVotes));
      }
    } catch (error) {
      console.error("Error fetching post detail:", error);
    }
    setLoading(false);
  };

  const handleVote = async (type: "up" | "down") => {
    if (!post || hasVoted.up || hasVoted.down) return;

    const newVotes = type === "up" ? post.upvotes + 1 : post.downvotes + 1;
    const updatedPost =
      type === "up"
        ? { ...post, upvotes: newVotes }
        : { ...post, downvotes: newVotes };

    try {
      const response = await fetch(
        `http://localhost:8080/api/posts/${post.id}/vote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error updating vote");
      }

      setPost(updatedPost);
      const updatedVotes = { ...hasVoted, [type]: true };
      setHasVoted(updatedVotes);
      localStorage.setItem(`votes_${post.id}`, JSON.stringify(updatedVotes));
    } catch (error) {
      console.error("Error updating vote:", error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [id]);

  if (loading) {
    return (
      <p className={styles.loading}>
        <MoonLoader />
      </p>
    );
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  const totalVotes = post.upvotes + post.downvotes;
  const upVotePercentage =
    totalVotes > 0 ? (post.upvotes / totalVotes) * 100 : 50;
  const downVotePercentage =
    totalVotes > 0 ? (post.downvotes / totalVotes) * 100 : 50;

  return (
    <section className={styles.postDetailWrap}>
      <div className={styles.containerWrap}>
        <p className={styles.detailConTitle}>{post.title}</p>
        <div className={styles.detailCon}>{post.content}</div>
        <div className={styles.btnWrap}>
          <button
            type="button"
            className={styles.beforeBtn}
            onClick={() => router.push("/")}
          >
            이전으로
          </button>
        </div>
        <div className={styles.choiceWrap}>
          <div
            className={clsx(styles.choiceTop, {
              [styles.on]: hasVoted.up || hovered.up,
            })}
            onMouseEnter={() => setHovered({ ...hovered, up: true })}
            onMouseLeave={() => setHovered({ ...hovered, up: false })}
            onClick={() => handleVote("up")}
          >
            <button
              type="button"
              className={clsx(styles.topBtn, {
                [styles.on]: hasVoted.up || hovered.up,
              })}
              disabled={hasVoted.up || hasVoted.down}
            >
              TOP
              <span
                className={clsx(styles.choiceTopSTxt, {
                  [styles.on]: hasVoted.up || hovered.up,
                })}
              >
                선택하기
              </span>
            </button>
            <div className={styles.topVote}>
              <div
                className={styles.voteNum}
                style={{ width: `${upVotePercentage}%` }}
              >
                {post.upvotes}
              </div>
            </div>
          </div>
          <div
            className={clsx(styles.choiceDown, {
              [styles.on]: hasVoted.down || hovered.down,
            })}
            onMouseEnter={() => setHovered({ ...hovered, down: true })}
            onMouseLeave={() => setHovered({ ...hovered, down: false })}
            onClick={() => handleVote("down")}
          >
            <button
              type="button"
              className={clsx(styles.downBtn, {
                [styles.on]: hasVoted.down || hovered.down,
              })}
              disabled={hasVoted.up || hasVoted.down}
            >
              DOWN
              <span
                className={clsx(styles.choiceTopSTxt, {
                  [styles.on]: hasVoted.down || hovered.down,
                })}
              >
                선택하기
              </span>
            </button>
            <div className={styles.downVote}>
              <div
                className={styles.voteNum}
                style={{ width: `${downVotePercentage}%` }}
              >
                {post.downvotes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
