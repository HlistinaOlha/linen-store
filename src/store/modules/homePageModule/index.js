import getters from "@/store/modules/homePageModule/getters";
import mutations from "@/store/modules/homePageModule/mutations";
import actions from "@/store/modules/homePageModule/actions";

export default {
  state: () => ({
    searchText: '',
    articles: []
  }),
  getters: getters,
  mutations: mutations,
  actions: actions,
  namespaced: true
}
