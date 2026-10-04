/* =====================================================================
   KONFIGURASI - isi nilai di bawah, lalu simpan.
   Supabase Dashboard > Project Settings > API
   ===================================================================== */
window.MANDOR_CONFIG = {
  // Nama yang tampil di aplikasi (boleh diganti, misalnya 'RH System')
  appName: 'RH System',

  // "Project URL" dari Supabase
  supabaseUrl: 'https://YOUR-PROJECT.supabase.co',

  // Kunci "anon public" (BUKAN service_role). Aman terlihat publik karena
  // keamanan data dijaga aturan RLS di database.
  supabaseAnonKey: 'YOUR-ANON-KEY',

  // Ubah ke true setelah login Google diatur di Supabase
  enableGoogle: false
};
