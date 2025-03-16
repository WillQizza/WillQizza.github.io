<script lang="ts" setup>
    import experiences from '../assets/experience.json';
    import { experienceRef } from '../waypoints';
import Experience from './Experience.vue';
</script>

<template>
    <div class="container" ref="experienceRef">
        <h1>Experience</h1>
        <hr />
        <div class="experiences">
            <Experience :company="experience.company" :title="experience.title" :from="experience.from" :to="experience.to" :responsibilities="experience.responsibilities" v-for="experience in experiences" />
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--background-color);
    width: 100%;
    padding-top: var(--nav-height);
    padding-bottom: 40px;
    font-size: 1.3em;
}

.container h1 {
    text-align: center;
    font-size: 3em;
    padding-bottom: 0;
    padding-top: 40px;
    margin-bottom: 0;
}

.container hr {
    border: 1px solid var(--font-color);
    width: 20%;
}

.experiences {
    padding-top: 50px;
}
</style>