import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setPageDirection: 'products/setPageDirection',
      updatePageNumber: 'products/updatePageNumber'
    })
  }
}
