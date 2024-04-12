import React from "react";
import styles from "../css/verticalSwitch.module.css";

const VerticalSwitch = () => {
  return (
    <div className={styles.verticalLine}>
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
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
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
            <stop stop-color="#9256F4" stop-opacity="0.75" />
            <stop offset="0.915" stop-color="#36A1CE" stop-opacity="0.74" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default VerticalSwitch;
