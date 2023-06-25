import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import './uni.promisify.adaptor'
import request from './utils/request'


Vue.config.productionTip = false
Vue.prototype.request=request;
Vue.use(Vuex)

App.mpType = 'app'

const store = new Vuex.Store() //实例化一个vuex
const app = new Vue({
  ...App,
  store,
})
app.$mount()
