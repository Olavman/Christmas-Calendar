import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Christmas-Calendar/', // This should match the name of your GitHub repository
  plugins: [react()],
});
