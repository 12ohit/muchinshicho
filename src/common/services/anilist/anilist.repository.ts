import { IHttpService } from '../../../core/http-service/http.service.model';
import { IAnilistRepository } from '../models/repositories.model';

export class AnilistRepository implements IAnilistRepository {
  constructor(private anilistHttpService: IHttpService<{ data: unknown }>) {}

  async fetchAnime(id: number): Promise<object> {
    const query = `query ($id: Int) {
      Media (id: $id, type: ANIME) {
        id
        idMal
        title {
          romaji
          english
          native
        }
        status
        coverImage {
          extraLarge
        }
        bannerImage
        relations {
          edges {
            relationType
            node {
              id
              idMal
              title {
                english
              }
              type
            }
          }
        }
      }
    }`;
    const variables = {
      id
    };

    const response = await this.anilistHttpService.post('/', {
      query,
      variables
    });

    return response.data as object;
  }
}
