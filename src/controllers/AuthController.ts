import { AuthAPI, ISignInData, ISignUpData } from '../api/AuthAPI';
import Router from '../core/Router';
import store from '../core/Store';

class AuthController {
  private api = new AuthAPI();

  async signin(data: ISignInData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signup(data);

      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.set('user', undefined);

      Router.go('/');

    } catch (error) {
      console.log(error);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.getUser();

      store.set('user', user);

    } catch (error) {
      throw error;
    }
  }
}

export default new AuthController();