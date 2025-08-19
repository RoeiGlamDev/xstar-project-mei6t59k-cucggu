import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  optimization: {
    images: {
      loader: 'imgix',
      path: 'https://your-image-domain.com/'
}
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});

    return config;
  },
  env: {
    BRAND_NAME: 'GlamCS',
    PRIMARY_COLOR: '#FFA500', // Orange
    SECONDARY_COLOR: '#FFFFFF', // White
  }
};

export default nextConfig;