export interface IAnilistRepository {
  fetchAnime(id: number): Promise<Object>;
}

export interface IMalRepository {
  fetchAnime(id: number): Promise<Object>;
}
