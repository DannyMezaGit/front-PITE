export class ApiResponse<T> {
  success: number | undefined;
  message: string | undefined;
  data: T | undefined;
}
