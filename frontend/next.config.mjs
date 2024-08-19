/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      API_URL: process.env.API_URL,
    },
    images: {
      domains: ['quotefancy.com'],
    }
  };
  
  export default nextConfig;
  