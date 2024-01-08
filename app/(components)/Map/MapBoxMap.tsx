"use client";

import React, { useContext } from "react";
import Map, { Marker } from "react-map-gl";
import { UserLocationContext } from "@/app/(context)/UserLocationContext";
import { IUserLocationContext } from "@/app/(interfaces)/interfaces";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapBoxMap.module.scss";

function MapBoxMap() {
  const { userLocation, setUserLocation } = useContext(
    UserLocationContext
  ) as IUserLocationContext;

  if (!userLocation) return <div>Loading...</div>;

  return (
    <div className={styles.map}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCES_TOKEN}
        initialViewState={{
          longitude: userLocation.longitude,
          latitude: userLocation.latitude,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100%", borderTopRightRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/navigation-preview-night-v4"
      >
        <Marker
          longitude={userLocation.longitude}
          latitude={userLocation.latitude}
          anchor="bottom"
        >
          <Image
            src="/images/house-green.svg"
            alt="house"
            width={30}
            height={30}
            className="object-contain"
          />
        </Marker>
      </Map>
    </div>
  );
}

export default MapBoxMap;
