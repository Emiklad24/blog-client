import create from "zustand";
import { persist } from "zustand/middleware";
import { storeName } from "./storeLocalStorageNames";

export const StartPositionStore = create(
  persist(
    (set, get) => ({
      startPosition: 0,
      changePosition: () => set((pos) => ({ startPosition: pos })),
    }),
    {
      name: storeName,
    }
  )
);
