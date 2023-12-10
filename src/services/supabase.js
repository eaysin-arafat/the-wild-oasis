import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://faxmewxxhtijbtqogyyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheG1ld3h4aHRpamJ0cW9neXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5ODM0MjYsImV4cCI6MjAxNzU1OTQyNn0.BbxUjAvich6jCOs8SC_s9MxDRT11j8-pYbRTGLt9zlQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
