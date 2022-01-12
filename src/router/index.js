import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import Product from '../components/Product.vue'
import Exercise from '../components/Exercise.vue'
import ContactUs from '../components/ContactUs.vue'
import Product1 from '../components/Product1.vue'
import Product2 from '../components/Product2.vue'
import Product3 from '../components/Product3.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },

  {
    path: '/product',
    name: 'Product',
    component: Product
  },

  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise
  },

  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },

  {
    path: '/product1',
    name: 'Product1',
    component: Product1
  },

  {
    path: '/product2',
    name: 'Product2',
    component: Product2
  },

  {
    path: '/product3',
    name: 'Product3',
    component: Product3
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
