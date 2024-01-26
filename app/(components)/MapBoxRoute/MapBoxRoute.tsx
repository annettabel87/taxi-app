import React from "react";
import { Layer, Source } from "react-map-gl";
import type { Feature } from "geojson";

interface IMapBoxRouteProps {
  coordinates: Array<number[]>;
}

function MapBoxRoute(props: IMapBoxRouteProps) {
  return (
    <Source
      type="geojson"
      data={
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: props.coordinates,
          },
        } as Feature
      }
    >
      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#36B563", "line-width": 4 }}
      />
    </Source>
  );
}

export default MapBoxRoute;
