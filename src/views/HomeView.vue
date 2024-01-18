<template>
  <image-banner/>
  <text-columns :textData="textColumnText"/>
  <featured-products :title="title" :numProducts="numProducts" :collection-handle="handle1"/>
  <collage :imageClass="collageImage1" :collageText="collageText" :collageProductHandle="collageProductHandle1"/>
  <collage :imageClass="collageImage2" :collageProductHandle="collageProductHandle2"/>
  <featured-products :numProducts="numProducts" :collection-handle="handle2"/>
  <blog-articles :title="blogArticlesTitle"/>
</template>

<script>
import ImageBanner from "@/components/shop/home/ImageBanner";
import TextColumns from "@/components/shop/home/TextColumns";
import FeaturedProducts from "@/components/shop/home/FeaturedProducts";
import Collage from "@/components/shop/home/Collage";
import {mapMutations} from "vuex";
import BlogArticles from "@/components/shop/home/BlogArticles";

export default {
  name: "HomeView",
  components: {BlogArticles, Collage, FeaturedProducts, TextColumns, ImageBanner},
  data() {
    return {
      textColumnText: {
        text1: 'Satisfaction is',
        title1: '100% Guaranteed',
        productHandle1: '7-piece-modern-embroidered-comforter-set',
        text2: 'On all standard offers',
        title2: 'Free Shipping',
        productHandle2: 'chic-home-iris-7-piece-comforter-set-with-four-shams',
        text3: 'Only in 30 days',
        title3: 'Free Returns',
        productHandle3: 'chic-home-5-piece-florentina-floral-pleated-comforter-set',
      },
      title: 'Featured products',
      numProducts: 4,
      handle1: 'bed-linen',
      handle2: 'blankets+throws',
      collageText: {
        text1: 'Best price, best selection',
        title: 'Italian',
        text2: 'Luxury Linen',
      },
      collageProductHandle1: 'luxuer-7pc-solid-silk-bedding-collections-champagne',
      collageProductHandle2: 'brylanehome-alexis-bedspread',
      collageImage1: 'collageImage1',
      collageImage2: 'collageImage2',
      blogArticlesTitle: 'Latest News'
    }
  },
  methods: {
    ...mapMutations({
      setSelectedOptions: 'products/setSelectedOptions'
    })
  }
}
</script>

<style>

</style>
