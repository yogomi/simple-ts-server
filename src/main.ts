import { flexlog, PRIORITY } from 'common_libs/flexlog/flexlog';

import serveApi from './serveApi';

const projectName = process.env.npm_package_name !== undefined ?
  process.env.npm_package_name:
  'scops-own-server';

const logger = flexlog.logger;

logger.noizy();
logger.setLogLevel(PRIORITY.info);
logger.startBunyanLogger(projectName);

const server = serveApi();

process.on('SIGTERM', () => {
  server.close(() => {
    logger.info('HTTP server closed')
  });
})
