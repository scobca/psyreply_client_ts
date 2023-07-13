<template>
    <!--  <nav>-->
    <!--    <router-link to="/">Home</router-link> |-->
    <!--    <router-link to="/about">About</router-link>-->
    <!--  </nav>-->
    <!--  <router-view/>-->
    <div>
        <label>Update myDataProperty
            <input :value="myDataProperty" @input="updateMyProperty($event)"/>
        </label>
        <div>{{ myDataProperty }}</div>
        <div>{{ exampleProperty }}</div>
        <div>{{ example }}</div>
        <div>{{ computedExample }}</div>
    </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class App extends Vue {
    //Props
    @Prop({ default: 'Input Property' })
    exampleProperty!: string

    @Prop({ default: 'example Prop 2' })
    example!: string

    // Data property
    myDataProperty: string = 'Data Property'

    // Component method
    updateMyProperty ($event: { target: { value: string } }) {
        this.myDataProperty = $event.target.value
    }

    //Computed props
    get computedExample() {
        return Math.random()
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
