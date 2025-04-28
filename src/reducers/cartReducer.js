export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.product],
      };
    case "REMOVE_FROM_CART": {
      const newCart = state.cart.filter(({ id }) => id !== payload);
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
};
