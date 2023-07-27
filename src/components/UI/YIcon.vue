<template>
    <div class="YIcon">
        <img class="logo header__logo" src="@/assets/img/logo.png" alt="header_logo">
        <h4 class="logo__title">Reply 2.0</h4>
        <span class="logo__subtext">| Тестирование</span>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'YIcon'
})
export default class YIcon extends Vue {

}

</script>

<style scoped>
.YIcon{
    color: white;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
}

.header__logo {
    width: 40px;
    margin-right: 5px;
}

.logo__subtext {
    margin-left: 5px;
    opacity: 0.51;
}

@media screen and (max-width:820px){
    .logo__title{
        font-size: 2rem;
    }
    .logo__subtext{
        font-size: 2rem;
    }
}
</style>
