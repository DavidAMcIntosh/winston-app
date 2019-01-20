import {Request, RestBindings, get} from '@loopback/rest';
import {inject} from '@loopback/context';
import * as winston from 'winston';

/**
 * A simple controller to perform some basic logging
 */
export class LoggerController {
  public logger = winston.loggers.get('customLogger');

  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  //tslint:disable no-any
  @get('/log')
  async log(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.logger.info('Begin Custom Logging!');
      this.logger.info(
        'Logging, using winston and winston-daily-rotate-file packages.',
      );
      this.logger.info('Resource: https://github.com/winstonjs');
      this.logger.info('This will be logged to ./logs');
      this.logger.info('End Custom Logging!');
      resolve('Awesome! Logs outputted to the console and to ./logs');
    });
  }
}
