// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportResponseTime from '../../../app/middleware/responseTime';

declare module 'egg' {
  interface IMiddleware {
    responseTime: typeof ExportResponseTime;
  }
}
