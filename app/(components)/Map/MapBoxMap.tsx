"use client";

import React from "react";
import Map from "react-map-gl";
import styles from "./MapBoxMap.module.scss";

function MapBoxMap() {
  return (
    <div className={styles.map}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCES_TOKEN}
        initialViewState={{
          longitude: 26.804,
          latitude: 52.244,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100%", borderTopRightRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/navigation-preview-night-v4"
      />
    </div>
  );
}

export default MapBoxMap;
