// store.ts (Zustand di Client)
import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { client } from "../getUserInfo";

interface DataState {
  data: User | null;
  setData: () => void;
}

export const useDataStore = create<DataState>((set) => ({
  data: null,
  setData: async () => {
    const { user } = await client();
    set({ data: user });
  },
}));
