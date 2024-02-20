"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types_db";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [superbaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={superbaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
