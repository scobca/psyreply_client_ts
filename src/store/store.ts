import { createStore } from 'vuex'
import {BlockOnPassDto} from "@/api/dto/block-on-pass.dto";
import {PassedBlockDto} from "@/api/dto/passed-block.dto";
import {Module1} from '@/store/Module1'

export interface State {
    blockOnPass: BlockOnPassDto | null,
    passedBlock: PassedBlockDto | null,
}

export const store = createStore<State>({
    state: {
        blockOnPass: null,
        passedBlock: null,
    },
    getters: {
        blockOnPass(state) {
            return state.blockOnPass
        },
        passedBlock(state) {
            return state.passedBlock
        },
        questionData: (state) => (coordinates: { test_id: number; question_id: number; }) => {
            if (state.blockOnPass == null)
                return null
            else {
                const test = state.blockOnPass.tests[coordinates.test_id]
                return test.questions[coordinates.question_id]
            }
        },
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        a: Module1
    }
})
