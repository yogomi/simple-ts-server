import express from 'express';
import path from 'path';

export default function serveApi() {
  const app = express();
  app.disable('etag');

  app.get('/', (req, res) => {
    res.send('Hello! I\'m working!!');
  });

  app.use('/simple-ts/static/', express.static('../simple-ts-viewer/public/'));
  app.get('/simple-ts/view/*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../../simple-ts-viewer/public/index.html'));
  });

  return app.listen(3001);
}
