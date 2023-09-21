import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom'
  },
  coverage: {
    reporter: ['text', 'json-summary', 'json']
  }
});