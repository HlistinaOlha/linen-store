<template>
  <div class="button_filters">
    <ul @click.prevent="filterProductsByTag">
      <li>
        <router-link :to="{
              name: 'catalogCard',
              params: {handle: handle}}" :class="isActive? 'active' : ''">All
        </router-link>
      </li>
      <li>
        <a href="/" title="Show products matching tag Bed Comforters">Bed Comforters</a>
      </li>
      <li>
        <a href="/" title="Show products matching tag Bedspreads">Bedspreads</a>
      </li>
      <li>
        <a href="/" title="Show products matching tag Down and Feather">Down and Feather</a>
      </li>
      <li>
        <a href="/" title="Show products matching tag Duvet Cover Sets">Duvet Cover Sets</a>
      </li>
      <li>
        <a href="/" title="Show products matching tag Latex">Latex</a>
      </li>
      <li>
        <a href="/" title="Show products matching tag Microfibre">Microfibre</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import collectionCardMixin from "@/mixins/collectionCardMixin";

export default {
  name: "CatalogFilters",
  mixins: [collectionCardMixin],
  data() {
    return {
      prevTag: null,
      isActive: true
    }
  },
  props: {
    handle: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setEndCursor: 'products/setEndCursor',
      setStartCursor: 'products/setStartCursor'
    }),
    ...mapActions({
      fetchProducts: 'products/fetchProducts'
    }),
    filterProductsByTag(e) {
      if (e.target.tagName !== "A") return;
      const tag = e.target.text;

      if (tag.startsWith('All')) {
        this.isActive = true;
        this.setEndCursor(null);
        this.setStartCursor(null);
        this.fetchCollectionCard(this.handle);
        this.prevTag && this.prevTag.classList.remove('active');
        return;
      }
      this.isActive = false;

      if (this.prevTag && this.prevTag !== e.target) this.prevTag.classList.remove('active');
      e.target.classList.add('active');
      this.prevTag = e.target;
      this.fetchProducts(tag);
    }
  }
}
</script>

<style scoped>

</style>
