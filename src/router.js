import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Member from './components/member/Member'
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import Search from './components/search/Search'
import News from './components/news/News'
import ImgText from './components/imgText/ImgText'
import Product from './components/product/Product'
import Message from './components/message/Message'
import Consult from './components/consult/Consult'
import ContactUs from './components/contactUs/ContactUs'
import NewsDetail from './components/news/NewsDetail'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name:'Home', component: Home},
    { path: '/member', name:'Member', component: Member},
    { path: '/shoppingCart', name:'ShoppingCart', component: ShoppingCart},
    { path: '/search', name:'Search', component: Search},
    { path: '/news', name:'News', component: News},
    { path: '/imgText', name:'ImgText', component: ImgText},
    { path: '/product', name:'Product', component: Product},
    { path: '/message', name:'Message', component: Message},
    { path: '/consult', name:'Consult', component: Consult},
    { path: '/contactUs', name:'ContactUs', component: ContactUs},
    { path: '/news/newsDetail/:nid', name:'NewsDetail', component: NewsDetail},
  ]
})

export default router;
