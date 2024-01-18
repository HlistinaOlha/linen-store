import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue'
import CatalogView from "@/views/CatalogView";
import CartView from "@/views/CartView";
import SearchView from "@/views/SearchView";
import ProductItemView from "@/views/ProductItemView";
import CatalogCardView from "@/views/CatalogCardView";

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      breadcrumb: [
        {name: 'Home'}
      ]
    }
  },
  {
    path: '/catalog',
    component: CatalogView,
    meta: {
      breadcrumb: [
        {name: 'Home', link: '/'},
        {name: 'Collections'}
      ]
    }
  },
  {
    path: '/catalog/:handle',
    name: 'catalogCard',
    props: true,
    component: CatalogCardView,
    meta: {
      breadcrumb: [
        {name: 'Home', link: '/'},
        {name: 'Collections', link: '/catalog'},
        {name: ''}
      ]
    }
  },
  {
    path: '/catalog/:handle/:product_handle',
    name: 'product',
    props: true,
    component: ProductItemView,
    meta: {
      breadcrumb: [
        {name: 'Home', link: '/'},
        {name: 'Collections', link: '/catalog'},
        {name: '', link: '/catalog/:handle'},
        {name: ''}
      ]
    }
  },
  {
    path: '/:product_handle',
    name: 'singleProduct',
    props: true,
    component: ProductItemView,
    meta: {
      breadcrumb: [
        {name: 'Home', link: '/'},
        {name: ''}
      ]
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      breadcrumb: [
        {name: 'Home', link: '/'},
        {name: 'Your Shopping Cart'}
      ]
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: {
      breadcrumb: [
        {name: 'Home', link: '/'},
        {name: 'Search'}
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
