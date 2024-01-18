export default {
  filteredProducts: state => {
    if (state.filteredProducts.length === 0) {
      return state.products;
    }
    return state.filteredProducts;
  },
  productItem: state => {
    return state.productItem;
  },
  collectionCardHandle: state => {
    return state.collectionCardHandle;
  },
  numProducts: state => {
    return state.numProducts;
  },
  sortOption: state => {
    return state.sortOption;
  },
  startCursor(state) {
    state.startCursor = state.pageInfo.startCursor;
  },
  endCursor(state) {
    state.endCursor = state.pageInfo.endCursor;
  }
}
