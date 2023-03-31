import React from "react";
import styles from "../styles/ThankYou.module.css";

function ThankYou() {
  return (
    <div className={styles.ThankYou}>
      <div className={styles.icon}></div>
      <h1>ThankYou!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
