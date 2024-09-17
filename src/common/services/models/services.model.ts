export interface IAnilistService {
  fetchAnime(id: number): Promise<Object>;
}
