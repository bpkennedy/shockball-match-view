import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const configurationData ={
  homeTeam: {
    name: 'Tusken Raiders',
    stadiumName: 'Mos Espa Stadium',
    colors: {
      main: '#777777',
      dark: '#444444',
      light: '#222222',
      accent: '#111111',
    },
    logoUrl: 'https://i.pinimg.com/originals/e1/68/be/e168be01dd5117a08500c8deb30261e2.png',
    benchBannerUrls: [ '', '', '', '', '' ],
    fieldImageUrl: 'https://wallup.net/wp-content/uploads/2016/01/91038-nebula-space-748x468.jpg',
  },
  awayTeam: {
    name: 'Republic Rebels',
    colors: {
      main: '#343434',
      dark: '#646476',
      light: '#292929',
      accent: '#000000',
    },
    benchBannerUrls: [ '', '', '', '', '' ],
    logoUrl: 'https://i.pinimg.com/originals/51/af/ed/51afedb0d252e3429b9564dc673699e7.png',
  }
}

new Vue({
  router,
  store: store(configurationData),
  render: h => h(App)
}).$mount('#sbmv')
