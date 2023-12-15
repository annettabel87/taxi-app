import React from "react";
import PathInput from "../PathInput/PathInput";
import styles from "./Booking.module.scss";

function Booking() {
  return (
    <div className={styles.booking}>
      <h2 className={styles.title}>Route details</h2>
      <div className={styles.wrapper}>
        <div className={styles.pathBlock}>
          <div className={styles.pathBlockSquare}></div>
          <div className={styles.pathBlockRectangle}></div>
          <div className={styles.pathBlockRound}></div>
        </div>
        <PathInput />
      </div>
    </div>
  );
}

export default Booking;
