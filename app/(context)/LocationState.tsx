"use client";
import React, { FC, useEffect, useState } from "react";
import { UserLocationContext } from "./UserLocationContext";
import type {
  ILocation,
  ILocationStateProps,
} from "../(interfaces)/interfaces";

function LocationState({ children }: ILocationStateProps) {
  const [userLocation, setUserLocation] = useState<ILocation | null>(null);

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
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
}

export default LocationState;
