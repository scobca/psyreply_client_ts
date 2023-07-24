<template>
    <YAnswersList/>
    <p> s;dl </p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YAnswersList from "@/components/UI/YAnswersList.vue";


@Options({
    name: 'App',
    components: {YAnswersList}
})
export default class App extends Vue {

}
</script>

<style>
:root {
    --light-opacity: hsla(0, 0%, 100%, 0.27);
}
</style>
