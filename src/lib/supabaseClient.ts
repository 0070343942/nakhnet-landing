import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL=https://tpbbesxizhpzptenxuql.supabase.co
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYmJlc3hpemhwenB0ZW54dXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMTE5NTMsImV4cCI6MjA2NDY4Nzk1M30.uuG_LvV8spAmIksV8FhzNicRYZQoLFrhu-BeYTUeKjY
);

export default supabase; 