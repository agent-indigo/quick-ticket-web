import {NextConfig} from 'next'
const domain: string = process.env.VERCEL_URL ?? 'localhost:3000'
const url: string = `http${domain === 'localhost:3000' ? '' : 's'}://${domain}`
const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_DOMAIN: url,
    NEXT_PUBLIC_API_DOMAIN: `${url}/api`
  },
  output: process.env.VERCEL_URL ? undefined : 'standalone',
  reactStrictMode: true,
  generateBuildId: (): string => `property-pulse-web-${Date.now()}`
}
export default nextConfig