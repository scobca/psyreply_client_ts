<template>
    <div class="YAnswersList">

        <div class="modal">
            <div class="list">
<!--                <YAnswersItem v-for="item in answers">-->
<!--                    {{item}}-->
<!--                </YAnswersItem>-->
            </div>
        </div>
        <br>
        <p @click="getAnswers">answers</p>
    </div>
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

    getAnswers() {
        const coordinates = {
            test_id: 1,
            question_id: 1
        }

        const answer = this.$store.getters.answerData(coordinates)
        // console.log(, 'answer')
    }

    get answers() {
        if (this.$store.getters.blockOnPass != null) {
            const coordinates = {
                test_id: this.testArrId,
                question_id: this.questionArrId,
            }

            // return this.$store.getters.answerData(coordinates)
            return true
        }
        else
            return null
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
