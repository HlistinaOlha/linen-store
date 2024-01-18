<template>
  <div class="section_homepage section_featured-products">
    <div class="container collection">
      <h2 v-if="title" class="section_heading title ">{{ title }}</h2>
      <div class="row product_listing__main">
        <div v-for="product in featuredProducts" :key="product.node.id" class="col-xs-3">
          <div class="product_item">
            <div class="product_img">
              <router-link :to="{
              name: 'singleProduct',
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
              name: 'singleProduct',
              params: {product_handle: product.node.handle}
            }">{{ product.node.title }}
                </router-link>
              </p>
              <div class="product_desc product_desc__short">{{product.node.shortDescription}}</div>
              <div class="product_desc product_desc__long">{{ product.node.description }}</div>
              <p v-if="product.node.priceRange.maxVariantPrice.amount === product.node.priceRange.minVariantPrice.amount"
                 class="product_price price">
                <span class="money">${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }}</span>
              </p>
              <p v-else-if="product.node.variants.edges.length === 1 && product.node.priceRange.maxVariantPrice.amount > product.node.priceRange.minVariantPrice.amount"
                 class="product_price price">
                <span class="money">${{ Number(product.node.priceRange.minVariantPrice.amount).toFixed(2) }}</span>
                <span class="money money_sale"> ${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }}</span>
              </p>
              <p v-else-if="product.node.variants.edges.length > 1" class="product_price price">
                <span class="money">${{ Number(product.node.priceRange.minVariantPrice.amount).toFixed(2) }}</span>
                <span class="money_like"> – </span>
                <span class="money">${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }} </span>
                <span class="money_variants"> ({{ product.node.variants.edges.length }} variants)</span>
              </p>
              <div class="product_links">
                <div v-if="product.node.availableForSale && product.node.variants.edges.length === 1"
                     class="quick-add">
                  <form
                    @submit.prevent="addProductToCart({quantity: 1, productId: product.node.variants.edges[0].node.id})"
                    method="post"
                    action="/cart"
                  >
                    <button class="btn btn-cart" type="submit">Add to cart</button>
                  </form>
                </div>
                <router-link
                  v-else-if="product.node.availableForSale && product.node.variants.edges.length > 1"
                  class="btn"
                  :to="{
              name: 'singleProduct',
              params: {product_handle: product.node.handle}
            }">
                  Choose variant
                </router-link>
                <button v-else class="btn" disabled="">Unavailable</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import {mapActions} from "vuex";
import filteredProductsMixin from "@/mixins/filteredProductsMixin";

export default {
  name: "FeaturedProducts",
  mixins: [filteredProductsMixin],
  data() {
    return {
      featuredProducts: []
    }
  },
  props: {
    title: {
      required: false,
      type: String
    },
    numProducts: {
      required: true,
      type: Number
    },
    collectionHandle: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions({
      addProductToCart: 'cart/addProductToCart'
    })
  },
  async mounted() {
    await this.fetchFeaturedProducts({collectionHandle: this.collectionHandle, numProducts: this.numProducts});
    this.featuredProducts = this.filteredProducts;
  }
}
</script>

<style scoped>

</style>
