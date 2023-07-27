import { createStore } from 'vuex'
import {TestsModule} from '@/store/modules/TestsModule'
import {PopupModule} from "@/store/modules/PopupModule";

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
        TestsModule,
        PopupModule,
    }
})
