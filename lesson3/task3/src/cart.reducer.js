import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initalState = {
    products: []
}

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload)
      }
    case REMOVE_PRODUCT:
      const removeProduct = state.products.filter((product) => product.id !== action.payload)
      return {
        ...state,
        products: removeProduct
      }
    default:
      return state;
  }
}

export default cartReducer;


