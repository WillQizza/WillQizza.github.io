<script setup lang="ts">
import Landing from './components/Landing.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
    <NavigationBar />
    <Landing />
</template>

<style>
a {
    text-decoration: none;
    color: var(--font-color);
}

a:hover {
    color: var(--link-hover-color);
}
</style>
