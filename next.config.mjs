/** @type {import('next').NextConfig} */

const basePath = "/crecordsnext";

const nextConfig = {
  output: "export",

  trailingSlash: true,

  basePath,

  assetPrefix: basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },

  transpilePackages: [
    "three",
    "@react-three/drei",
  ],
};

export default nextConfig;
