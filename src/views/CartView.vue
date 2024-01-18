<template>
  <div class="template_cart">
    <div class="container">
      <h1 class="page_heading">Your Shopping Cart</h1>
       <cart/>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/shop/cart/Cart";

export default {
  name: "CartView",
  components: {Cart}
}
</script>

<style scoped>

</style>
