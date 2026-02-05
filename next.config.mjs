/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vyprodej-regalucz.s26.cdn-upgates.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
