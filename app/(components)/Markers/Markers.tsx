import React, { useContext } from "react";
import Image from "next/image";
import { Marker } from "react-map-gl";
import { UserLocationContext } from "@/app/(context)/UserLocationContext";
import {
  IDestinationCoordinateContext,
  ISourceCoordinateContext,
  IUserLocationContext,
} from "@/app/(interfaces)/interfaces";
import { SourceCoordinateContext } from "@/app/(context)/SourceCoordinateContext copy";
import { DestinationCoordinateContext } from "@/app/(context)/DestinationCoordinateContext";

function Markers() {
  const { userLocation, setUserLocation } = useContext(
    UserLocationContext
  ) as IUserLocationContext;

  const { sourceCoordinate, setSourceCoordinate } = useContext(
    SourceCoordinateContext
  ) as ISourceCoordinateContext;

  const { destinationCoordinate, setDestinationCoordinate } = useContext(
    DestinationCoordinateContext
  ) as IDestinationCoordinateContext;

  if (!userLocation) return <div>Loading...</div>;
  return (
    <div>
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
      {sourceCoordinate !== null && (
        <Marker
          longitude={sourceCoordinate.longitude}
          latitude={sourceCoordinate.latitude}
          anchor="bottom"
        >
          <Image
            src="/images/locationGreen.svg"
            alt="house"
            width={30}
            height={30}
            className="object-contain"
          />
        </Marker>
      )}
      {destinationCoordinate !== null && (
        <Marker
          longitude={destinationCoordinate.longitude}
          latitude={destinationCoordinate.latitude}
          anchor="bottom"
        >
          <Image
            src="/images/locationGreen.svg"
            alt="house"
            width={30}
            height={30}
            className="object-contain"
          />
        </Marker>
      )}
    </div>
  );
}

export default Markers;
