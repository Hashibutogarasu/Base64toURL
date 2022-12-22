/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? "/Base64toURL" : "",
  reactStrictMode: true,
  trailingSlash: true
}

module.exports = nextConfig
