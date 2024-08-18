/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["vaave.s3.amazonaws.com"],
    
    remotePatterns: [{ protocol: "https", hostname: "pbs.twimg.com" }],
  },
};

export default nextConfig;
