import {WinstonAppApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {WinstonAppApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new WinstonAppApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/log`);

  return app;
}
