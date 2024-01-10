"use client";

import { useState } from "react";
import Booking from "./(components)/Booking/Booking";
import MapBoxMap from "./(components)/Map/MapBoxMap";
import { DestinationCoordinateContext } from "./(context)/DestinationCoordinateContext";
import { SourceCoordinateContext } from "./(context)/SourceCoordinateContext copy";
import styles from "./Home.module.scss";
import { ILocation } from "./(interfaces)/interfaces";

export default function Home() {
  const [sourceCoordinate, setSourceCoordinate] = useState<ILocation | null>(null);
  const [destinationCoordinate, setDestinationCoordinate] = useState<ILocation | null>(null);

  return (
    <div className={styles.home}>
      <SourceCoordinateContext.Provider value={{sourceCoordinate, setSourceCoordinate}}>
        <DestinationCoordinateContext.Provider value={{destinationCoordinate, setDestinationCoordinate}}>
      <div className={styles.container}>
        <Booking />
        <div className="col-span-2">
          <MapBoxMap />
        </div>
      </div>
      </DestinationCoordinateContext.Provider>
      </SourceCoordinateContext.Provider>
    </div>
  );
}
