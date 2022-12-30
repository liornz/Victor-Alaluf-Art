const runtimeCaching = require("./cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  dynamicStartUrl: false,
  buildExcludes: [/middleware-manifest.json$/],
});
const { i18n } = require("./next-i18next.config");
const { withPlaiceholder } = require("@plaiceholder/next");

module.exports =
  process.env.NODE_ENV === "development"
    ? withPlaiceholder({
        images: {
          formats: ["image/avif", "image/webp"],
        },
        i18n,
      })
    : withPWA(
        withPlaiceholder({
          images: {
            formats: ["image/avif", "image/webp"],
          },
          i18n,
        })
      );
