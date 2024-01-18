<template>
  <div class="page_container">
    <div class="container">
      <h1 class="page_heading">Collections</h1>
      <div class="row collection_listing__main">
        <catalog/>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "@/components/shop/catalog/Catalog";

export default {
  name: "CatalogueView",
  components: {Catalog}
}
</script>

<style scoped>

</style>
