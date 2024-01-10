"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PathInput.module.scss";
import type {
  IAddress,
  IDestinationCoordinateContext,
  ISourceCoordinateContext,
} from "@/app/(interfaces)/interfaces";
import {
  MAPBOX_RETRIEVE_URL,
  session_token,
} from "@/app/(constants)/constants";
import { SourceCoordinateContext } from "@/app/(context)/SourceCoordinateContext copy";
import { DestinationCoordinateContext } from "@/app/(context)/DestinationCoordinateContext";

function PathInput() {
  const [source, setSource] = useState<string>("");
  const [addressesList, setAddressesList] = useState<IAddress[]>([]);
  const { sourceCoordinate, setSourceCoordinate } = useContext(
    SourceCoordinateContext
  ) as ISourceCoordinateContext;

  const [destination, setDestination] = useState<string>("");
  const [destinationsList, setDestinationsList] = useState<IAddress[]>([]);
  const { destinationCoordinate, setDestinationCoordinate } = useContext(
    DestinationCoordinateContext
  ) as IDestinationCoordinateContext;

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

  const sourceHandler = async (item: IAddress) => {
    setSource(item.place_formatted);
    setAddressesList([]);

    const response = await fetch(
      `${MAPBOX_RETRIEVE_URL}${item.mapbox_id}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCES_TOKEN}`
    );
    const result = await response.json();
    setSourceCoordinate({
      latitude: result.features[0].geometry.coordinates[1],
      longitude: result.features[0].geometry.coordinates[0],
    });
    console.log(result);
  };

  const destinationHandler = async (item: IAddress) => {
    setDestination(item.place_formatted);
    setDestinationsList([]);

    const response = await fetch(
      `${MAPBOX_RETRIEVE_URL}${item.mapbox_id}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCES_TOKEN}`
    );
    const result = await response.json();
    setDestinationCoordinate({
      latitude: result.features[0].geometry.coordinates[1],
      longitude: result.features[0].geometry.coordinates[0],
    });
    console.log(result);
  };

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
                  sourceHandler(item);
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
                  destinationHandler(item);
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
