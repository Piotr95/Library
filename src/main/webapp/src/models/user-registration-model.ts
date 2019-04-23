export class UserRegistrationModel {
  username: string;
  password: string;

  setUsername(username: string) {
    if (typeof username === 'undefined' || !username) {
      throw new Error('Login  can not be empty.');
    }
    this.username = username;
  }

  setPassword(password: string) {
    if (typeof password === 'undefined' || !password) {
      throw new Error('Password can not be empty.');
    }
    this.password = password;
  }
}
