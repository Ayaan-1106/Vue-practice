import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import MyTest from '../views/MyTest.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import Nested from '../views/NestedComponent.vue'
import Parent from '../views/ParentComponent5.vue'
import Test from '../views/CompositionAPI.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/Mytest',
    name: 'test',
    component: MyTest
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nested',
    name: 'NestedComponent',
    component: Nested
  },
  {
    path: '/Parent',
    name: 'ParentComponent',
    component: Parent
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
