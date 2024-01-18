<template>
  <footer class="footer gradient section-footer-padding">
    <shop-footer-top/>
    <shop-footer-bottom/>
  </footer>
</template>

<script>
import ShopFooterTop from "@/components/shop/footer/ShopFooterTop";
import ShopFooterBottom from "@/components/shop/footer/ShopFooterBottom";
import '@/assets/styles/footer.css';

export default {
  name: "ShopFooter",
  components: {ShopFooterBottom, ShopFooterTop}
}
</script>

<style scoped>

</style>
