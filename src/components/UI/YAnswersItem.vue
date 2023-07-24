<template>
    <div class="YAnswerItem">
        <div class="item" :class="{ 'item-active': active }">
            <div class="item__text">
                <slot></slot>
            </div>
            <div
                class="item__elipce"
                :class="{ 'item__elipce--active': active }"
            ></div>
        </div>

        <hr v-if="!last">
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";


@Options({
    name: 'YAnswersItem'
})

export default class YAnswersItem extends Vue {
    @Prop({})
    active!: boolean

    @Prop({})
    last!: boolean

    get testStore() {
        return this.$store.getters.getTestStore;
    }
}
</script>

<style scoped>
.item{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 5px;
    border-radius: 20px;
}
.item__text{
    width: 25rem;
    font-size: 1.5rem;
    padding-top: 5px;
    padding-bottom: 10px;
}
.item__elipce{
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: rgba(217, 217, 217, 0.17);;
}
.item__elipce--active {
    background-color: hsl(137, 100%, 65%);
}
hr {
    margin: 1rem 0 1rem 0;
    min-width: 30vw;
    //border-left: 0 solid white;
    //border-right: 0 solid white;
    //border-bottom: 0 solid white;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
}
.item-active {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #00000042;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 5px;
    border-radius: 20px;
    border: 1px solid #ffffff61;
}
@media screen and (max-width:820px){
    .item__text{
        width: 25rem;
        font-size: 2.9rem;
        padding-top: 5px;
        padding-bottom: 10px;
    }
}
</style>
