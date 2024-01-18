import { createStore } from 'vuex'
import homePageModule from './modules/homePageModule/index'
import productsModule from './modules/productsModule/index'
import cartModule from './modules/cartModule/index'

export default createStore({
  modules: {
    home: homePageModule,
    products: productsModule,
    cart: cartModule
  }
})
