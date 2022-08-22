/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withPlugins = require('next-compose-plugins');
const  optimizedImage = require('next-optimized-images');

module.exports = withPlugins([optimizedImage], {target: 'serverless'});
