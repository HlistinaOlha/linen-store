<template>
  <header class="page-header page-width"
          ref="header">
    <div class="page-container">
      <div class="container header header--top-center header--has-menu">
        <shop-header-top/>
        <shop-header-center/>
      </div>
      <div class="container">
        <shop-nav-bar ref="navBar"/>
      </div>
    </div>
  </header>
</template>

<script>
import ShopHeaderTop from "@/components/shop/header/ShopHeaderTop";
import ShopHeaderCenter from "@/components/shop/header/ShopHeaderCenter";
import ShopNavBar from "@/components/shop/header/ShopNavBar";
import "@/assets/styles/header.css";

export default {
  name: "ShopHeader",
  components: {ShopNavBar, ShopHeaderCenter, ShopHeaderTop},
  methods: {
    fixDesktopNav() {
        let topOfNav = this.$refs.navBar.$refs.nav.offsetTop;

      if (topOfNav === 0) {
        topOfNav = this.$refs.header.offsetHeight;
      }

      if (!this.$refs.navBar.$refs.nav.classList.contains('megamenu_mobile') &&this.$refs.navBar.$refs.nav.offsetHeight !== 0 && window.scrollY >= topOfNav) {
        document.body.style.paddingTop = this.$refs.navBar.$refs.nav.offsetHeight + 'px';
        document.body.classList.add('megamenu-stuck');
      } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('megamenu-stuck');
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.fixDesktopNav);
    window.addEventListener('resize', this.fixDesktopNav);
  }
}
</script>

<style>

</style>
