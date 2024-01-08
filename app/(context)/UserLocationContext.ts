import { createContext } from "react";
import type { IUserLocationContext } from "../(interfaces)/interfaces";

export const UserLocationContext = createContext<IUserLocationContext | null>(
  null
);
