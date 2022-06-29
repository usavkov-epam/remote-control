import {
  createWebSocketStream,
  WebSocketServer,
} from 'ws';

import { handleData } from './handler'

export class WSServer {
  wss;

  constructor(port: number = 8080, options: object = {}) {
    this.wss = new WebSocketServer({
      port,
      ...options
    }, () => {
      console.log(`WebSocket server created on the ${port} port!`);
    });

    this.wss.on('connection', (ws) => {
      const duplex$ = createWebSocketStream(ws, { encoding: 'utf8' });
  
      duplex$.on('data', (chunk) => {
        const data = handleData(chunk);
      })
    
      duplex$.on('error', () => {
        console.log('Internal error :(');
      })
    })
  }

  close(cb: (err?: Error) => void) {
    return this.wss.close(cb);
  }
}
