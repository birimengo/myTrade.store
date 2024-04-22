import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyketiwabjcqggqaxhen.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95a2V0aXdhYmpjcWdncWF4aGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNzI2MTIsImV4cCI6MjAyODY0ODYxMn0.oKU0vyxg9Fee0cW7UrmAXWMFcpxRqyrMEXFB9na6aD8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
