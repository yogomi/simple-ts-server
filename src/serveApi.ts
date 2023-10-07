import express from 'express';

export default function serveApi() {
  const app = express();
  app.disable('etag');

  app.get('/', (req, res) => {
    res.send('Hello! I\'m working!!');
  });

  return app.listen(3001);
}
