import { start } from './api/server';

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(`unhandledRejection ${reason}`);
  process.exit(1);
});

start();
