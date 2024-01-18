import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import VueCookies from 'vue-cookies'
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

library.add(fas)

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies)
  .use(VueScrollFixedNavbar)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

