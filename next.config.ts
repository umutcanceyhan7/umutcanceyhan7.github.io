import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages için static export ayarı
  output: "export",

  // User/organization page olduğu için basePath yok (root'ta yayınlanacak)
  // basePath ve assetPrefix gerekmiyor

  // Trailing slash GitHub Pages için önemli
  trailingSlash: true,

  // Image optimization static export'ta çalışmaz, devre dışı bırak
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
