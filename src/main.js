import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {configuration, homeTeamDetails, awayTeamDetails, matchData} from "./fakeData";

Vue.config.productionTip = false

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
