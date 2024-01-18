export default {
  setCartId(state, payload) {
    state.cartId = payload;
  },
  setCart(state, payload) {
    state.cart = payload;
  },
  setTotalPrice(state, payload) {
    state.totalPrice = Number(payload);
  },
  setTotalQuantity(state, payload) {
    state.totalQuantity = payload;
  }
}
