import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// socket io
// import VueSocketIO from 'vue-socket.io'

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3000',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },
// }))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
