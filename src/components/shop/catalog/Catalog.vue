<template>
    <div v-for="collection in collections" :key="collection.node.id" class="col-xs-3">
      <div class="collection_item flexible_block flexible_block__normal flexible_block__hover flexible_block__">
        <router-link :to="{
              name: 'catalogCard',
              params: {handle: collection.node.handle}
            }">
        <div class="pointer" >
          <div class="layer_1 collection_img">
            <div class="img_placeholder__wrap img_placeholder__medium"
                 :style="{'background-image': `url( ${collection.node.image.url} )`}"></div>
          </div>
          <div class="layer_2">
            <div>
              <span class="collection_title">{{ collection.node.title }}</span>
              <span class="collection_products">{{ collection.node.products.edges.length }} products</span>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import '@/assets/styles/catalog.css';
import {mapActions, mapState} from "vuex";

export default {
  name: "Catalog",
  computed: {
    ...mapState({
      collections: state => state.products.collections
    })
  },
  methods: {
    ...mapActions({
      fetchCollections: 'products/fetchCollections'
    })
  },
  mounted() {
    this.fetchCollections();
  }
}
</script>

<style scoped>

</style>
