<template>
  <div class="template_search">
    <div class="container">
      <h1 v-if="this.$route.query.q === undefined" class="page_heading">Search</h1>
      <h1 v-else class="page_heading">Search: "{{ this.$route.query.q }}" — {{ searchedProducts.length }} results</h1>
      <form action="/search"
            method="get"
            class="search_form"
            role="search"
            @submit.prevent="handleForm">
        <input type="text"
               name="q"
               placeholder="Search"
               ref="searchInput"
               v-model="searchText">
        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
      <search-results/>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/search-page.css";
import {mapActions, mapMutations, mapState} from "vuex";
import SearchResults from "@/components/shop/search/SearchResults";

export default {
  name: "SearchView",
  components: {SearchResults},
  computed: {
    ...mapState({
      searchedProducts: state => state.products.searchedProducts
    }),
    searchText: {
      get() {
        return this.$store.getters['home/searchText'];
      },
      set(value) {
        this.updateSearchText(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      updateSearchText: 'home/updateSearchText'
    }),
    ...mapActions({
      searchProducts: 'products/searchProducts'
    }),
    handleForm() {
      if (this.$refs.searchInput.value !== undefined && this.$refs.searchInput.value.trim() !== "") {
        this.searchProducts(this.searchText);
      }
      this.$router.push({ path: '/search', query: { q: this.searchText }})
    }
  }
}
</script>

<style scoped>

</style>
