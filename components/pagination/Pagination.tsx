import styles from "./pagination.module.scss";
import clsx from "clsx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
export default function Pagination() {
  return (
    <div className={clsx(styles.pagination)}>
      <div className={styles.page_num_box_wrap}>
        <SlArrowLeft />

        <div className={clsx(styles.page_num_box_off, styles.page_num_box)}>1</div>

        <div className={clsx(styles.page_num_box_off)}>2</div>

        <div className={clsx(styles.page_num_box_off)}>3</div>

        <div className={clsx(styles.page_num_box_off)}>4</div>

        <div className={clsx(styles.page_num_box_off)}>5</div>

        <div className={clsx(styles.page_num_box_off)}>6</div>

        <div className={clsx(styles.page_num_box_off)}>7</div>

        <div className={clsx(styles.page_num_box_off)}>8</div>

        <div className={clsx(styles.page_num_box_off)}>9</div>

        <SlArrowRight />
      </div>
    </div>
  );
}
