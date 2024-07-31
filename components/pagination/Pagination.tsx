import styles from "./pagination.module.scss";
import clsx from "clsx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}
export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={clsx(styles.pagination)}>
      <div className={styles.page_num_box_wrap}>
        <SlArrowLeft className={clsx({ [styles.disabled]: currentPage === 1 })} onClick={() => currentPage > 1 && paginate(currentPage - 1)} />
        {pageNumbers.map((number) => (
          <div key={number} onClick={() => paginate(number)} className={clsx(styles.page_num_box_off, { [styles.page_num_box]: number === currentPage })}>
            {number}
          </div>
        ))}
        <SlArrowRight
          className={clsx({ [styles.disabled]: currentPage === pageNumbers.length })}
          onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
        />
      </div>
    </div>
  );
}
