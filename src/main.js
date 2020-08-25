import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import G2 from '@antv/g2';
// import api from './https/index'

// Vue.use(api)

Vue.use(ElementUI)


// 挂载全局的g2
Vue.prototype.$G2 = G2

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')