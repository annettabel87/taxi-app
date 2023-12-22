"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PathInput.module.scss";
import { IAddress } from "@/app/(interfaces)/interfaces";

function PathInput() {
  const [source, setSource] = useState<string>("");
  const [addressesList, setAddressesList] = useState<IAddress[]>([]);

  const [destination, setDestination] = useState<string>("");
  const [destinationsList, setDestinationsList] = useState<IAddress[]>([]);

  const [isSourceChange, setIsSourceChange] = useState<boolean>(true);

  const [error, setError] = useState<string>();

  const getAddressList = async (searchText: string) => {
    try {
      const response = await fetch(`/api/search?q=${searchText}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (!result.ok) {
        setError(result.message);
      }
      if (isSourceChange) {
        setAddressesList(result);
      } else {
        setDestinationsList(result);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (source !== "") {
        getAddressList(source);
      }
    }, 1000);

    return () => clearTimeout(id);
  }, [source]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (destination !== "") {
        getAddressList(destination);
      }
    }, 1000);

    return () => clearTimeout(id);
  }, [destination]);

  return (
    <div className={styles.pathInput}>
      <div className={styles.inputBox}>
        <label htmlFor="start" className={styles.label}>
          <input
            type="text"
            className={styles.input}
            value={source}
            onChange={(e) => {
              setIsSourceChange(true);
              setSource(e.target.value);
            }}
          />
          <Image
            className={styles.img}
            src="/images/home.svg"
            alt="home"
            width={25}
            height={25}
          />
        </label>
        {!!addressesList.length && isSourceChange && (
          <div className={styles.addressList}>
            {addressesList.map((item: IAddress) => (
              <p
                className={styles.address}
                key={item.mapbox_id}
                onClick={() => {
                  setSource(item.place_formatted);
                  setAddressesList([]);
                }}
              >
                {item.place_formatted}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="start" className={styles.label}>
          <input
            type="text"
            className={styles.input}
            value={destination}
            onChange={(e) => {
              setIsSourceChange(false);

              setDestination(e.target.value);
            }}
          />
          <Image
            className={styles.img}
            src="/images/location.svg"
            alt="home"
            width={25}
            height={25}
          />
        </label>
        {!!destinationsList.length && !isSourceChange && (
          <div className={styles.addressList}>
            {destinationsList.map((item: IAddress) => (
              <p
                className={styles.address}
                key={item.mapbox_id}
                onClick={() => {
                  setDestination(item.place_formatted);
                  setDestinationsList([]);
                }}
              >
                {item.place_formatted}
              </p>
            ))}
          </div>
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default PathInput;
