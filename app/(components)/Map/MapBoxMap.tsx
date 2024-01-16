"use client";

import React, { useContext, useEffect, useRef } from "react";
import Map, { MapRef } from "react-map-gl";
import { UserLocationContext } from "@/app/(context)/UserLocationContext";
import {
  IDestinationCoordinateContext,
  ISourceCoordinateContext,
  IUserLocationContext,
} from "@/app/(interfaces)/interfaces";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapBoxMap.module.scss";
import Markers from "../Markers/Markers";
import { DestinationCoordinateContext } from "@/app/(context)/DestinationCoordinateContext";
import { SourceCoordinateContext } from "@/app/(context)/SourceCoordinateContext copy";

function MapBoxMap() {
  const { userLocation, setUserLocation } = useContext(
    UserLocationContext
  ) as IUserLocationContext;

  const { sourceCoordinate, setSourceCoordinate } = useContext(
    SourceCoordinateContext
  ) as ISourceCoordinateContext;

  const { destinationCoordinate, setDestinationCoordinate } = useContext(
    DestinationCoordinateContext
  ) as IDestinationCoordinateContext;

  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (sourceCoordinate) {
      mapRef.current?.flyTo({
        center: [sourceCoordinate.longitude, sourceCoordinate.latitude],
        duration: 2500,
      });
    }
  }, [sourceCoordinate]);

  useEffect(() => {
    if (destinationCoordinate) {
      mapRef.current?.flyTo({
        center: [
          destinationCoordinate.longitude,
          destinationCoordinate.latitude,
        ],
        duration: 2500,
      });
    }
  }, [destinationCoordinate]);

  if (!userLocation) return <div>Loading...</div>;

  return (
    <div className={styles.map}>
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCES_TOKEN}
        initialViewState={{
          longitude: userLocation.longitude,
          latitude: userLocation.latitude,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100%", borderTopRightRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/navigation-preview-night-v4"
      >
        <Markers />
      </Map>
    </div>
  );
}

export default MapBoxMap;
