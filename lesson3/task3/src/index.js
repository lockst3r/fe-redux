import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({id: 90, name: 'water'}));
store.dispatch(addProduct({id: 25, name: 'apple'}));
store.dispatch(setUser({name: 'DeeDEe'}));
store.dispatch(setUser({name: 'Kakuzu'}));
store.dispatch(removeProduct(2));
store.dispatch(removeUser());