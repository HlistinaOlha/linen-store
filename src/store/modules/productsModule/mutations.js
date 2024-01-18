export default {
  setProducts(state, payload) {
    state.products = payload;
  },
  setProductItem(state, payload) {
    state.productItem = payload;
  },
  setPageInfo(state, payload) {
    state.pageInfo = payload;
  },
  setIsLoaded(state, payload) {
    state.isLoaded = payload;
  },
  setSelectedOptions(state, payload) {
    state.selectedOptions = payload;
  },
  setCollectionTitle(state, payload) {
    state.collectionTitle = payload;
  },
  setFilteredProducts(state, payload) {
    state.filteredProducts = payload;
  },
  setSearchedProducts(state, payload) {
    state.searchedProducts = payload;
  },
  setCollections(state, payload) {
    state.collections = payload;
  },
  setCollectionCard(state, payload) {
    state.collectionCard = payload;
  },
  setStartCursor(state, payload) {
    state.startCursor = payload;
  },
  setEndCursor(state, payload) {
    state.endCursor = payload;
  },
  setPageDirection(state, payload) {
    state.pageDirection = payload;
  },
  updatePageNumber(state, payload) {
    state.page = payload;
  },
  updateNumProducts(state, payload) {
    state.numProducts = Number(payload);
  },
  updateIsViewGrid(state, payload) {
    state.isViewGrid = payload;
  },
  updateIsViewList(state, payload) {
    state.isViewList = payload;
  },
  updateSortOption(state, payload) {
    state.sortOption = payload;
  },
  updateIsReversed(state, payload) {
    state.isReversed = payload;
  }
}
