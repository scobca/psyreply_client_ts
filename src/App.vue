<template>
    <YButton>test btt</YButton>
    <p> s;dl </p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YButton from "@/components/UI/YButton.vue";
import YAnswersList from "@/components/UI/YAnswersList.vue";


@Options({
    name: 'App',
    components: {YAnswersList, YButton}
})
export default class App extends Vue {

}
</script>

<style>
*::-webkit-scrollbar {
    width: 7px;
    max-height: 70vh;
}
*::-webkit-scrollbar-track {
    border-radius: 5px;
    height: 70vh;
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-right: 2rem;
    background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:hover {
    background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
    background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #323232;
}

*::-webkit-scrollbar-thumb:hover {
    background-color: #323232;
}

*::-webkit-scrollbar-thumb:active {
    background-color: #323232;
}

:root {
    --font-rubik: 'Rubik', sans-serif;

    font-family: var(--font-rubik);
    font-size: calc(1vw + .2rem);
    color: var(--light);
    box-sizing: border-box;

    --light: hsl(0, 0%, 100%);
    --light-opacity: hsla(0, 0%, 100%, 0.27);

    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    background-attachment: fixed;
}
</style>
