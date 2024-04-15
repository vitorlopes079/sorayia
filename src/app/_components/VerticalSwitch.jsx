import React from "react";
import styles from "../css/verticalSwitch.module.css";

const VerticalSwitch = ({ variant }) => {
  return (
    <div
      className={`${styles.verticalLine} ${
        variant === "first" ? "" : styles.second
      }`}
    >
      {variant === "first" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={styles.circle}
        >
          <circle
            cx="10.0003"
            cy="9.99967"
            r="7.33333"
            transform="rotate(-90 10.0003 9.99967)"
            fill="#94A3B8"
            stroke="url(#paint0_linear_8090_346)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8090_346"
              x1="17.3337"
              y1="9.99967"
              x2="2.66699"
              y2="9.99967"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9256F4" stopOpacity="0.75" />
              <stop offset="0.915" stopColor="#36A1CE" stopOpacity="0.74" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={styles.circle}
        >
          <circle
            cx="9.99984"
            cy="10.0002"
            r="7.33333"
            transform="rotate(-90 9.99984 10.0002)"
            fill="#94A3B8"
            stroke="url(#paint0_linear_8102_177)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8102_177"
              x1="17.3332"
              y1="10.0002"
              x2="2.6665"
              y2="10.0002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#999999" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default VerticalSwitch;
