<template>
    <div class="popup" v-if="popup.show">
        <div class="yPopup">
            <div class="popup__icon"><img src="@/assets/img/tick.svg" alt=""></div>
            <div class="popup__title">{{ popup.message }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'YPopup'
})
export default class YPopup extends Vue{
    get popup() {
        return this.$store.getters.popup
    }
}
</script>

<style scoped>
.popup{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 9999;
}
.yPopup {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: linear-gradient(140.62deg, rgba(255, 255, 255, 0.25) 2.81%, rgba(255, 255, 255, 0.1) 100.82%);
    box-shadow: 0 4px 52px rgba(143, 0, 255, 0.11);
    border-radius: 16px;
    padding: 1rem;
    max-width: 90vw;
    border-top: rgba(255, 255, 255, 0.5);
    border-bottom:rgba(255, 255, 255, 0.5) ;
    border-right:rgba(255, 255, 255, 0);
    border-left:rgba(255, 255, 255, 0) ;
    backdrop-filter: blur(5px);
}
.popup__title{
    margin-left: 1rem;
}
</style>
