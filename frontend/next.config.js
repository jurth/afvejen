/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "storage.googleapis.com"],
  },
}

module.exports = nextConfig
