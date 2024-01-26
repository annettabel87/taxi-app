import { createContext } from "react";
import type { IDirectionDataContext } from "../(interfaces)/interfaces";

export const DirectionDataContext =
  createContext<IDirectionDataContext | null>(null);
