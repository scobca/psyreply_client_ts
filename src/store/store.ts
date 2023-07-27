import { createStore } from 'vuex'
import {TestsModule} from '@/store/TestsModule'
import {PopupModule} from "@/store/PopupModule";

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
        a: TestsModule,
        b: PopupModule
    }
})
