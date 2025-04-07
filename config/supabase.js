// config/supabase.js

// Só declare se a biblioteca Supabase já foi carregada no HTML
const SUPABASE_URL = 'https://eibvsplfnpxlhzsiyooy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpYnZzcGxmbnB4bGh6c2l5b295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNDg4OTYsImV4cCI6MjA1OTYyNDg5Nn0.LWP_t0pLPQ7IkvW6kPkT_p2FRCLObCT1C1Kg5cmpSNA';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
