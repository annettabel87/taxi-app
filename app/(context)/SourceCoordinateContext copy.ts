import { createContext } from "react";
import type { ISourceCoordinateContext } from "../(interfaces)/interfaces";

export const SourceCoordinateContext =
  createContext<ISourceCoordinateContext | null>(null);
