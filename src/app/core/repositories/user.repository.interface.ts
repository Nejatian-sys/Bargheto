export interface IUserRepository {
  getUsers(): Promise<any[]>;
  getUserById(id: string): Promise<any>;
  createUser(data: any): Promise<any>;
}
