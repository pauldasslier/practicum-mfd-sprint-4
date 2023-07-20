import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import { Block } from '../../core/Block';
import styles from './styles.module.pcss';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  events?: {
    click: (event: MouseEvent) => void;
  };
}

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (event) => {
          event.preventDefault();
          this.navigate();
        }
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(`<a class="{{ styles.link }}">{{ label }}</a>`, { ...this.props, styles });
  }
}

export const Link = withRouter(BaseLink);
