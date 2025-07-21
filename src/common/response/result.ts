export interface Result<T = any> {
  statusCode: number;
  message: string;
  data?: T;
}

export function successResponse<T>(
  statusCode: number,
  message: string,
  data: T,
): Result<T> {
  return { statusCode, message, data };
}

export function failResponse(statusCode: number, message: string): Result {
  return { statusCode, message };
}
