<template>
    <YButton>test btt</YButton>
    <p> s;dl </p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YButton from "@/components/UI/YButton.vue";
import YAnswersList from "@/components/UI/YAnswersList.vue";
import YCoolButton from "@/components/UI/YCoolButton.vue";


@Options({
    name: 'App',
    components: {YAnswersList, YButton}
})
export default class App extends Vue {

}
</script>

<style>

.main{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.before_test {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: min-content;
}

.before_test__title {
    margin-bottom: 1rem;
    font-size: 18px;
}

.main__bottom {
    position: relative;
}
.bottom__container {
    width: 100%;
}

.question {
    left: 50%;
    top: 20%;
    height: 100%;
}

.before_test_text {
    font-size: 1.5rem;
    padding: 2rem;
    margin-bottom: 2rem;
    width: 50vw;
    text-align: left;
}
.disclaimer {
    font-style: italic;
    color: hsla(0, 0%, 100%, 0.4);
    font-weight: 400;
    font-size: 1.3rem;
}
.before_test_heading {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.24);
    padding-bottom: 2rem;
    text-align: left
}

* {
    scrollbar-width: thin;
    scrollbar-color: hsl(192, 8%, 74%) hsl(0, 0%, 20%);
}

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
    background-color: hsl(192, 8%, 74%);
}

*::-webkit-scrollbar-track:hover {
    background-color: hsl(192, 8%, 74%);
}

*::-webkit-scrollbar-track:active {
    background-color: hsl(192, 8%, 74%);
}

*::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: hsl(0, 0%, 20%);
}

*::-webkit-scrollbar-thumb:hover {
    background-color: hsl(0, 0%, 20%);
}

*::-webkit-scrollbar-thumb:active {
    background-color: hsl(0, 0%, 20%);
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

*,
::before,
::after {
    padding: 0;
    border: none;
    margin: 0;
    background: none;
    user-select: none;
    box-sizing: inherit;
    text-decoration: none;
}

.link:link,
.link:visited,
.link:hover,
.link:active {
    color: var(--light);
}

@media screen and (max-width:820px) {
    .before_test_text {
        font-size: 2rem;
        padding: 2rem;
        margin-bottom: 2rem;
        width: 87vw;
        text-align: left;
    }
    .disclaimer {
        font-style: italic;
        color: #ffffff66;
        font-weight: 400;
        font-size: 1.7rem;
    }
    .before_test_heading {
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.24);
        padding-bottom: 2rem;
        text-align: left
    }
    .question {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        top: auto;
    }
    .main__bottom {
        display: flex;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

@media (min-width: 1000px) {
    :root {
        font-size: .8rem;
    }
}
</style>
