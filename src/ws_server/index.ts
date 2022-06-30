import { WSServer } from './server';

export const createWSServer = (port: number) => new WSServer(port);
