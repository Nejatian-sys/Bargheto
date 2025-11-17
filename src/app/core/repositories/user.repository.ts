import { IUserRepository } from './user.repository.interface';

export class UserRepository implements IUserRepository {

  async getUsers(): Promise<any[]> {
    // اتصال به API یا Database
    return fetch('/api/users').then(res => res.json());
  }

  async getUserById(id: string): Promise<any> {
    return fetch(`/api/users/${id}`).then(res => res.json());
  }

  async createUser(data: any): Promise<any> {
    return fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json());
  }
}
