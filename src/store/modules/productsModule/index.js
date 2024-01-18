import getters from "@/store/modules/productsModule/getters";
import mutations from "@/store/modules/productsModule/mutations";
import actions from "@/store/modules/productsModule/actions";

export default {
  state: () => ({
    products: [],
    productItem: {},
    selectedOptions: [],
    collectionTitle: '',
    filteredProducts: [],
    searchedProducts: [],
    page: 1,
    pageInfo: {},
    numProducts: 8,
    endCursor: null,
    startCursor: null,
    pageDirection: 'forwards',
    collections: [],
    collectionCard: [],
    isViewGrid: true,
    isViewList: false,
    sortOption: 'TITLE',
    isReversed: true
  }),
  getters: getters,
  mutations: mutations,
  actions: actions,
  namespaced: true
}
