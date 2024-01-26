"use client";

import { useState } from "react";
import Booking from "./(components)/Booking/Booking";
import MapBoxMap from "./(components)/Map/MapBoxMap";
import { DestinationCoordinateContext } from "./(context)/DestinationCoordinateContext";
import { SourceCoordinateContext } from "./(context)/SourceCoordinateContext copy";
import { IDirectionData, ILocation } from "./(interfaces)/interfaces";
import { DirectionDataContext } from "./(context)/DirectionDataContext";
import styles from "./Home.module.scss";

export default function Home() {
  const [sourceCoordinate, setSourceCoordinate] = useState<ILocation | null>(
    null
  );
  const [destinationCoordinate, setDestinationCoordinate] =
    useState<ILocation | null>(null);
  const [directionData, setDirectionData] = useState<IDirectionData | null>(
    null
  );

  return (
    <div className={styles.home}>
      <SourceCoordinateContext.Provider
        value={{ sourceCoordinate, setSourceCoordinate }}
      >
        <DestinationCoordinateContext.Provider
          value={{ destinationCoordinate, setDestinationCoordinate }}
        >
          <DirectionDataContext.Provider
            value={{ directionData, setDirectionData }}
          >
            <div className={styles.container}>
              <Booking />
              <div className="col-span-2">
                <MapBoxMap />
              </div>
            </div>
          </DirectionDataContext.Provider>
        </DestinationCoordinateContext.Provider>
      </SourceCoordinateContext.Provider>
    </div>
  );
}
