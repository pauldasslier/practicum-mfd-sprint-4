import AuthController from '../../controllers/AuthController';
import { Block } from '../../core/Block';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';

import styles from './styles.module.pcss';

export class SignUp extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.firstName = new Input({
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя'
    });

    this.children.secondName = new Input({
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия'
    });

    this.children.email = new Input({
      name: 'email',
      type: 'email',
      placeholder: 'E-mail'
    });

    this.children.login = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Логин'
    });

    this.children.phone = new Input({
      name: 'phone',
      type: 'tel',
      placeholder: 'Телефон'
    });

    this.children.password = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Пароль'
    });

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      events: {
        click: () => this.onSubmit(),
      },
    });

    this.children.link = new Link({
      label: 'Войти',
      to: '/'
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);

    console.log(data, 'signup data');

    AuthController.signup(data);
  }

  render() {
    return this.compile(`
      <div class="{{ styles.signup }}">
        <div>Зарегистрироваться</div>
        {{{firstName}}}
        {{{secondName}}}
        {{{email}}}
        {{{login}}}
        {{{phone}}}
        {{{password}}}
        {{{button}}}
        {{{link}}}
      </div>
    `,
    {...this.props, styles}
    );
  }
}
