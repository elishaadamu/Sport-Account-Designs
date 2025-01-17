<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <RouterView />
    <nav>
        <RouterLink class="underline" to="/yoga"
            >click to go to yoga page</RouterLink
        >
        <!-- <RouterLink to="/about">About</RouterLink> -->
    </nav>
</template>

<style scoped></style>
