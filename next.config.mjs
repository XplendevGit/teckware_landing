/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.postimg.cc'], // Dominio de Postimage
    },
    experimental: {
        fontLoaders: [
          { loader: '@next/font/google', options: { subsets: ['latin'] } },
        ],
      },
  };
  
  export default nextConfig;
  