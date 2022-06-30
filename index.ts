import 'dotenv/config';

import Jimp from 'jimp';
import { httpServer } from './src/http_server';
import { createWSServer } from './src/ws_server';
import robot from 'robotjs';

const HTTP_PORT = Number(process.env.HTTP_PORT) || 3000;
const WS_PORT = Number(process.env.WS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = createWSServer(WS_PORT);

process.on('SIGINT', () => {
  wss.close(() => {
    console.log('WebSocket is closed.');
    process.exit();
  });
});
