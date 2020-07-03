import Vue from 'vue'
import Vuex from 'vuex'
import {LOADING_MODE} from './constants'

Vue.use(Vuex)

export let store

export const SET_GAME_MODE_ACTION = 'SET_GAME_MODE_ACTION'
const SET_GAME_MODE_MUTATION = 'SET_GAME_MODE_MUTATION'
export const PLAYERS_GETTER = 'PLAYERS_GETTER'

function builder({ teams, players, matchData}) {
    store = new Vuex.Store({
        state: {
            teams,
            players,
            matchData,
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
        getters: {
            [PLAYERS_GETTER]: state => side => {
                let players = []
                const sidePlayerIds = state.teams[side].roster.map(r => r.toString())
                for (const [key, value] of Object.entries(state.players)) {
                    if (sidePlayerIds.includes(key)) {
                        players.push({
                            ...value,
                            id: key,
                            side,
                        })
                    }
                }
                return players
            },
        },
        modules: {}
    })
    return store
}

export default builder