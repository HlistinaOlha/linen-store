import mutations from "@/store/modules/cartModule/mutations";
import actions from "@/store/modules/cartModule/actions";

export default {
  state: () => ({
    cartId: '',
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
  }),
  getters: {},
  mutations: mutations,
  actions: actions,
  namespaced: true
}
