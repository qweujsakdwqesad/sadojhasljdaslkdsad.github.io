import { defineConfig } from 'vite';
import { shortcutsPlugin } from 'vite-plugin-shortcuts';

export default defineConfig({
  plugins: [
    shortcutsPlugin({
      shortcuts: [
        {
          key: 'c',
          description: 'close console',
          action: (server) => {
            console.log('Closing console'); // Debug log
            server.config.logger.clearScreen('error');
          },
        },
        {
          key: 's',
          description: 'reset console',
          action: (server) => {
            console.log('Resetting console'); // Debug log
            server.config.logger.clearScreen('error');
            server.printUrls();
          },
        },
        {
          key: 'r',
          description: 'restart the server',
          async action(server) {
            console.log('Restarting server'); // Debug log
            await server.restart();
          },
        },
        {
          key: 'u',
          description: 'show server url',
          action(server) {
            console.log('Showing server URL'); // Debug log
            server.config.logger.info('');
            server.printUrls();
          },
        },
        {
          key: 'q',
          description: 'quit',
          async action(server) {
            console.log('Quitting server'); // Debug log
            await server.close().finally(() => process.exit());
          },
        },
      ],
    }),
  ],
});
