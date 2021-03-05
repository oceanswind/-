// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';
import BaiduMap from 'vue-baidu-map'
import axios from "axios"
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})

Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'mfOt3DTWpZTtFTiNEzIcmZi5ebSzioFT'  
})


//路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/login' || sessionStorage.getItem('flag')){
  next();
  }else{
  alert('请重新登录');
  next('/login');
  }
  })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
