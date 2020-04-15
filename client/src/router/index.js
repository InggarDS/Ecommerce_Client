import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContentDashboard from '../components/ContentDashboard.vue'
import Products from '../components/Products.vue'
import AddProduct from '../components/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'ContentDashboard',
    component: ContentDashboard
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
