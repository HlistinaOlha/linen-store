<template>
  <div class="page_wrapper">
    <div id="page_preloader__bg"
         :class="isOff? 'off' : 'on'"
         ref="preloaderBg">
      <img id="page_preloader__img"
           src="//cdn.shopify.com/s/files/1/1909/0495/t/2/assets/shopify_logo.gif?v=2295594837597377031491818507"
           alt=""
           :class="isOff? 'off' : 'on'"
           ref="preloaderImg">
    </div>
    <shop-header/>
    <breadcrumbs v-if="$route.path!=='/'"/>
    <router-view :key="$route.path"/>
    <shop-footer/>
    <transition name="fade">
      <a v-if="show"
         id="back_top"
         href="#"
         ref="backTop"
         @click.prevent="scrollToTop">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </a>
    </transition>
  </div>
</template>

<script>
import ShopHeader from "@/components/shop/header/ShopHeader";
import ShopFooter from "@/components/shop/footer/ShopFooter";
import Breadcrumbs from "@/components/shop/Breadcrumbs";

export default {
  name: "Shop",
  components: {ShopFooter, ShopHeader, Breadcrumbs},
  data() {
    return {
      isOff: false,
      show: false
    }
  },
  methods: {
    hidePreloaderImg() {
      this.isOff = true;
    },
    handleBackTopBtn() {
      this.show = document.documentElement.scrollTop >= 400;
    },
    scrollToTop() {
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    }
  },
  created() {
    window.addEventListener('load', this.hidePreloaderImg);
    window.addEventListener('scroll', this.handleBackTopBtn);
  }
}
</script>

<style scoped>

</style>
