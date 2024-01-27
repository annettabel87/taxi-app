"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Map, { MapRef } from "react-map-gl";
import { UserLocationContext } from "@/app/(context)/UserLocationContext";
import {
  IDestinationCoordinateContext,
  IDirectionData,
  IDirectionDataContext,
  ISourceCoordinateContext,
  IUserLocationContext,
} from "@/app/(interfaces)/interfaces";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapBoxMap.module.scss";
import Markers from "../Markers/Markers";
import { DestinationCoordinateContext } from "@/app/(context)/DestinationCoordinateContext";
import { SourceCoordinateContext } from "@/app/(context)/SourceCoordinateContext copy";
import { MAPBOX_DRIVING_ENDPOINT } from "@/app/(constants)/constants";
import { DirectionDataContext } from "@/app/(context)/DirectionDataContext";
import MapBoxRoute from "../MapBoxRoute/MapBoxRoute";
import DriveInfo from "../DriveInfo/DriveInfo";

function MapBoxMap() {
  const [error, setError] = useState<string>("");
  const { userLocation, setUserLocation } = useContext(
    UserLocationContext
  ) as IUserLocationContext;

  const { sourceCoordinate, setSourceCoordinate } = useContext(
    SourceCoordinateContext
  ) as ISourceCoordinateContext;

  const { destinationCoordinate, setDestinationCoordinate } = useContext(
    DestinationCoordinateContext
  ) as IDestinationCoordinateContext;

  const { directionData, setDirectionData } = useContext(
    DirectionDataContext
  ) as IDirectionDataContext;

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

    if (sourceCoordinate && destinationCoordinate) {
      const data = getDirectionRoute();
    }
  }, [destinationCoordinate]);

  const getDirectionRoute = async () => {
    try {
      const response = await fetch(
        `${MAPBOX_DRIVING_ENDPOINT}${sourceCoordinate?.longitude},${sourceCoordinate?.latitude};${destinationCoordinate?.longitude},${destinationCoordinate?.latitude}?overview=full&geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCES_TOKEN}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = (await response.json()) as IDirectionData;
      if (result.code !== "Ok") {
        throw new Error("не удалось построить маршрут");
      }
      console.log(result);
      setDirectionData(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

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
        {directionData?.routes ? (
          <MapBoxRoute
            coordinates={directionData?.routes[0]?.geometry?.coordinates}
          />
        ) : null}
      </Map>
      <div className={styles.info}>
        <DriveInfo />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default MapBoxMap;
