import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      updateIsViewGrid: 'products/updateIsViewGrid',
      updateIsViewList: 'products/updateIsViewList'
    })
  }
}
