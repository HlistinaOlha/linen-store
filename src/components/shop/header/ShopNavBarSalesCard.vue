<template>
  <div v-for="product in salesProducts" class="megamenu_col__item">
    <div class="product">
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
        <div class="product_name">
          <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: product.node.handle}
            }">{{ product.node.title }}
          </router-link>
        </div>
        <div class="product_price">
          <span class="money">${{ Number(product.node.priceRange.minVariantPrice.amount).toFixed(2) }} </span>
          <span
            v-if="product.node.priceRange.maxVariantPrice.amount > product.node.priceRange.minVariantPrice.amount"
            class="money money_sale"> ${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import filteredProductsMixin from "@/mixins/filteredProductsMixin";

export default {
  name: "ShopNavBarSalesCard",
  mixins: [filteredProductsMixin],
  data() {
    return {
      salesProducts: [],
      collectionHandle: 'bed-linen',
      numProducts: 3
    }
  },
  async mounted() {
    await this.fetchFeaturedProducts({collectionHandle: this.collectionHandle, numProducts: this.numProducts});
    this.salesProducts = this.filteredProducts;
  }
}
</script>

<style scoped>

</style>
