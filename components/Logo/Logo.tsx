import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./Logo.module.css";

export function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.logo)} {...props}>
      {/* <svg
        className={styles.mark}
        fill="none"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M21.657 8H2l5.657 5.6v7.733L21.657 8ZM10.343 24H30l-5.657-5.6v-7.733L10.343 24Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        
      </svg> */}
      <svg
        className={styles.mark}
        width="800px"
        height="800px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L16 5L14 7V12L3 16L2.20711 15.2071L6.48196 10.9323C6.64718 10.9764 6.82084 11 7 11C8.10457 11 9 10.1046 9 9C9 7.89543 8.10457 7 7 7C5.89543 7 5 7.89543 5 9C5 9.17916 5.02356 9.35282 5.06774 9.51804L0.792893 13.7929L0 13L4 2H9L11 0Z"
          fill="#FFFFFF"
        />
      </svg>
      <span className={styles.wordmark}>RealTime Colab</span>
    </div>
  );
}
