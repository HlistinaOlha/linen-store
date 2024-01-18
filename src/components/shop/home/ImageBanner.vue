<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    class="section_slideshow"
    :loop="true"
    effect="fade"
    navigation
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false
    }"
    :pagination="{clickable: true}"
  >
    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
      <div :class="text.class" class="img_placeholder__wrap img_placeholder__medium"></div>
      <router-link class="slide_caption"
                   :to="{
              name: 'singleProduct',
              params: {product_handle: text.productHandle}
            }">
        <div>
          <p>{{text.description}}</p>
          <h2 class="title1">{{ text.title1 }}</h2>
          <h2 class="title1">{{ text.title2 }}</h2>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import '@/assets/styles/image-banner.css';
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import {ref} from "@vue/reactivity";

export default {
  name: "ImageBanner",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperTextBase = ref([
      {
        description: 'Bringing style & fashion to your home',
        title1: 'Superior Quality',
        title2: 'Bedding',
        class: 'slide1',
        productHandle: 'borrego-comforter-set-queen-camel'
      },
      {
        description: 'Discover our smooth, high-shine all-white bedding collection',
        title1: 'Amazing',
        title2: 'Grace',
        class: 'slide2',
        productHandle: '7-piece-modern-embroidered-comforter-set'
      },
      {
        description: 'See the latest collections inspired by our designs for',
        title1: 'Luxury hotels',
        title2: 'around the world',
        class: 'slide3',
        productHandle: '7-pieces-luxury-embroidery-comforter-set-bed'
      },
    ]);
    return {
      modules: [Navigation, Pagination, Autoplay, EffectFade], swiperTextBase
    };
  }
}
</script>

<style scoped>

</style>
