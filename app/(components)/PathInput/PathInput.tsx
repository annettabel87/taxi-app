import React from "react";
import Image from "next/image";
import styles from "./PathInput.module.scss";

function PathInput() {
  return (
    <div className={styles.pathInput}>
      <div className={styles.inputBox}>
        <label htmlFor="start" className={styles.label}>
          <input type="text" className={styles.input} />
          <Image
            className={styles.img}
            src="/images/home.svg"
            alt="home"
            width={25}
            height={25}
          />
        </label>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="start" className={styles.label}>
          <input type="text" className={styles.input} />
          <Image
            className={styles.img}
            src="/images/location.svg"
            alt="home"
            width={25}
            height={25}
          />
        </label>
      </div>
    </div>
  );
}

export default PathInput;
