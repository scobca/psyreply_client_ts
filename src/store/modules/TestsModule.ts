import {PassedBlockDto} from "@/api/dto/passed-block.dto";
import {BlockOnPassDto} from "@/api/dto/block-on-pass.dto";
import Client from "@/api/Client";
import {BlockTestsDto} from "@/api/dto/block-tests.dto";

interface TestsModuleState {
    passedBlock: PassedBlockDto | null,
    blockOnPass: BlockOnPassDto | null,
    blockTests: BlockTestsDto[] | null,
    answersCount: number,
    allDataIsReady: boolean,
}

export const TestsModule = {
    state: (): TestsModuleState => ({
        passedBlock: null,
        blockOnPass: null,
        blockTests: [],
        answersCount: 0,
        allDataIsReady: false
    }),
    getters: {
        passedBlock(state: any) {
            return state.passedBlock
        },
        blockOnPass(state: any) {
            return state.blockOnPass
        },
        questionData: (state: any) => (coordinates: {
            test_id: number;
            question_id: number;
        }) => {
            if (state.blockOnPass == null)
                return null
            else {
                const test = state.blockOnPass.tests[coordinates.test_id];
                console.log('test', test)

                const questions = test.questions[0]
                return questions[coordinates.question_id]

            }
        }
    },
    mutations: {
        updatePassedBlock(state: { passedBlock: any; }, block: any) {
            state.passedBlock = block
            // console.log('passedBlock', state.passedBlock)
        },
        updateBlockOnPass(state: any, block: any) {
            state.blockOnPass = block
            // console.log('blockOnPass', state.blockOnPass)
        },
        setAnswersCount(state: any, data: number) {
            state.answersCount = data
        },
        allDataIsReady(state: any) {
            state.allDataIsReady = true
        },
        selectAnswer(state: any ,data: any) {
            if (state.passedBlock == null)
                return null
            else {
                const test = state.passedBlock.tests[data.test_id]
                test.answers[data.question_id].answer = data.answer
            }
        }
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
                    // console.log('r', r)

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

                        r.games = r.tests.filter((test: any) => test.type_id == 6 || test.type_id == 7)
                        r.tests = r.tests.map((test: any, id: number, array: any) => {
                            if (test.type_id == 2) {
                                const questionGroups: any = []
                                test.questions.forEach((el: any, id: number) => {
                                    if (id % 3 === 0) {
                                        questionGroups.push([el])
                                    } else {
                                        questionGroups[questionGroups.length - 1].push(el)
                                    }
                                })
                                array[id].questions = questionGroups
                            }
                            return test;
                        }).filter((test: any) => test.type_id != 6 && test.type_id != 7)

                        commit('updateBlockOnPass', r)

                        let answersCount: number = 0
                        r.tests.map((test: any) => test.questions.map((q: any) => answersCount++))
                        commit('setAnswersCount', answersCount)

                        commit('allDataIsReady')
                    })
                })
        }
    }
}
