<script setup lang="ts">
import Contact from './components/Contact.vue';
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
    <Contact />
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
