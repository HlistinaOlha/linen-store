<template>
  <div class="collection_img collection_img__overlay">
    <div class="layer_1 img_wrapper__medium img_center"></div>
    <div class="layer_2">
      <div class="container">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/catalog-hero.css';

export default {
  name: "CatalogHero",
  props:{
    title:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
