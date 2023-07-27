<template>
    <div class="YAnswersList">

        <div class="modal">
            <div class="list">
                <YAnswersItem v-for="answer in answers"
                              @click="selectAnswer(answer.id)"
                              :last="answer.last"
                              :active="(selectedAnswer.includes(answer.id)) || checkSelection(answer.id)"
                >
                    {{answer.title}}
                </YAnswersItem>
            </div>
        </div>
        <br>
    </div>
    <p @click="open"> test popup </p>
    <p @click="openErr"> test error popup </p>
    <p @click="openWarnVer1"> test warn popup ver 1</p>
    <p @click="openWarnVer2"> test warn popup ver 2</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";
import YAnswersItem from "@/components/UI/YAnswersItem.vue";

@Options({
    name: 'YAnswersList',
    components: {YAnswersItem}
})

export default class YAnswerList extends Vue {
    async created() {
        await this.$store.dispatch('getBlock')
    }

    @Prop({})
    testArrId!: number

    @Prop({})
    questionArrId!: number

    @Prop({default: false})
    more!: boolean

    selectedAnswer: any[] = []

    open() {
        this.$store.commit('openPopup', 'test message')
    }

    openErr() {
        this.$store.commit('openErrorPopup', 'error popup')
    }

    openWarnVer1() {
        this.$store.commit('openWarnPopup', {
            message: 'mess1',
            acceptCallback: () => {
                this.$store.commit('openPopup', 'popup1')
            }
        })
    }

    openWarnVer2() {
        const body = {
            message: 'mess2',
            acceptCallback: () => {
                this.$store.commit('openPopup', 'popup2')
            }
        }

        this.$store.commit('openWarnPopup', body)
    }

    selectAnswer(id: number) {
        console.log(id)
        if (!this.more) {
            this.selectedAnswer[0] = id
        }
        else {
            if (this.selectedAnswer.includes(id)) {
                const index = this.selectedAnswer.indexOf(id)
                this.selectedAnswer.splice(index, 1)
            } else {
                this.selectedAnswer.push(id)
            }
        }
        const data = {
            // test_id: this.testArrId,
            // question_id: this.questionArrId,
            test_id: 0,
            question_id: 0,
            answer: this.selectedAnswer
        }
        this.$store.commit('selectAnswer', data)
    }
    checkSelection(id: number) {
        // return this.$store.getters.passedBlock.tests[this.testArrId].answers[this.questionArrId].answer.includes(id);
        return this.$store.getters.passedBlock.tests[0].answers[0].answer.includes(id);
    }
    get answers() {
        if (this.$store.getters.blockOnPass != null) {
            const coordinates = {
                test_id: 0,
                question_id: 0
            }

            const question: any[] = this.$store.getters.questionData(coordinates)
            // console.log('questions', question)

            let i = 0;
            const answers = JSON.parse(question[coordinates.question_id].value);
            return answers.map((el: any) => {
                el.last = (i >= answers.length - 1);
                i++;
                return el;
            });
        } else
            return null;
    }
}


</script>

<style scoped>
.modal {
    background: linear-gradient(140.62deg, hsla(0, 0%, 100%, 0.07) 2.81%, hsla(0, 0%, 100%, 0.07) 100.82%);
    padding: 3.6rem 3.6rem  3.6rem 3.6rem;
    box-shadow: 0 4px 52px hsla(274, 100%, 50%, 0.11);
    border-radius: 3rem;
    border-color: var(--light-opacity);
    border-width: 2px;
    border-style: solid;
    //width: 100%;
    height: fit-content;
    max-height: 50vh;
    overflow-y: scroll;
}
.overlay {
    background: black;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.list{
    height: fit-content;
    z-index: 1;
}
@media screen and (max-width:820px){
    .modal {
        background: linear-gradient(140.62deg, hsla(0, 0%, 100%, 0.07) 2.81%, hsla(0, 0%, 100%, 0.07) 100.82%);
        padding: 3.6rem 3.6rem  3.6rem 3.6rem;
        box-shadow: 0 4px 52px hsla(274, 100%, 50%, 0.11);
        border-radius: 3rem;
        border-color: var(--light-opacity);
        border-width: 2px;
        border-style: solid;
        width: 100%;
        height: fit-content;
        max-height: 50vh;
        overflow-y: scroll;
    }
}
</style>
