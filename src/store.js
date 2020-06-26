import Vue from 'vue'
import Vuex from 'vuex'
import {LOADING_MODE} from './constants'

Vue.use(Vuex)

export const SET_GAME_MODE_ACTION = 'SET_GAME_MODE_ACTION'
const SET_GAME_MODE_MUTATION = 'SET_GAME_MODE_MUTATION'

function builder(data) {
    return new Vuex.Store({
        state: {
            configuration: data.configuration,
            homeTeamDetails: data.homeTeamDetails,
            awayTeamDetails: data.awayTeamDetails,
            matchData: data.matchData,
            mode: LOADING_MODE,
        },
        actions: {
            [SET_GAME_MODE_ACTION]({commit, state}, mode) {
                commit(SET_GAME_MODE_MUTATION, mode)
            }
        },
        mutations: {
            [SET_GAME_MODE_MUTATION](state, mode) {
                Vue.set(state, 'mode', mode)
            }
        },
        modules: {}
    })
}

export default builder