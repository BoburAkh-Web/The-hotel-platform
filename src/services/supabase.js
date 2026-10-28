import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://juhccazcgrhtzfkvuwsk.supabase.co";
const supabaseKey = "sb_publishable_jz58F2bzkMDsWvOSGFY9IQ_oCMwGte2";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
