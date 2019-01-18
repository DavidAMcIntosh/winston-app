import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';
import * as winston from 'winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';

/**
 * A simple controller to perform some basic logging
 */
export class LoggerController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  //tslint:disable no-any
  @get('/log')
  async log(): Promise<any> {
    return new Promise((resolve, reject) => {});
  }
}
