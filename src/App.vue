<script setup lang="ts">
import Experience from './components/Experiences.vue';
import Landing from './components/Landing.vue';
import NavigationBar from './components/NavigationBar.vue';
import Projects from './components/Projects.vue';
</script>

<template>
    <NavigationBar />
    <Landing />
    <Projects />
    <Experience />
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
