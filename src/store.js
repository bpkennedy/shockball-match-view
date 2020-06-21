import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function builder(data) {
    return new Vuex.Store({
        state: {
            configuration: data.configuration,
            homeTeamDetails: data.homeTeamDetails,
            awayTeamDetails: data.awayTeamDetails,
            matchData: data.matchData,
        },
        mutations: {},
        actions: {},
        modules: {}
    })
}

export default builder