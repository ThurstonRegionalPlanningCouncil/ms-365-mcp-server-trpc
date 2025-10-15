import { defineConfig } from 'tsup';

const isWindows = process.platform === 'win32';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/endpoints.json'],
  format: ['esm'],
  target: 'es2020',
  outDir: 'dist',
  clean: true,
  bundle: false,
  splitting: false,
  sourcemap: false,
  dts: false,
  publicDir: false,
  onSuccess: isWindows ? undefined : 'chmod +x dist/index.js',
  loader: {
    '.json': 'copy',
  },
  noExternal: [],
  external: [
    '@azure/msal-node',
    '@modelcontextprotocol/sdk',
    'commander',
    'dotenv',
    'express',
    'js-yaml',
    'keytar',
    'winston',
    'zod',
  ],
});
