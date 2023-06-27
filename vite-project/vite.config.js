import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
       @import './src//styles/_variables.scss';
       @import './src/styles/_utils.scss';
       @import './src/styles/_mixins.scss';
       @import './src/styles/_container.scss';
       @import './src/styles/_functions.scss';
       @import './src/styles/_typography.scss';
       `
      }
    }
  },
})
