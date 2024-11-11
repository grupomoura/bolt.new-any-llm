/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: [
    /^@remix-run\/.*/,
    /^react-router-dom$/,
  ],
  serverBuildTarget: "vercel",
  server: "./server.tsx",
  devServerPort: 8002,
};

// Import the Vercel preset
const vercelPreset = require("@vercel/remix-preset-vercel");

// Export the configuration
module.exports = vercelPreset(module.exports);
