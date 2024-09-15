import { IHttpService } from '../../../core/http-service/http.service.model';
import { IAnilistRepository } from '../models/repositories.model';

export class AnilistRepository implements IAnilistRepository {
  constructor(private anilistHttpService: IHttpService<{ data: any }>) {}

  async fetchAnime(id: number): Promise<Object> {
    const response = await this.anilistHttpService.get(`/anime/${id}`);

    return response;
  }
}
