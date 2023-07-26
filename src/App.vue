<template>
    <YButton>test btt</YButton>
    <p> s;dl </p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YButton from "@/components/UI/YButton.vue";


@Options({
    name: 'App',
    components: {YButton}
})
export default class App extends Vue {

}
</script>

<style>
:root {
    --light: hsl(0, 0%, 100%);
    --light-opacity: hsla(0, 0%, 100%, 0.27);

    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    background-attachment: fixed;
}
</style>
