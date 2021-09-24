import Vue from 'vue'
import Router from 'vue-router'
import first from '@/views/first'
import second from '@/views/second'
import third from '@/views/third'
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
        name: 'first',
        component: first,
    },
    {
      path: '/second',
      name: 'second',
      component: second,
    },
    {
      path: '/third',
      name: 'third',
      component: third,
    },
    {path: '/*', redirect: '/'}
  ]
})
router.beforeEach((to, from, next) => {
  console.log('before', location.href)
  if (to.path === '/' && from.path === '/') {
    Store.dispatch('dispatchEnterState', true)
    next()
  } else {
    if (!Store.state.enterState) {
      next('Loading') // 没有从首页进入跳转至首页
    } else {
      next()
    }
  }
})
router.afterEach(() => {
  window.scrollTo(0,0)
})
export default router
