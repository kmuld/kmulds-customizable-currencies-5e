import { defineConfig } from 'vite';
import path, { resolve } from 'path';

const PACKAGE_ID = 'kmulds-customizable-currency-5e';
const s_PACKAGE_ID = `modules/${PACKAGE_ID}`;

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/',
  base: `/${s_PACKAGE_ID}/`,
  publicDir: path.resolve(__dirname, 'public'),
  esbuild: {
    target: ['es2022'],
  },
  server: {
    port: 30001,
    proxy: {
      // Serves static files from main Foundry server.
      [`^(/${s_PACKAGE_ID}/(assets|lang|packs|style.css))`]: 'http://localhost:30000',

      // All other paths besides package ID path are served from main Foundry server.
      [`^(?!/${s_PACKAGE_ID}/)`]: 'http://localhost:30000',

      // Enable socket.io from main Foundry server.
      '/socket.io': { target: 'ws://localhost:30000', ws: true },
    },
  },
  resolve: {
    alias: {
      src: path.resolve('./src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    target: ['es2022'],
    lib: {
      entry: './main.ts',
      name: PACKAGE_ID,
      fileName: 'main',
      formats: ['es'],
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      mangle: {
        toplevel: true,
        keep_classnames: true,
      },
      ecma: 2020,
      module: true,
    },
  },
});
