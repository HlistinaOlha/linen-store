<template>
  <div class="header_center">
    <div class="header-search">
      <span class="icon elem-toggle"
            :class="isActive? 'active' : ''"
            ref="searchBtn">
        <i class="fa fa-search"
           aria-hidden="true"></i>
      </span>
      <form @submit.prevent="handleForm"
            action="/search"
            method="get"
            role="search"
            class="search_form slide_element"
            ref="searchForm"
      >
        <input type="search"
               name="q"
               placeholder="Search store"
               aria-label="Search store"
               ref="searchInput"
               v-model="searchText">
        <button @submit.prevent type="submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
    <div class="header-logo-wrapper header__heading">
      <router-link class="header-logo header__heading-link link link--text focus-inset" to="/">
        <img src="@/assets/images/logo.png" alt="Linence">
      </router-link>
    </div>
    <div class="header-cart">
      <router-link title="Cart" to="/cart">
        <font-awesome-icon
          :icon="['fas', 'cart-shopping']"
          class="icon"/>
        <span>{{ totalQuantity }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "ShopHeaderCenter",
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
      totalQuantity: state => state.cart.totalQuantity
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
    toggleSearch(e) {
      if (this.$refs.searchBtn) {
        if (e.target.matches('.elem-toggle')) {
          this.isActive = true;
        }
        if (!this.$refs.searchForm.contains(e.target) && !e.target.matches('.elem-toggle')) {
          this.isActive = false;
        }
      }
    },
    handleForm() {
      if (this.$refs.searchInput.value !== undefined && this.$refs.searchInput.value.trim() !== "") {
        this.$router.push({path: '/search', query: {q: this.searchText}})
        this.searchProducts(this.searchText)
      }
    }
  },
  created() {
    document.addEventListener('click', this.toggleSearch);
  }
}
</script>

<style scoped>

</style>
