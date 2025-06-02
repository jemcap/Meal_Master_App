import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

import { fetchUserSession } from "../features/auth/authThunks";

const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // supabase.auth.getUser().then(({ data: { user } }) => {
    //   setUserId(user?.id ?? null);
    // });
    dispatch(fetchUserSession()).then((action: any) => {
      if (action.payload && action.payload.id) {
        setUserId(action.payload.id);
      } else {
        setUserId(null);
      }
    });
  }, [dispatch]);
  
  return { userId };
};

export default useAuth;
