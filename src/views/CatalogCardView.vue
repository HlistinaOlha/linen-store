<template>
  <div>
    <div v-for="collection in collectionCard" :key="collection.node.id">
      <div v-if="collection.node.handle === this.handle">
        <catalog-hero :title="collection.node.title"/>
        <div class="container">
          <div class="collection_desc rte">
            {{ collection.node.description }}
          </div>
          <catalog-filters :products="products" :handle="handle"/>
          <catalog-sort-bar :handle="handle"/>
          <div class="row product_listing__main"
               :class="{product_listing__list: isViewList, product_listing__grid: isViewGrid}"
               id="product_listing__sorted">
            <catalog-card :handle="collection.node.handle" :products="filteredProducts"/>
          </div>
          <catalog-pagination :handle="handle" :pageInfo="pageInfo"
                              :totalPages="collection.node.products.length / numProducts"></catalog-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogHero from "@/components/shop/catalog/CatalogHero";
import CatalogFilters from "@/components/shop/catalog/CatalogFilters";
import CatalogSortBar from "@/components/shop/catalog/CatalogSortBar";
import CatalogCard from "@/components/shop/catalog/CatalogCard";
import {mapGetters, mapMutations, mapState} from "vuex";
import CatalogPagination from "@/components/shop/catalog/CatalogPagination";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import collectionCardMixin from "@/mixins/collectionCardMixin";
import cursorMixin from "@/mixins/cursorMixin";
import viewMixin from "@/mixins/viewMixin";

export default {
  name: "CatalogCardView",
  mixins: [collectionCardMixin, cursorMixin, viewMixin],
  components: {
    CatalogCard,
    CatalogSortBar,
    CatalogFilters,
    CatalogHero,
    CatalogPagination,
    Breadcrumbs
  },
  data() {
    return {
      handle: this.$route.params.handle,
      isList: false,
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      pageInfo: state => state.products.pageInfo,
      numProducts: state => state.products.numProducts,
      collectionCard: state => state.products.collectionCard,
      isViewGrid: state => state.products.isViewGrid,
      isViewList: state => state.products.isViewList,
    }),
    ...mapGetters({
      filteredProducts: 'products/filteredProducts'
    })
  },
  methods: {
    ...mapMutations({
      setSelectedOptions: 'products/setSelectedOptions',
      updateNumProducts: 'products/updateNumProducts'
    })
  },
  mounted() {
    this.updateNumProducts(this.numProducts);
    this.setStartCursor(null);
    this.setEndCursor(null);
    this.setSelectedOptions([]);
    this.fetchCollectionCard(this.handle);
    if (!this.$cookies.get('productSortView')) {
      this.$cookies.set('productSortView', 'grid', '1d', '/');
    } else if (this.$cookies.get('productSortView') === 'list') {
      this.updateIsViewGrid(false);
      this.updateIsViewList(true)
    }
  }
}
</script>

<style scoped>

</style>
