import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vdclfcjrdmwrsxpeihhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY2xmY2pyZG13cnN4cGVpaGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwMDkwMDksImV4cCI6MjA3NjU4NTAwOX0.qP4--bi7vZNzEqxDRl8y364maVF9Gisu6T0OulbIYno";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
