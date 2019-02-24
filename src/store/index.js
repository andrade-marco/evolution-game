//Redux store
import reducers from './reducers';
import { createStore } from 'redux';

//Configuring Redux store
export function configureStore() {
  return createStore(reducers);
}
