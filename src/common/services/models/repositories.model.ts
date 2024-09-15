export interface IAnilistRepository {
  fetchAnime(id: number): Promise<Object>;
}
