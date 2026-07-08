/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  transpilePackages: ["@react-three/drei"],

  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|m4a|wav|ogg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/audio/",
            outputPath: "static/audio/",
            name: "[name].[hash].[ext]",
            esModule: false,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
