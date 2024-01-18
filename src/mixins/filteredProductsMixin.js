import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      filteredProducts: 'products/filteredProducts'
    })
  },
  methods: {
    ...mapActions({
      fetchFeaturedProducts: 'products/fetchFeaturedProducts'
    })
  },
}
