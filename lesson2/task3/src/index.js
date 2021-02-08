import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 44, name: 'Vlad' }));
store.dispatch(addUser({ id: 66, name: 'Sanya' }));
store.dispatch(addUser({ id: 88, name: 'Serega' }));
store.dispatch(addUser({ id: 221, name: 'Anton' }));

store.dispatch(deleteUser(15));
store.dispatch(deleteUser(20));
