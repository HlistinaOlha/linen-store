<template>
  <p v-if="searchedProducts.length ===0" class="alert alert-warning">Your search did not yield any results.</p>
  <ul v-else class="search_results">
    <li v-for="product in searchedProducts" :key="product.node.id">
      <router-link class="search_results__img"
                   :to="{
              name: 'singleProduct',
              params: {product_handle: product.node.handle}

            }">
        <img
          :src="product.node.featuredImage.url"
          :alt="product.node.title">
      </router-link>
      <div>
        <p class="search_results__name">
          <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: product.node.handle}

            }">{{ product.node.title}}
          </router-link>
        </p>
        <p class="search_results__desc">{{ product.node.description }}</p>
        <p class="search_results__price">
          <span class="money">${{ Number(product.node.priceRange.minVariantPrice.amount).toFixed(2) }} </span>
          <span
            v-if="product.node.priceRange.maxVariantPrice.amount > product.node.priceRange.minVariantPrice.amount"
            class="money money_sale"> ${{ Number(product.node.priceRange.maxVariantPrice.amount).toFixed(2) }}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SearchResults",
  computed: {
    ...mapState({
      searchedProducts: state => state.products.searchedProducts
    })
  }
}
</script>

<style scoped>

</style>
