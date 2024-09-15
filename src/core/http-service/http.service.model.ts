export interface IHttpService<IAPIResponse> {
  get: (url: string, config?: { params: URLSearchParams }) => Promise<any>;

  post: (
    url: string,
    data?: any,
    config?: { params: URLSearchParams }
  ) => Promise<IAPIResponse>;

  put: (
    url: string,
    data?: any,
    config?: { params: URLSearchParams }
  ) => Promise<any>;
}
