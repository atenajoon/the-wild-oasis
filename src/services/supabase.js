import { createClient } from '@supabase/supabase-js';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2Y2xydXZqYmJ3YnlodHRpaHZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDY0NzAsImV4cCI6MjA0MTQ4MjQ3MH0.0GmI - TewIMK9mkiEng2jNGdLbrWulHOyWcuL3uM0XeQ';

const supabaseUrl = 'https://rvclruvjbbwbyhttihvb.supabase.co';
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
