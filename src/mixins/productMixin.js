import {mapActions, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setSelectedOptions: 'products/setSelectedOptions'
    }),
    ...mapActions({
      fetchProductItem: 'products/fetchProductItem',
      addProductToCart: 'cart/addProductToCart'
    })
  }
}
