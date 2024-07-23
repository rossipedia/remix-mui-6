import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { pigment } from '@pigment-css/vite-plugin';
import { extendTheme } from '@mui/material';
import { cjsInterop } from 'vite-plugin-cjs-interop';

const pigmentConfig = {
  theme: extendTheme(),
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
    cjsInterop({
      dependencies: ['@mui/material-css-pigment'],
    }),
  ],
});
