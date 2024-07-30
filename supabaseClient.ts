import { createClient } from "@supabase/supabase-js";

type SupabaseConfig = {
  supabaseUrl: string;
  supabaseKey: string;
};

const supabaseConfig: SupabaseConfig = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  supabaseKey: process.env.NEXT_PUBLIC_SERVICE_KEY || "",
};

const supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey);

export default supabase;
