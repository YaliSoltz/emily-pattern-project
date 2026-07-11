/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder art is SVG and the final textile photos are the designer's own
    // high-resolution files — no runtime optimization needed for this static page.
    unoptimized: true,
  },
};

export default nextConfig;
