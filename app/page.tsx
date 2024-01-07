"use client";

import { useEffect, useState } from "react";
import Booking from "./(components)/Booking/Booking";
import MapBoxMap from "./(components)/Map/MapBoxMap";
import styles from "./Home.module.scss";
import { UserLocationContext } from "./(context)/UserLocationContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState({
    latitude: 52.244,
    longitude: 26.804,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setUserLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <div className={styles.home}>
      <UserLocationContext.Provider value={userLocation}>
        <div className={styles.container}>
          <Booking />
          <div className="col-span-2">
            <MapBoxMap />
          </div>
        </div>
      </UserLocationContext.Provider>
    </div>
  );
}
