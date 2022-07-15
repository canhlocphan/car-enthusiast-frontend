/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nav.porsche.com", "cdn.ui.porsche.com"],
    minimumCacheTTL: 3153565,
  },
};
