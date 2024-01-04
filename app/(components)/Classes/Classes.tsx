"use client";

import React, { useState } from "react";
import styles from "./Classes.module.scss";
import { CarsList } from "@/app/(data)/CarsList";

function Classes() {
  const [selectedClass, setSelectedClass] = useState<number>();

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
            <p className={styles.classesBoldText}>${car.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Classes;
