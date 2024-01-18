import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchCollectionCard: 'products/fetchCollectionCard'
    })
  }
}
