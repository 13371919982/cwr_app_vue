import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Index from './views/Index'
import Login from './components/login/Login'
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import Search from './components/search/Search'
import News from './components/news/News'
import ImgText from './components/imgText/ImgText'
import Products from './components/products/Products'
import Message from './components/message/Message'
import Consult from './components/consult/Consult'
import ContactUs from './components/contactUs/ContactUs'
import NewsDetail from './components/news/NewsDetail'


Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name:'Home', component: Home,
      children: [
        { path: 'index', name:'Index', component: Index},
      ]
    },
    { path: '/login', name:'Login', component: Login},
    { path: '/shoppingCart', name:'ShoppingCart', component: ShoppingCart},
    { path: '/search', name:'Search', component: Search},
    { path: '/news/list', name:'News', component: News},
    { path: '/imgText/photo/:all', name:'ImgText', component: ImgText},
    { path: '/products', name:'Products', component: Products},
    { path: '/message', name:'Message', component: Message},
    { path: '/consult', name:'Consult', component: Consult},
    { path: '/contactUs', name:'ContactUs', component: ContactUs},
    { path: '/news/newsDetail/:nid', name:'NewsDetail', component: NewsDetail},
  ]
})

export default router;
