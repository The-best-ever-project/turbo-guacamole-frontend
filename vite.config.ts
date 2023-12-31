import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig: UserConfig = {
    plugins: [react()],
  };

  const config: Record<ConfigEnv['command'], UserConfig> = {
    serve: {
      ...baseConfig,
      server: {
        port: 3000,
        open: true,
      },
      build: {
        sourcemap: 'inline',
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@shared': path.resolve(__dirname, './src/shared'),
          '@entities': path.resolve(__dirname, './src/entities'),
          '@widgets': path.resolve(__dirname, './src/widgets'),
          '@features': path.resolve(__dirname, './src/features'),
          '@pages': path.resolve(__dirname, './src/pages'),
        },
      },
    },

    build: {
      ...baseConfig,
    },
  };

  return config[command];
});
