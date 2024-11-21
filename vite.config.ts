import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import tsconfigPaths from 'vite-tsconfig-paths';
import sassDts from 'vite-plugin-sass-dts';
import type { ViteDevServer } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    UnoCSS(),
    tsconfigPaths(),
    chrome129IssuePlugin(),
    optimizeCssModules({ apply: 'build' }),
    sassDts({
      enabledMode: ['development', 'production'],
      global: {
        generate: true,
        outFile: './app/styles/style.d.ts',
      },
    }),
  ],
  envPrefix: ["VITE_", "OPENAI_LIKE_API_", "OLLAMA_API_BASE_URL", "LMSTUDIO_API_BASE_URL"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./app/styles/variables.scss";`,
      },
    },
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '~': '/app',
      path: 'path-browserify',
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});

function chrome129IssuePlugin() {
  return {
    name: 'chrome129IssuePlugin',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const raw = req.headers['user-agent']?.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (raw && parseInt(raw[2]) === 129) {
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        }
        next();
      });
    },
  };
}
