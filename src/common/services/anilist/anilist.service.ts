import { IAnilistRepository } from '../models/repositories.model';
import { IAnilistService } from '../models/services.model';

export class AnilistService implements IAnilistService {
  constructor(private anilistRepository: IAnilistRepository) {}

  async fetchAnime(id: number): Promise<Object> {
    const data = await this.anilistRepository.fetchAnime(id);

    return data;
  }
}
