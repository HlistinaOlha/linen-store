<template>
  <p v-if="totalQuantity === 0" class="alert alert-warning">It appears that your cart is currently empty.
    <router-link to="/catalog">Browse collections to find the products you are interested</router-link>
    .
  </p>
  <form v-else action="/cart" method="post" novalidate="" class="cart">
    <table class="table table-bordered cart_items">
      <thead>
      <tr>
        <th class="column_product" colspan="2">Product</th>
        <th class="column_price">Price</th>
        <th class="column_quantity">Quantity</th>
        <th class="column_total">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cart" :key="product.id">
        <td class="column_product_img">
          <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: product.node.merchandise.product.handle}
            }">
            <img class="cart__image"
                 :src="product.node.merchandise.image.url"
                 :alt="product.node.merchandise.product.title">
          </router-link>
        </td>
        <td class="column_product_info">
          <p class="cart_item__name product_name">
            <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: product.node.merchandise.product.handle}
            }">{{ product.node.merchandise.product.title }}
            </router-link>
          </p>
          <p
            v-if="product.node.merchandise.selectedOptions.length > 1 || product.node.merchandise.selectedOptions[0].name === 'Size'"
            class="cart_item__variant">
            <span v-for="option in product.node.merchandise.selectedOptions" :key="option.value">
              <b>{{ option.name }}</b>: {{ option.value }}</span>
          </p>
          <div class="cart_item__details">
            <p class="item_type"><b>Product type:</b> {{ product.node.merchandise.product.productType }}</p>
            <p class="item_vendor"><b>Vendor:</b> {{ product.node.merchandise.product.vendor }}</p>
            <p class="item_weight"><b>Weight:</b> {{ Number(product.node.merchandise.weight).toFixed(1) }}
              <span v-if="product.node.merchandise.weightUnit === 'KILOGRAMS'"> kg</span>
              <span v-if="product.node.merchandise.weightUnit === 'GRAMS'"> g</span>
              <span v-if="product.node.merchandise.weightUnit === 'OUNCES'"> oz</span>
              <span v-if="product.node.merchandise.weightUnit === 'POUNDS'"> lb</span>
            </p>
          </div>
          <button type="button"
                  class="btn cart_item__remove"
                  @click="removeProductFromCart(product.node.id)">Remove
          </button>
        </td>

        <td class="column_price">
          <span class="money">${{ Number(product.node.merchandise.priceV2.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
        </td>
        <td class="column_quantity">
          <div class="quantity_box">
            <input :value="product.node.quantity"
                   class="quantity_input" type="text">
            <span @click="product.node.quantity === 1 ? 1 : product.node.quantity-= 1" class="quantity_down">
              <i class="fa fa-minus" aria-hidden="true"></i>
            </span>
            <span @click="product.node.quantity+= 1" class="quantity_up">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </span>
            <button @click.prevent="updateCart({linesId: product.node.id, quantity: product.node.quantity})"
                    @mousedown.prevent
                    type="submit"
                    name="update"
                    class="btn">Update
            </button>
          </div>
        </td>
        <td class="column_total">
          <span class="money">${{
              (Number(product.node.merchandise.priceV2.amount) * product.node.quantity).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}</span>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="5">
          <p class="cart_total">Total weight <span>{{ totalWeight }} lb</span></p>
        </td>
      </tr>

      <tr>
        <td colspan="5">
          <p class="cart_total">Total price <span class="money">${{ Number(totalPrice).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span></p>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <label for="cart_note">Add a note to your order</label>
          <textarea name="note" id="cart_note"></textarea>
          <p class="alert alert-warning">Linence process all orders in USD. Shipping &amp; taxes calculated at
            checkout.</p>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <router-link class="btn" to="/catalog">Continue shopping</router-link>
          <button @click.prevent type="submit" name="checkout" class="btn btn_alt">Proceed to checkout</button>
        </td>
      </tr>
      </tfoot>
    </table>
  </form>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import '@/assets/styles/cart.css';

export default {
  name: "Cart",
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
      totalPrice: state => state.cart.totalPrice,
      totalQuantity: state => state.cart.totalQuantity
    }),
    totalWeight() {
      let totalWeight = 0;
      this.cart.forEach(item => {
        let productWeight = item.node.merchandise.weight * item.node.quantity;
        if (item.node.merchandise.weightUnit === 'KILOGRAMS') {
          totalWeight += productWeight * 2.20462
        }
        if (item.node.merchandise.weightUnit === 'GRAMS') {
          totalWeight += productWeight / 453.6
        }
        if (item.node.merchandise.weightUnit === 'OUNCES') {
          totalWeight += productWeight / 16
        }
        if (item.node.merchandise.weightUnit === 'POUNDS') {
          totalWeight += productWeight
        }
      })
      return totalWeight.toFixed(2);
    }
  },
  methods: {
    ...mapMutations({
      setCart: 'cart/setCart'
    }),
    ...mapActions({
      updateCart: 'cart/updateCart',
      removeProductFromCart: 'cart/removeProductFromCart'
    })
  }
}
</script>

<style scoped>

</style>
