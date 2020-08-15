import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')
const Room = () => import('../views/Room/Room')
const Member = () => import('../views/Member/Member')
const StorageRecord = () => import('../views/Record/StorageRecord/StorageRecord')
const RoomRecord = () => import('@/views/Record/RoomRecord/RoomRecord')
const About = () => import('../views/About/About')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/room',
    component: Room
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/roomrecord',
    component: RoomRecord
  },
  {
    path: '/storagerecord',
    component: StorageRecord
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
