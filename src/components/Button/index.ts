import { Block } from '../../core/Block';
import styles from './styles.module.pcss';

interface ButtonProps {
  type?: string;
  label: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props });
  }

  render() {
    return this.compile(
      `
      <button class="{{ styles.button }}" type="{{ type }}">
          {{ label }}
      </button>
      `,
      { ...this.props, styles },
    );
  }
}
