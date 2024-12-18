import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-website-ai-usf-hndr/', // Senin repo adın
  plugins: [react()],
});
