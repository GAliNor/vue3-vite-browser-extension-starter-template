import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export const sharedConfig = defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },

  plugins: [vue()],

  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/index.html'),
        content: resolve(__dirname, 'src/content/main.ts'),
        background: resolve(__dirname, 'src/background/main.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'content') {
            return 'src/content/[name].js';
          } else if (chunkInfo.name === 'background') {
            return 'src/background/[name].js';
          }
          return 'src/[name].js';
        },
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'content') {
            return 'src/content/[name]-[hash].js';
          } else if (chunkInfo.name === 'background') {
            return 'src/background/[name]-[hash].js';
          }
          return 'src/[name]-[hash].js';
        },
        assetFileNames: (assetInfo) => {
          return 'src/assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
