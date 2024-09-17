import { IMalRepository } from '../models/repositories.model';

export class MalRepository implements IMalRepository {
  fetchAnime(id: number): Promise<Object> {
    throw new Error(`Method not implemented. ${id}`);
  }
}
