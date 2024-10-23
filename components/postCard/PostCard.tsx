// "use client";
// import styles from "./postCard.module.scss";
// import clsx from "clsx";
// import { useRouter } from "next/navigation";
// import supabase from "../../supabaseClient";
// import { useEffect, useState } from "react";
// interface Props {
//   post: {
//     id: number;
//     title: string;
//     content: string;
//     up_votes: number;
//     down_votes: number;
//   };
//   middleWidth?: string;
//   bestWidth?: string;
//   coverWidth?: string;
//   linkMove?: boolean;
//   coverCardWhiteBg?: string;
// }

// export default function PostCard({ post, middleWidth, bestWidth, coverWidth, linkMove, coverCardWhiteBg }: Props) {
//   const router = useRouter();

//   const handleClick = (id: number) => {
//     if (!linkMove) {
//       router.push(`/post/${id}`);
//     }
//   };

//   if (!post) {
//     return <p>No post data available</p>;
//   }

//   return (
//     <article
//       className={clsx(
//         styles.postCard,
//         middleWidth && styles[middleWidth],
//         bestWidth && styles[bestWidth],
//         coverWidth && styles[coverWidth],
//         !linkMove && styles.mainStyle,
//         linkMove && styles.coverStyle,
//         coverCardWhiteBg
//       )}
//       onClick={() => handleClick(post.id)}
//       key={post.id}
//     >
//       <div className={styles.cardConTop}>
//         <p className={clsx(styles.cardTitle, !linkMove && styles.mainStyle, linkMove && styles.coverStyle)}>{post.title}</p>
//         <p className={clsx(styles.cardCon, !linkMove && styles.mainStyle, linkMove && styles.coverStyle)}>{post.content}</p>
//       </div>
//       <p className={styles.cardTopndown}>
//         <span className={styles.topView}>
//           TOP <span className={styles.topNum}>{post.up_votes}</span>
//         </span>
//         <span className={styles.downView}>
//           DOWN <span className={styles.downNum}>{post.down_votes}</span>
//         </span>
//       </p>
//     </article>
//   );
// }

"use client";
import styles from "./postCard.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  post: {
    id: number;
    title: string;
    content: string;
    upvotes: number; // 백엔드에서 반환하는 필드명에 맞게 수정
    downvotes: number; // 백엔드에서 반환하는 필드명에 맞게 수정
  };
  middleWidth?: string;
  bestWidth?: string;
  coverWidth?: string;
  linkMove?: boolean;
  coverCardWhiteBg?: string;
}

export default function PostCard({
  post,
  middleWidth,
  bestWidth,
  coverWidth,
  linkMove,
  coverCardWhiteBg,
}: Props) {
  const router = useRouter();

  const handleClick = (id: number) => {
    if (!linkMove) {
      router.push(`/post/${id}`);
    }
  };

  if (!post) {
    return <p>No post data available</p>;
  }

  return (
    <article
      className={clsx(
        styles.postCard,
        middleWidth && styles[middleWidth],
        bestWidth && styles[bestWidth],
        coverWidth && styles[coverWidth],
        !linkMove && styles.mainStyle,
        linkMove && styles.coverStyle,
        coverCardWhiteBg
      )}
      onClick={() => handleClick(post.id)}
      key={post.id}
    >
      <div className={styles.cardConTop}>
        <p
          className={clsx(
            styles.cardTitle,
            !linkMove && styles.mainStyle,
            linkMove && styles.coverStyle
          )}
        >
          {post.title}
        </p>
        <p
          className={clsx(
            styles.cardCon,
            !linkMove && styles.mainStyle,
            linkMove && styles.coverStyle
          )}
        >
          {post.content}
        </p>
      </div>
      <p className={styles.cardTopndown}>
        <span className={styles.topView}>
          TOP <span className={styles.topNum}>{post.upvotes}</span>
        </span>
        <span className={styles.downView}>
          DOWN <span className={styles.downNum}>{post.downvotes}</span>
        </span>
      </p>
    </article>
  );
}
