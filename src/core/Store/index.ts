import { IUser } from '../../api/AuthAPI';
import { EventBus } from '../EventBus';
import { set } from '../../utils';
import { Block } from '../Block';

export interface State {
  user?: IUser;
}

enum StorageEvent {
  UpdateState = 'update',
}

class Store extends EventBus {
  private state: State = {};

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);

    console.log(this.state)

    this.emit(StorageEvent.UpdateState, this.state);
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: State) => any) {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(props: any) {
        super({ ...props, ...mapStateToProps(store.getState()) });
  
        store.on(StorageEvent.UpdateState, () => {
          const propsFromState = mapStateToProps(store.getState());
          this.setProps(propsFromState);
        });
      }
    }
  }
}

export default store;