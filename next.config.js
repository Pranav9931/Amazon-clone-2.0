/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'm.media-amazon.com'],
  },
  env: {
    stipe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
}
