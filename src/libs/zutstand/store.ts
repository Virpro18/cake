// store.ts (Zustand di Client)
import { create } from "zustand";
import { supabase } from "../supabase/client";
import { User } from "@supabase/supabase-js";

interface DataState {
  data: User | null;
  setData: () => void;
}

export const useDataStore = create<DataState>((set) => ({
  data: null,
  setData: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    set({ data: user });
  },
}));
