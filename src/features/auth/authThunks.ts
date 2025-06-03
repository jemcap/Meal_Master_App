import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../lib/supabaseClient";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data.user;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data.user;
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
});

export const fetchUserSession = createAsyncThunk(
  "auth/fetchUserSession",
  async () => {
    const { data, error } = await supabase.auth.getUser();
    console.log(data.user);
    if (error) throw error;
    return data.user;
  }
);
