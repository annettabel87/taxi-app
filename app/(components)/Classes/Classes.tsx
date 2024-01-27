"use client";

import React, { useCallback, useContext, useState } from "react";
import styles from "./Classes.module.scss";
import { CarsList } from "@/app/(data)/CarsList";
import { DirectionDataContext } from "@/app/(context)/DirectionDataContext";
import { IDirectionDataContext } from "@/app/(interfaces)/interfaces";

function Classes() {
  const [selectedClass, setSelectedClass] = useState<number>(1);
  const { directionData, setDirectionData } = useContext(
    DirectionDataContext
  ) as IDirectionDataContext;

  const getCost = useCallback(
    (price: number) => {
      if (directionData) {
        return ((price * directionData?.routes[0].distance) / 1000).toFixed(2);
      }
      return `${price} at 1km`;
    },
    [directionData]
  );

  return (
    <div className={styles.classes}>
      <h3 className={styles.classesTitle}>Choose Class</h3>
      <div className={styles.classesList}>
        {CarsList.map((car) => (
          <button
            key={car.id}
            className={`${styles.classesItem} ${
              selectedClass === car.id ? styles.active : ""
            }`}
            onClick={() => setSelectedClass(car.id)}
          >
            <p className={styles.classesText}>{car.name}</p>
            <p className={styles.classesBoldText}>${getCost(car.price)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Classes;
