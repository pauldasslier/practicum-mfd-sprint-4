import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/Button';
import { Block } from '../../core/Block';
import { withStore, State } from '../../core/Store';

export class BaseProfile extends Block {
  init() {
    this.children.button = new Button({
      label: 'Выйти',
      events: {
        click: () => { AuthController.logout(); }
      }
    });
  }

  componentDidMount(): void {
    AuthController.fetchUser();
  }

  render() {
    return this.compile(`
      <div>
        {{ first_name }} {{ second_name }}<br />
        {{ login }}<br />
        {{ email }}<br />
        {{ phone }}<br />
        {{{ button }}}
        {{{link}}}
      </div>
    `, this.props);
  }
}

function mapStateToProps(state: State) {
  return { ...state.user };
}

export const Profile = withStore(mapStateToProps)(BaseProfile);