import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import * as path from 'path';
import * as http from 'http';

export const httpServer = http.createServer(function (req, res) {
  const __dirname = path.resolve(path.dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);

  const bundleStream$ = createReadStream(file_path);

  pipeline(bundleStream$, res).catch((err) => {
    res.writeHead(404);
    res.end(JSON.stringify(err));
  })
});
