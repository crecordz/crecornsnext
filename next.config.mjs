/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  trailingSlash: true,

  basePath: "/crecornsnext",

  assetPrefix: "/crecornsnext",

  images: {
    unoptimized: true,
  },

  transpilePackages: [
    "three",
    "@react-three/drei",
  ],
};

export default nextConfig;