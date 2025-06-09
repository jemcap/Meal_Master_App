import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export type PantryItem = {
  id: string;
  user_id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiry_date: string;
  created_at: string;
};

export const usePantryItems = (userId: string) => {
  return useQuery({
    queryKey: ["pantryItems", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pantry_items")
        .select("*")
        .eq("user_id", userId)
        .order("expiry_date", { ascending: true });

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });
};

export const useAddPantryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (item: Omit<PantryItem, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("pantry_items")
        .insert([item]);
      if (error) throw error;
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pantryItems"] });
    },
  });
};

export const useDeletePantryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string | number }) => {
      const { error } = await supabase
        .from("pantry_items")
        .delete()
        .eq("id", id);
      if (error) throw error;
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pantryItems"] });
    },
  });
};
