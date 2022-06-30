import {
  createWebSocketStream,
  WebSocketServer,
} from 'ws';

import { handleCommand } from '../commands';

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
      const duplex$ = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
  
      duplex$.on('data', async (chunk) => {
        const [command, ...args] = chunk.split(' ');
        const result = await handleCommand(command, args);
        const response = [command, result].join(' ');

        console.log(`<- ${command} ${args.join(' ')}`);

        duplex$.write(`${response} \0`, () => {
          console.log(`-> ${response}`)
        });
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
