import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '@/components/HelloWorld'
import Add from '@/components/Add'
import Login from '@/components/Login'



const routes = [
  {
    path: '/',
    naem:'Login',
    component: Login
  }, {
    path: '/home',
    naem:'Home',
    component: Home,

  },
  {
    path: '/add/:user',
    name:'Add',
    component: Add
  }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router