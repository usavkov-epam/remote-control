import 'dotenv/config';

import { httpServer } from './src/http_server';
import { createWSServer } from './src/ws_server';

const HTTP_PORT = Number(process.env.HTTP_PORT) || 3000;
const WS_PORT = Number(process.env.WS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = createWSServer(WS_PORT);

process.on('SIGINT', () => {
  httpServer.close(() => {
    console.log('HTTP server is closed.');
  })
  wss.close(() => {
    console.log('WebSocket is closed.');
    process.exit();
  });
});
