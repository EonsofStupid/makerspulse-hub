// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://vcmnomcwbmwqylwnomta.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbW5vbWN3Ym13cXlsd25vbXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNzY5NjEsImV4cCI6MjA0ODc1Mjk2MX0.Mb40Iuj_tybvZ6pVnwkopomnAsduP6zke5BZUztcLQw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);