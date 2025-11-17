export abstract class IAuthRepository  {
  abstract login(username: string, password: string): any;
}
 