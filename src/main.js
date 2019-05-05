import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import '../public/lib/mui/css/mui.css'
import '../public/lib/mui/css/icons-extra.css'
import Mint from 'mint-ui';
import axios from 'axios';
import VueResource from 'vue-resource'
import NavBar from './components/common/NavBar'

Vue.component(NavBar.name,NavBar)

Vue.use(Mint);
Vue.prototype.axios = axios;
// 跨域保存session值
axios.defaults.withCredentials = true
axios.defaults.baseURL='http://127.0.0.1:3000';
// 注册vue-resource
Vue.use(VueResource);
//  设置请求服务器根目录
Vue.http.options.root = "http://127.0.0.1:3000/";
//  配置vue-post 时候表音的数据组织格式为application/x-www-form-urlencoded
//  将提交数据进行转码操作
Vue.http.options.emulateJSON = true;
//  跨域访问保存session值选项
Vue.http.options.withCredentials = true;

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
