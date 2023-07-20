
const nextTranslate = require('next-translate-plugin')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable:
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'preview' ||
    process.env.NODE_ENV === 'production',
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: false,
  eslint: {
    dirs: ['src'],
  },
  ...nextTranslate()
});
