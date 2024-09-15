import IAuthService from './auth.service.model';

export class AuthService implements IAuthService {
  signIn(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
