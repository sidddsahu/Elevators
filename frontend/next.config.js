// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//   },
//   typescript: {
//     ignoreBuildErrors: false,
//   },
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
// }
// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig