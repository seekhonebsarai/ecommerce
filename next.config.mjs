/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    '192.168.1.5',
    '192.168.*.*',
    '10.*.*.*',
    '172.*.*.*',
    '*.local',
    '*.lan',
    '**.*',
    '*.*.*.*',
  ],
};

export default nextConfig;
