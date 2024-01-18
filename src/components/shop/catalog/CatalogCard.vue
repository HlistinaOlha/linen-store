<template>
  <div v-for="product in products" :key="product.node.id" class="col-sm-3 item_4_1 item_2_1">
    <div class="product_item">
      <div class="product_img">
        <router-link :to="{
              name: 'product',
              params: {product_handle: product.node.handle}
            }">
          <img
            :src="product.node.featuredImage.url"
            :alt="product.node.title">
        </router-link>
      </div>
      <div class="product_info">
        <p class="product_name">
          <router-link :to="{
              name: 'product',
              params: {product_handle: product.node.handle}
            }"> {{ product.node.title }}
          </router-link>
        </p>
        <p class="product_desc product_desc__short">{{ product.node.shortDescription }}</p>
        <p class="product_desc product_desc__long">{{ product.node.description }}</p>
        <p v-if="product.node.priceRange.maxVariantPrice.amount ===product.node.priceRange.minVariantPrice.amount"
           class="product_price">
          <span class="money">${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }}</span>
        </p>
        <p v-else class="product_price">
          <span class="money">${{ Number(product.node.priceRange.minVariantPrice.amount).toFixed(2) }}</span>
          <span class="money_like"> – </span>
          <span class="money">${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }} </span>
          <span class="money_variants"> ({{ product.node.variants.edges.length }} variants)</span>
        </p>
        <div class="product_links">
          <form v-if="product.node.availableForSale && product.node.variants.edges.length === 1"
                @submit.prevent="addProductToCart({quantity: 1, productId: product.node.variants.edges[0].node.id})"
                method="post"
                action="/cart"
                >
            <button class="btn btn-cart" type="submit">Add to cart</button>
          </form>
          <router-link
            v-else-if="product.node.availableForSale && product.node.variants.edges.length > 1"
            class="btn"
            :to="{
              name: 'product',
              params: {product_handle: product.node.handle}
            }">
            Choose variant
          </router-link>
          <button v-else class="btn" disabled="">Unavailable</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import '@/assets/styles/catalog-card.css';
import '@/assets/styles/price.css';
import {mapActions, mapState} from "vuex";

export default {
  name: "CatalogCard",
  props: {
    products: {
      type: Array,
      required: true
    },
    handle: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  methods: {
    ...mapActions({
      addProductToCart: 'cart/addProductToCart'
    })
  }
}
</script>

<style scoped>

</style>
