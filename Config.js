/* =====================================================================
   KONFIGURASI MANDOR - isi tiga nilai ini, lalu simpan.
   Supabase Dashboard > Project Settings > API
   ===================================================================== */
window.MANDOR_CONFIG = {
  // "Project URL"
  supabaseUrl: 'https://YOUR-PROJECT.supabase.co',

  // Kunci "anon public" (BUKAN service_role). Aman terlihat publik karena
  // keamanan data dijaga aturan RLS di database.
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqdHJmZmR6eHN6cnN4eHFpdHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwNTM3NDYsImV4cCI6MjEwNjYyOTc0Nn0.V_Qy_fKXxTgVdB-68vwWJSUkHaW-QkhZIrPVcKjkJxQ,

  // Ubah ke true setelah login Google diatur di Supabase
  enableGoogle: false
};
