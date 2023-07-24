import { createStore } from 'vuex'
import {TestsModule} from '@/store/TestsModule'

export interface State {

}

export const store = createStore<State>({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        a: TestsModule
    }
})
