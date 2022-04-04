import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    chunkSizeWarningLimit: 99999,
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: atRule => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  plugins: [reactRefresh(), tsconfigPaths()],
});
