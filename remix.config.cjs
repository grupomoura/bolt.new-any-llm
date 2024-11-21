/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  tailwind: true,
  postcss: true,
  watchPaths: ["./app/**/*"],
  serverDependenciesToBundle: [
    "nanostores",
    "@nanostores/react",
    "remix-island",
    "react-toastify",
    "@xterm/xterm",
    "@xterm/addon-fit",
    "@xterm/addon-web-links",
    "istextorbinary",
  ],
  browserNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      buffer: true,
      process: true,
    },
  },
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
};
