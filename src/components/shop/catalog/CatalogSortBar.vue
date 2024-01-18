<template>
  <div class="product_options">
    <ul class="product_view" @click="changeLayout">
      <li id="view_grid" data-view="grid" :class="{active: isViewGrid}">
        <i class="fa fa-th" aria-hidden="true"></i>
      </li>
      <li id="view_list" data-view="list" :class="{active: isViewList}">
        <i class="fa fa-th-list" aria-hidden="true"></i>
      </li>
    </ul>

    <div class="product_options__sort">
      <label for="sort_by_select">Sort products:</label>

      <select v-model="sortOption" @change="sortProducts" id="sort_by_select">
        <option data-order="" value="MANUAL">Featured</option>
        <option data-order="" value="BEST_SELLING">Best Selling</option>
        <option data-order="" value="TITLE">Name: A – Z</option>
        <option data-order="true" value="TITLE">Name: Z – A</option>
        <option data-order="" value="PRICE">Price: low to high</option>
        <option data-order="true" value="PRICE">Price: high to low</option>
        <option data-order="" value="CREATED">Oldest to newest</option>
        <option data-order="true" value="CREATED">Newest to oldest</option>
      </select>
    </div>

    <div class="product_options__number">
      <label for="products_number_select">Show:</label>
      <select @change="updateCatalogCard" v-model="numProducts" id="products_number_select">
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
      </select>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sort-bar.css';
import {mapMutations, mapState} from "vuex";
import collectionCardMixin from "@/mixins/collectionCardMixin";
import cursorMixin from "@/mixins/cursorMixin";
import pageMixin from "@/mixins/pageMixin";
import viewMixin from "@/mixins/viewMixin";

export default {
  name: "CatalogSortBar",
  mixins: [collectionCardMixin, cursorMixin, pageMixin, viewMixin],
  props: {
    handle: {
      type: String,
      required: true
    },
  },
  computed: {
    ...mapState({
      isViewGrid: state => state.products.isViewGrid,
      isViewList: state => state.products.isViewList,
    }),
    numProducts: {
      get() {
        return this.$store.getters['products/numProducts'];
      },
      set(value) {
        this.updateNumProducts(value);
      }
    },
    sortOption: {
      get() {
        return this.$store.getters['products/sortOption'];
      },
      set(value) {
        this.updateSortOption(value);
      }
    }
  },
  methods: {
    ...mapMutations({
      updateNumProducts: 'products/updateNumProducts',
      updateSortOption: 'products/updateSortOption',
      updateIsReversed: 'products/updateIsReversed'
    }),
    updateCatalogCard() {
      this.setPageDirection('forwards');
      this.setEndCursor(null);
      this.setStartCursor(null);
      this.updatePageNumber(1)
      this.fetchCollectionCard(this.handle);
    },
    changeLayout(e) {
      if (e.target.tagName !== "LI") return;
      const thisView = e.target.dataset.view;
      if (thisView === 'grid') {
        this.updateIsViewGrid(true);
        this.updateIsViewList(false);
      }
      if (thisView === 'list') {
        this.updateIsViewGrid(false);
        this.updateIsViewList(true);
      }
      this.$cookies.set('productSortView', thisView, '1d', '/');
    },
    sortProducts(e) {
      const value = e.target.value;
      const order = Boolean(e.target.options[e.target.options.selectedIndex].dataset.order);

      this.updateIsReversed(order);
      this.updateSortOption(value);
      this.updatePageNumber(1);
      this.setEndCursor(null);
      this.setStartCursor(null);
      this.setPageDirection('forwards');
      this.fetchCollectionCard(this.handle);
    }
  }
}
</script>

<style scoped>

</style>
