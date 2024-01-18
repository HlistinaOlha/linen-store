import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      articles: state => state.home.articles
    })
  }
}
