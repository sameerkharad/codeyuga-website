import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
console.log("Vercel URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Vercel KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY);

export default supabase;
