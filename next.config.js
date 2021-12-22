const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const runtimeCaching = require('./cache');
const { i18n } = require('./next-i18next.config');
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPWA(withPlaiceholder({
  pwa: {
    dest: 'public',
    runtimeCaching,
    dynamicStartUrl: false,
    buildExcludes: [/middleware-manifest.json$/],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n,
}));
