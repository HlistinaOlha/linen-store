<template>
  <div class="upper-header">
    <div class="upper-header-text">Call Us Now: 555 376 7872</div>
    <div class="currency">
      <span class="currency-selector">Currency:</span>
      <div @click="toggleCurrencyList"
           class="currency-box">
        <div id="currency_active"
             ref="currencyActive"
             class="currency-active">USD</div>
        <ul class="currency-list"
            :class="isOpen? 'opened': ''">
          <li class="currency-item">USD</li>
          <li class="currency-item">EUR</li>
          <li class="currency-item">GBP</li>
        </ul>
      </div>
    </div>
    <div class="upper-header-link">
      <a href="/">My account</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "ShopHeaderTop",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleCurrencyList(e) {
      this.isOpen = !this.isOpen;
      this.$refs.currencyActive.textContent = `${e.target.textContent}`
    }
  }
}
</script>

<style scoped>

</style>
