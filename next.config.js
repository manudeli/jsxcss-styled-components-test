/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@jsxcss/styled-components'],
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
