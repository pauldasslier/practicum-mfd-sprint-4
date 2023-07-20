import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import AuthController from '../../controllers/AuthController';
import { Block } from '../../core/Block';

import styles from './styles.module.pcss';

export class SignIn extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.login = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Логин'
    });

    this.children.password = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Пароль'
    });

    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: () => this.onSubmit()
      },
    });

    this.children.link = new Link({
      label: 'Регистрация',
      to: '/signup'
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);

    console.log(data, 'signin data');

    AuthController.signin(data);
  }

  render() {
    return this.compile(`
      <div class="{{ styles.signin }}">
          <div>Войти</div>
          {{{login}}}
          {{{password}}}
          {{{button}}}
          {{{link}}}
      </div>
    `, {...this.props, styles});
  }
}