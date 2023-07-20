import { Block } from '../../core/Block';
import styles from './styles.module.pcss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(
      `<input class="{{ styles.input }}" name="{{ name }}" type="{{ type }}" placeholder="{{placeholder}}"/>`,
      { ...this.props, styles },
    );
  }
}
