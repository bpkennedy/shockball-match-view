import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function builder(data) {
    return new Vuex.Store({
        state: {
            configuration: data,
        },
        mutations: {},
        actions: {},
        modules: {}
    })
}

export default builder