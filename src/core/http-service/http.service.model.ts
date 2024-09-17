export interface IHttpService<IAPIResponse> {
  post: (
    url: string,
    body: { query: string; variables: object },
    config?: { params: URLSearchParams }
  ) => Promise<IAPIResponse>;
}
