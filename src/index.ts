import { Elysia, t } from 'elysia';
import { anilistHttpRequest } from './core/http-service/axios';
import { AnilistRepository } from './common/services/anilist/anilist.repository';
import { AnilistService } from './common/services/anilist/anilist.service';

const anilistRepo = new AnilistRepository(anilistHttpRequest);

const app = new Elysia()
  .decorate('anilistService', new AnilistService(anilistRepo))
  .get('/', () => 'Hello Elysia')
  .get(
    '/anime/:id',
    async ({ anilistService, params: { id } }) =>
      await anilistService.fetchAnime(id),
    {
      params: t.Object({
        id: t.Numeric()
      })
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
