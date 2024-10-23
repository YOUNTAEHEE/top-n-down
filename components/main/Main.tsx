// "use client";
// import styles from "./main.module.scss";
// import clsx from "clsx";
// import PostCard from "../postCard/PostCard";
// import Pagination from "../pagination/Pagination";
// import supabase from "../../supabaseClient";
// import { useState, useEffect } from "react";
// import { MoonLoader } from "react-spinners";
// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   up_votes: number;
//   down_votes: number;
// }

// export default function MainPage() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 15;
//   const fetchPosts = async () => {
//     setLoading(true);
//     const { data, error } = await supabase.from("post").select("*").order("id", { ascending: false });
//     if (error) {
//       console.error("Error fetching posts:", error);
//     } else {
//       setPosts(data || []);
//     }
//     setLoading(false);
//   };
//   useEffect(() => {
//     const channel = supabase
//       .channel("post")
//       .on("postgres_changes", { event: "*", schema: "public", table: "post" }, (payload) => {
//         console.log("Change received", payload);
//         fetchPosts();
//       })
//       .subscribe();
//     fetchPosts();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);

//   const topPosts = posts
//     .slice()
//     .sort((a, b) => b.up_votes - a.up_votes)
//     .slice(0, 4);

//   const downPosts = posts
//     .slice()
//     .sort((a, b) => b.down_votes - a.down_votes)
//     .slice(0, 4);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
//   return (
//     <section className={clsx(styles.mainPage)}>
//       <div className={styles.issueDiv}>TOP ISSUE</div>
//       <section className={styles.containerWrap}>
//         <section className={styles.topCardList}>
//           <h2 className={styles.cardListTitle}>
//             최근 24시간 내 <br />
//             <span className={styles.TitleEng}>TOP ISSUE</span>
//           </h2>
//           <div className={styles.bestCardList}>
//             {loading ? <MoonLoader /> : topPosts.map((post) => <PostCard key={post.id} post={post} bestWidth="bestWidth" />)}
//           </div>
//         </section>
//         <section className={styles.middleCardList}>
//           <h2 className={styles.cardListTitle}>
//             새롭게 올라온 <span className={styles.TitleEng}>ISSUE</span>
//           </h2>
//           <div className={styles.cardList}>
//             {loading ? <MoonLoader /> : currentPosts.map((post) => <PostCard key={post.id} post={post} middleWidth="middleWidth" />)}
//           </div>
//           <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
//         </section>
//         <section className={styles.downCardList}>
//           <h2 className={styles.cardListTitle}>
//             최근 24시간 내 <br />
//             <span className={styles.TitleEng}>DOWN ISSUE</span>
//           </h2>
//           <div className={styles.bestCardList}>
//             {loading ? <MoonLoader /> : downPosts.map((post) => <PostCard key={post.id} post={post} bestWidth="bestWidth" />)}
//           </div>
//         </section>
//       </section>
//       <div className={styles.issueDiv}>DOWN ISSUE</div>
//     </section>
//   );
// }

"use client";
import styles from "./main.module.scss";
import clsx from "clsx";
import PostCard from "../postCard/PostCard";
import Pagination from "../pagination/Pagination";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";

interface Post {
  id: number;
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
}

interface PaginatedPosts {
  content: Post[];
  totalPages: number;
  totalElements: number;
}

export default function MainPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 15;

  const fetchPosts = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/api/posts?page=${page - 1}&size=${postsPerPage}`
      );
      const data: PaginatedPosts = await response.json();
      setPosts(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const topPosts = posts
    .slice()
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 4);

  const downPosts = posts
    .slice()
    .sort((a, b) => b.downvotes - a.downvotes)
    .slice(0, 4);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            {loading ? (
              <MoonLoader />
            ) : (
              topPosts.map((post) => (
                <PostCard key={post.id} post={post} bestWidth="bestWidth" />
              ))
            )}
          </div>
        </section>
        <section className={styles.middleCardList}>
          <h2 className={styles.cardListTitle}>
            새롭게 올라온 <span className={styles.TitleEng}>ISSUE</span>
          </h2>
          <div className={styles.cardList}>
            {loading ? (
              <MoonLoader />
            ) : (
              posts.map((post) => (
                <PostCard key={post.id} post={post} middleWidth="middleWidth" />
              ))
            )}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPages * postsPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </section>
        <section className={styles.downCardList}>
          <h2 className={styles.cardListTitle}>
            최근 24시간 내 <br />
            <span className={styles.TitleEng}>DOWN ISSUE</span>
          </h2>
          <div className={styles.bestCardList}>
            {loading ? (
              <MoonLoader />
            ) : (
              downPosts.map((post) => (
                <PostCard key={post.id} post={post} bestWidth="bestWidth" />
              ))
            )}
          </div>
        </section>
      </section>
      <div className={styles.issueDiv}>DOWN ISSUE</div>
    </section>
  );
}
