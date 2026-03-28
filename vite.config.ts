import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-root-files',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/sitemap.xml' || req.url === '/robots.txt') {
              const filePath = path.resolve(process.cwd(), req.url.slice(1));
              if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', req.url.endsWith('.xml') ? 'application/xml' : 'text/plain');
                res.end(fs.readFileSync(filePath));
                return;
              }
            }
            next();
          });
        },
        generateBundle() {
          ['sitemap.xml', 'robots.txt'].forEach(file => {
            const filePath = path.resolve(process.cwd(), file);
            if (fs.existsSync(filePath)) {
              this.emitFile({
                type: 'asset',
                fileName: file,
                source: fs.readFileSync(filePath)
              });
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
