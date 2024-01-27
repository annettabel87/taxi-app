import { DirectionDataContext } from "@/app/(context)/DirectionDataContext";
import type { IDirectionDataContext } from "@/app/(interfaces)/interfaces";
import React, { useContext } from "react";
import styles from "./DriveInfo.module.css";

function DriveInfo() {
  const { directionData, setDirectionData } = useContext(
    DirectionDataContext
  ) as IDirectionDataContext;
  return (
    directionData && (
      <div className={styles.driveInfo}>
        <div className={styles.header}>
          <p className={styles.text}>
            <span className={styles.textBold}>Route - </span>
            {(directionData?.routes[0].distance / 1000).toFixed(2)} km
          </p>
          <p className={styles.text}>
            <span className={styles.textBold}>Duration - </span>
            {(directionData?.routes[0].duration / 60).toFixed(2)} min
          </p>
        </div>
      </div>
    )
  );
}

export default DriveInfo;
