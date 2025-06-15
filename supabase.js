import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://uncgnvjpvwfnkqmdzjvc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuY2dudmpwdndmbmtxbWR6anZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDc4MDEsImV4cCI6MjA2NTUyMzgwMX0.E6-Pp8bQ_y0scb324Vy4P5TS5l978Rylw42SFjtG76c";


export const supabase = createClient(supabaseUrl, supabaseKey);


