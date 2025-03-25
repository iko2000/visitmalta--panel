import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'www.pexels.com',
      'yzboxboggtunbhzpadpl.supabase.co',
      'yzboxboggtunbhzpadpl.supabase.in',
    ],
  },
  typescript: {
    // ⚠️ Dangerously ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;