import Vue from 'vue';
import App from '@/App';

Vue.config.productionTip = false

import router from '@/router'
import '@/registerServiceWorker'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')