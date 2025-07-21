export interface BaseResponse<T = any> {
  message: string;
  data?: T;
  statusCode: number;
}
