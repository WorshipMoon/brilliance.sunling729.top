import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  /* 下面这段代码是为了解决打包压缩后，css样式不生效的问题 */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev) {
      config.optimization.minimizer = [];
    }
    return config;
  },
};

export default nextConfig;
