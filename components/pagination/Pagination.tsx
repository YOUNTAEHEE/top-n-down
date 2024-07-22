import styles from "./pagination.module.scss";
import clsx from "clsx";

export default function Pagination() {
  return (
    <div className={clsx(styles.pagination)}>
      <div className={styles.page_num_box_wrap}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" width="20" height="20" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        <div className={clsx(styles.page_num_box_off, styles.page_num_box)}>1</div>

        <div className={clsx(styles.page_num_box_off)}>2</div>

        <div className={clsx(styles.page_num_box_off)}>3</div>

        <div className={clsx(styles.page_num_box_off)}>4</div>

        <div className={clsx(styles.page_num_box_off)}>5</div>

        <div className={clsx(styles.page_num_box_off)}>6</div>

        <div className={clsx(styles.page_num_box_off)}>7</div>

        <div className={clsx(styles.page_num_box_off)}>8</div>

        <div className={clsx(styles.page_num_box_off)}>9</div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" width="20" height="20" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
}
