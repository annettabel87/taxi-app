import { createContext } from "react";
import type { IDestinationCoordinateContext } from "../(interfaces)/interfaces";

export const DestinationCoordinateContext =
  createContext<IDestinationCoordinateContext | null>(null);
