import { defineConfig } from 'vite';
import commonViteConfig from '../vite.config';

export default defineConfig({
  ...commonViteConfig,
  server: { port: 3012 },
});
