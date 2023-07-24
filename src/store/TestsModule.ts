import {PassedBlockDto} from "@/api/dto/passed-block.dto";
import {BlockOnPassDto} from "@/api/dto/block-on-pass.dto";
import Client from "@/api/Client";
import {BlockTestsDto} from "@/api/dto/block-tests.dto";

interface TestsModuleState {
    passedBlock: PassedBlockDto | null,
    blockOnPass: BlockOnPassDto | null,
    blockTests: BlockTestsDto[] | null,
}

export const TestsModule = {
    state: (): TestsModuleState => ({
        passedBlock: null,
        blockOnPass: null,
        blockTests: [],
    }),
    getters: {
        blockPassed(state: { passedBlock: any; }) {
            return state.passedBlock
        },
        blockOnPass(state: { blockOnPass: any; }) {
            return state.blockOnPass
        },
        questionData: (state: { blockOnPass: { tests: any[]; } | null; }) => (coordinates: {
            test_id: number;
            question_id: number;
        }) => {
            if (state.blockOnPass == null)
                return null
            else {
                const test = state.blockOnPass.tests[coordinates.test_id];
                return test.questions[coordinates.question_id].question;
            }
        },
        answerData: (state: { blockOnPass: { tests: any[]; } | null; }) => (coordinates: {
            test_id: number;
            question_id: number;
        }) => {
            if (state.blockOnPass == null)
                return null
            else {
                const test = state.blockOnPass.tests[coordinates.test_id];
                return test.questions[coordinates.test_id].answer;
            }
        }
    },
    mutations: {
        updatePassedBlock(state: { passedBlock: any; }, block: any) {
            state.passedBlock = block
            console.log(state.passedBlock)
        },
    },
    actions: {
        async getBlock({commit, state}: any) {
            const client = new Client()
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI2LCJ0b2tlblR5cGUiOjIsImJsb2NrSWQiOjEwLCJjb21wYW55SWQiOjEsIndlZWsiOjIsImlhdCI6MTY4NDQxMTIwMCwiZXhwIjoxNjkzMDUxMjAwfQ.GATREhmK8OMFs6-nwnJBMLZh43lneiKe7qH-D13LV-U')
            const token = localStorage.getItem('token')

            await client.getBlock(token)
                .then((r: any) => {
                    const passedBlock = {
                        time_on_pass: 0,
                        tests: state.blockTests
                    }

                    r.tests.forEach((test: any) => {
                        if (test.type_id == 6 || test.type_id == 7)
                            return null;

                        passedBlock.tests.push({
                            test_id: test.id,
                            answers: []
                        })

                        test.questions.forEach((question: any) => {
                            passedBlock.tests[passedBlock.tests.length - 1].answers.push({
                                question_id: question.id,
                                answer: []
                            })
                        })

                        commit('updatePassedBlock', passedBlock);
                        })
                    })
                }
        }
    }
