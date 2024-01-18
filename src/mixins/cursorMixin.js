import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setEndCursor: 'products/setEndCursor',
      setStartCursor: 'products/setStartCursor',
    })
  }
}
