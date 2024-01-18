export default {
  updateSearchText(state, payload){
    state.searchText = payload;
  },
  setArticles(state, payload){
    state.articles = payload;
  }
}
