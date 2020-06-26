import Vue from 'vue'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'
import App from './App.vue'
import router from './router'
import store from './store'
import {configuration, homeTeamDetails, awayTeamDetails, matchData} from "./fakeData";

Vue.config.productionTip = false
Vue.use(VueProgress)

new Vue({
  router,
  store: store({
    configuration,
    homeTeamDetails,
    awayTeamDetails,
    matchData
  }),
  render: h => h(App)
}).$mount('#sbmv')
