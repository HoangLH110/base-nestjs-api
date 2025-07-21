import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res = ctx.getResponse<Response>();

    return next.handle().pipe(
      map((data: any) => {
        if (
          typeof data === 'object' &&
          'message' in data &&
          'statusCode' in data
        ) {
          res.status(data.statusCode);
          return data;
        }

        res.status(200);
        return {
          message: 'Success',
          data,
          statusCode: 200,
        };
      }),
    );
  }
}
