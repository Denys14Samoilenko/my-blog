"use client";
import { FavouritePage } from "@/app/components";
import ReduxPersistor from "../components/ReduxPersistor/ReduxPersistor";

export default function Favourites() {
  return (
    <ReduxPersistor>
      <FavouritePage />
    </ReduxPersistor>
  );
}
