"use client";

import React, { useState } from "react";
import { PayList } from "@/app/(data)/PayList";
import Image from "next/image";
import styles from "./Pay.module.scss";

function Pay() {
  const [selectedPay, setSelectedPay] = useState<number>(1);
  return (
    <div className={styles.pay}>
      <h3 className={styles.title}>Pay</h3>
      <div className={styles.payList}>
        {PayList.map((item) => (
          <button
            key={item.id}
            className={`${styles.payItem} ${
              item.id === selectedPay ? styles.active : ""
            }`}
            onClick={() => setSelectedPay(item.id)}
          >
            <Image src={item.img} alt={item.name} width={50} height={30} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pay;
