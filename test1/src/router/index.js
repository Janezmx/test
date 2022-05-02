import Vue from 'vue'
import Router from 'vue-router'
import door from '@/views/door'
// import second from '@/views/second'
// import third from '@/views/third'
import Store from '../store'
Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
const router = new Router({
  routes: [
    {
        path: '/',
        name: 'door',
        component: door,
    },
    // {
    //   path: '/second',
    //   name: 'second',
    //   component: second,
    // },
    // {
    //   path: '/third',
    //   name: 'third',
    //   component: third,
    // },
    {path: '/*', redirect: '/'}
  ]
})
router.afterEach(() => {
  window.scrollTo(0,0)
})
export default router
