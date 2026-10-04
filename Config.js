/* =====================================================================
   KONFIGURASI MANDOR - isi tiga nilai ini, lalu simpan.
   Supabase Dashboard > Project Settings > API
   ===================================================================== */
window.MANDOR_CONFIG = {
  // "Project URL"
  supabaseUrl: 'https://YOUR-PROJECT.supabase.co',

  // Kunci "anon public" (BUKAN service_role). Aman terlihat publik karena
  // keamanan data dijaga aturan RLS di database.
  supabaseAnonKey: 'YOUR-ANON-KEY',

  // Ubah ke true setelah login Google diatur di Supabase
  enableGoogle: false
};
