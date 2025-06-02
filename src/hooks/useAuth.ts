import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserId(user?.id ?? null);
    });
  }, []);
  return { userId };
};

export default useAuth;
