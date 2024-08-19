import { extendTheme } from '@mui/material';
import { pigment } from '@pigment-css/vite-plugin';
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const pigmentConfig = {
  theme: extendTheme(),
  transformLibrarys: ['@mui/material']
};

export default defineConfig({
  plugins: [
    pigment(pigmentConfig),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@pigment-css/react',
      '@mui/material-pigment-css',
    ],
  },
  ssr: {
    noExternal: [/@mui/, /@pigment-css/],
  },
});
