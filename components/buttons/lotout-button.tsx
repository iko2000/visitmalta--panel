'use client'

import { createClient } from "@/utils/supabase/client";
export default function LogoutButtonclient() {

  const handleLogout = async () => {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
    >
      Logout
    </button>
  );
}