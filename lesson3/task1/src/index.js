import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrement(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'Zhekonda' }));
store.dispatch(addUser({ id: 2, name: 'Achuchuk' }));

store.dispatch(deleteUser(1));

store.dispatch(updateUser(2, { name: 'Jonh Cena', age: 55 }));
